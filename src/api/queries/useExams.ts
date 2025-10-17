import { useQuery } from '@tanstack/react-query'
import type { ExamsResponse } from '../../types/api'
import { API_ENDPOINTS, QUERY_KEYS } from '../../constants/api'

const fetchExams = async (): Promise<ExamsResponse> => {
    const response = await fetch(API_ENDPOINTS.EXAMS)
    if (!response.ok) {
        throw new Error('Failed to fetch exams')
    }
    return response.json()
}

export const useExams = () => {
    return useQuery({
        queryKey: QUERY_KEYS.EXAMS,
        queryFn: fetchExams,
    })
}
