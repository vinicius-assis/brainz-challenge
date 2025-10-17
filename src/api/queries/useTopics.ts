import { useQuery } from '@tanstack/react-query'
import type { ApiResponse } from '../../types/api'
import { API_ENDPOINTS, QUERY_KEYS } from '../../constants/api'

const fetchTopics = async (): Promise<ApiResponse> => {
    const response = await fetch(API_ENDPOINTS.TOPICS)
    if (!response.ok) {
        throw new Error('Failed to fetch topics')
    }
    return response.json()
}

export const useTopics = () => {
    return useQuery({
        queryKey: QUERY_KEYS.TOPICS,
        queryFn: fetchTopics,
    })
}
