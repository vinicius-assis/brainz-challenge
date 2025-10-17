import { http, HttpResponse } from 'msw'
import { mockApiResponse } from '../../data/mockData'
import type { ReviewSubjectsResponse, ExamsResponse } from '../../types/api'

const mockReviewSubjectsResponse: ReviewSubjectsResponse = {
  subjects: [
    {
      id: '1',
      title: 'Matemática',
      image: '/math.svg',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900'
    },
    {
      id: '2',
      title: 'Linguagens',
      image: '/language.svg',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900'
    }
  ]
}

const mockExamsResponse: ExamsResponse = {
  exams: [
    {
      id: '1',
      category: 'MATEMÁTICA',
      title: '1º Simulado Enem de Matemática',
      daysAvailable: 5,
      textColor: '#2569C3'
    },
    {
      id: '2',
      category: 'LINGUAGENS',
      title: '1º Simulado Enem de Linguagens',
      daysAvailable: 5,
      textColor: '#34238C'
    }
  ]
}

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
