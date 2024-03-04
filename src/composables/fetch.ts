export interface List<T> {
  meta: {
    page: number
    limit: number
  }
  data: T[]
}

const baseURL = import.meta.env.VITE_SERVER_URL

export function useFetch(endPoint: string) {
  const url = `${baseURL}${endPoint}`

  async function get<T>() {
    const response = await fetch(url)
    return (await response.json()) as T
  }

  function post<T>(data: T) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return {
    get,
    post
  }
}
