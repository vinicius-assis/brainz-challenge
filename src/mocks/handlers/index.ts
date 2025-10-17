import { http, HttpResponse } from 'msw'
import { mockReviewSubjectsResponse } from '../../data/reviewSubjectsData'
import { mockExamsResponse } from '../../data/examsData'
import { mockApiResponse } from '../../data/mockData'

export const handlers = [
    http.get('/api/subjects', () => {
        return HttpResponse.json(mockReviewSubjectsResponse)
    }),

    http.get('/api/exams', () => {
        return HttpResponse.json(mockExamsResponse)
    }),

    http.get('/api/topics', () => {
        return HttpResponse.json(mockApiResponse)
    }),

]
