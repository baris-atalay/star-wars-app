import { useInfiniteQuery } from '@tanstack/react-query'
import { requestResource, requestResourceByUrl } from '@/api'
import { ResourcesType, ResourceList, ResourceUnion } from '@/types/resources'

const useQueryResourceList = (resourceName?: ResourcesType | string, enabled?: boolean) => {
  const result = useInfiniteQuery(
    ['resource', resourceName],
    ({ pageParam: url }) =>
      url
        ? requestResourceByUrl<ResourceList<ResourceUnion>>(url)
        : requestResource<ResourceList<ResourceUnion>>(resourceName),
    {
      enabled: enabled,
      getNextPageParam: (lastPage, pages) => lastPage.next,
    },
  )

  return {
    ...result,
    data: {
      ...result.data,
      pages: result.data?.pages.map((page) => ({
        ...page,
        results: page.results.map((resource) => ({
          ...resource,
          id: new URL(resource.url).pathname.split('/').slice(-2, -1)[0],
        })),
      })),
    },
  }
}

export default useQueryResourceList
