import { useQuery, useQueries } from '@tanstack/react-query'
import { requestResource, getResourceList } from '@/api'

const MultiList = () => {
  const { data: resourceList } = useQuery<Record<string, string>>(['resources'], getResourceList)
  const queryList =
    (resourceList &&
      Object.keys(resourceList).map((resource) => ({
        queryKey: ['resource', resource],
        queryFn: () => requestResource(resource),
      }))) ||
    []

  const resources = useQueries({
    queries: queryList,
  })

  return (
    <div>
      <h1>Test</h1>
      <h1>List</h1>
    </div>
  )
}

export default MultiList
