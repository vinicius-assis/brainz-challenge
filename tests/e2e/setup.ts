import { test as base } from '@playwright/test'

export const test = base.extend({
     
    page: async ({ page }, use) => {
        await page.addInitScript(() => {
            const mockData = {
                subjects: [
                    {
                        id: 1,
                        name: 'Matemática',
                        color: '#2569C3',
                        icon: 'math',
                        topics: [
                            { id: 1, name: 'Álgebra', progress: 75 },
                            { id: 2, name: 'Geometria', progress: 60 },
                        ]
                    },
                    {
                        id: 2,
                        name: 'Linguagens',
                        color: '#34238C',
                        icon: 'language',
                        topics: [
                            { id: 3, name: 'Literatura', progress: 80 },
                            { id: 4, name: 'Gramática', progress: 70 },
                        ]
                    }
                ],
                exams: [
                    {
                        id: 1,
                        title: '1º Simulado Enem de Matemática',
                        category: 'MATEMÁTICA',
                        color: '#2569C3',
                        availableDays: 5
                    },
                    {
                        id: 2,
                        title: '1º Simulado Enem de Linguagens',
                        category: 'LINGUAGENS',
                        color: '#34238C',
                        availableDays: 5
                    }
                ],
                topics: [
                    {
                        id: 1,
                        name: 'Matemática',
                        color: '#2569C3',
                        icon: 'math',
                        topics: [
                            { id: 1, name: 'Álgebra', progress: 75 },
                            { id: 2, name: 'Geometria', progress: 60 },
                        ]
                    }
                ]
            }

            const originalFetch = window.fetch
            window.fetch = async (url, options) => {
                if (typeof url === 'string') {
                    if (url.includes('/api/subjects')) {
                        return new Response(JSON.stringify({ subjects: mockData.subjects }), {
                            status: 200,
                            headers: { 'Content-Type': 'application/json' }
                        })
                    }
                    if (url.includes('/api/exams')) {
                        return new Response(JSON.stringify({ exams: mockData.exams }), {
                            status: 200,
                            headers: { 'Content-Type': 'application/json' }
                        })
                    }
                    if (url.includes('/api/topics')) {
                        return new Response(JSON.stringify({ categories: mockData.topics }), {
                            status: 200,
                            headers: { 'Content-Type': 'application/json' }
                        })
                    }
                }
                return originalFetch(url, options)
            }
        })

        // eslint-disable-next-line react-hooks/rules-of-hooks
        await use(page)
    }
})

export { expect } from '@playwright/test'
