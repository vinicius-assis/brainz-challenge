import { useQuery } from '@tanstack/react-query'
import type { ExamsResponse } from '../../data/examsData'

const fetchExams = async (): Promise<ExamsResponse> => {
    const response = await fetch('/api/exams')
    if (!response.ok) {
        throw new Error('Failed to fetch exams')
    }
    return response.json()
}

export const useExams = () => {
    return useQuery({
        queryKey: ['exams'],
        queryFn: fetchExams,
    })
}
