import { useQuery } from '@tanstack/react-query'
import type { ReviewSubjectsResponse } from '../../types/api'
import { API_ENDPOINTS, QUERY_KEYS } from '../../constants/api'

const fetchSubjects = async (): Promise<ReviewSubjectsResponse> => {
    const response = await fetch(API_ENDPOINTS.SUBJECTS)
    if (!response.ok) {
        throw new Error('Failed to fetch subjects')
    }
    return response.json()
}

export const useSubjects = () => {
    return useQuery({
        queryKey: QUERY_KEYS.SUBJECTS,
        queryFn: fetchSubjects,
    })
}
