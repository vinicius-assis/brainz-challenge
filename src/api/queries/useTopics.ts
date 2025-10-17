import { useQuery } from '@tanstack/react-query'
import type { ApiResponse } from '../../types/api'

const fetchTopics = async (): Promise<ApiResponse> => {
    const response = await fetch('/api/topics')
    if (!response.ok) {
        throw new Error('Failed to fetch topics')
    }
    return response.json()
}

export const useTopics = () => {
    return useQuery({
        queryKey: ['topics'],
        queryFn: fetchTopics,
    })
}
