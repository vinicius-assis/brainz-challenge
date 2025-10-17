import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'
import Home from '../../pages/Home'
import Reviews from '../../pages/Reviews'
import { beforeAll, afterEach, afterAll, describe, test, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
})

const renderWithProviders = (ui: React.ReactElement) => {
    const queryClient = createTestQueryClient()
    return render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </QueryClientProvider>
    )
}

describe('API Integration Tests', () => {
    describe('Data Loading', () => {
        test('should load subjects data successfully', async () => {
            renderWithProviders(<Home />)

            expect(screen.getByText('Área de Revisão')).toBeInTheDocument()

            await waitFor(() => {
                expect(screen.getByText('+ Acessar todas as áreas de conhecimento')).toBeInTheDocument()
            }, { timeout: 3000 })

            expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
        })

        test('should load exams data successfully', async () => {
            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Simulados')).toBeInTheDocument()
            }, { timeout: 3000 })

            await waitFor(() => {
                expect(screen.getAllByText(/Disponível há/)).toHaveLength(4)
            }, { timeout: 3000 })
        })

        test('should load topics data successfully', async () => {
            renderWithProviders(<Reviews />)

            expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()

            await waitFor(() => {
                expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
            }, { timeout: 3000 })

            expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
        })
    })

    describe('Error Handling', () => {
        test('should handle subjects API error', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })

            expect(screen.getByText('Tentar novamente')).toBeInTheDocument()
        })

        test('should handle exams API error', async () => {
            server.use(
                http.get('/api/exams', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })
        })

        test('should handle topics API error', async () => {
            server.use(
                http.get('/api/topics', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Reviews />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })

            expect(screen.getByText('Tentar novamente')).toBeInTheDocument()
        })

        test('should retry API call on error', async () => {
            const user = userEvent.setup()
            let callCount = 0

            server.use(
                http.get('/api/topics', () => {
                    callCount++
                    if (callCount === 1) {
                        return HttpResponse.error()
                    }
                    return HttpResponse.json({ categories: [] })
                })
            )

            renderWithProviders(<Reviews />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            const retryButton = screen.getByText('Tentar novamente')
            await user.click(retryButton)

            await waitFor(() => {
                expect(callCount).toBe(2)
            })
        })
    })

    describe('Loading States', () => {
        test('should show loading spinner during API calls', async () => {
            server.use(
                http.get('/api/subjects', async () => {
                    await new Promise(resolve => setTimeout(resolve, 100))
                    return HttpResponse.json({ subjects: [] })
                })
            )

            renderWithProviders(<Home />)

            expect(screen.getAllByTestId('loading-spinner')).toHaveLength(2)

            await waitFor(() => {
                expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
            })
        })

        test('should handle multiple API calls simultaneously', async () => {
            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
                expect(screen.getByText('Simulados')).toBeInTheDocument()
            }, { timeout: 3000 })

            await waitFor(() => {
                expect(screen.queryAllByTestId('loading-spinner')).toHaveLength(0)
            }, { timeout: 3000 })
        })
    })
})