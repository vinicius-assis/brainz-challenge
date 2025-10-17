import { useQuery } from '@tanstack/react-query'
import type { ReviewSubjectsResponse } from '../../data/reviewSubjectsData'

const fetchSubjects = async (): Promise<ReviewSubjectsResponse> => {
    const response = await fetch('/api/subjects')
    if (!response.ok) {
        throw new Error('Failed to fetch subjects')
    }
    return response.json()
}

export const useSubjects = () => {
    return useQuery({
        queryKey: ['subjects'],
        queryFn: fetchSubjects,
    })
}
