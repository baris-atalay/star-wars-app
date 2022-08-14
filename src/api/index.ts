import { ResourcesType } from '@/types/resources'

export const requestResource = <T = unknown>(resource: string = '', id: string = ''): Promise<T> =>
  fetch('https://swapi.dev/api/' + resource + (id ? '/' + id : id))
    .then((response) => response.json())
    .then((data) => data)

export const requestResourceByUrl = <T = unknown>(url: string): Promise<T> =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)

export const getResourceList = () => requestResource<Record<ResourcesType, string>>()
