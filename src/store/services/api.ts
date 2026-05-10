import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/',
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
	  headers.set('accept', 'application/json')
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'themoviedbApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['PopularMovie'],
  endpoints: () => ({}),
})
