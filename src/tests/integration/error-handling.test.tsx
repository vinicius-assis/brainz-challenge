import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'
import Home from '../../pages/Home'
import Reviews from '../../pages/Reviews'
import { beforeAll, afterEach, afterAll, describe, test, expect } from 'vitest'

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

describe('Error Handling Integration Tests', () => {
    describe('API Error Scenarios', () => {
        test('should handle subjects API error with retry functionality', async () => {
            const user = userEvent.setup()

            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })

            const retryButton = screen.getByText('Tentar novamente')
            expect(retryButton).toBeInTheDocument()

            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.json({ subjects: [] })
                })
            )

            await user.click(retryButton)

            await waitFor(() => {
                expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
                expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
            })
        })

        test('should handle exams API error with retry functionality', async () => {
            const user = userEvent.setup()

            server.use(
                http.get('/api/exams', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })

            const retryButton = screen.getByText('Tentar novamente')
            expect(retryButton).toBeInTheDocument()

            server.use(
                http.get('/api/exams', () => {
                    return HttpResponse.json({ exams: [] })
                })
            )

            await user.click(retryButton)

            await waitFor(() => {
                expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
                expect(screen.getByText('Simulados')).toBeInTheDocument()
            })
        })

        test('should handle topics API error with retry functionality', async () => {
            const user = userEvent.setup()

            server.use(
                http.get('/api/topics', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Reviews />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })

            const retryButton = screen.getByText('Tentar novamente')
            expect(retryButton).toBeInTheDocument()

            server.use(
                http.get('/api/topics', () => {
                    return HttpResponse.json({ categories: [] })
                })
            )

            await user.click(retryButton)

            await waitFor(() => {
                expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
            })
        })
    })

    describe('Multiple API Errors', () => {
        test('should handle multiple API errors simultaneously', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                }),
                http.get('/api/exams', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                const errorMessages = screen.getAllByText('Erro ao carregar dados')
                expect(errorMessages).toHaveLength(2)
            }, { timeout: 3000 })

            const retryButtons = screen.getAllByText('Tentar novamente')
            expect(retryButtons).toHaveLength(2)
        })

        test('should handle partial API errors', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                }),
                http.get('/api/exams', () => {
                    return HttpResponse.json({ exams: [] })
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
                expect(screen.getByText('Simulados')).toBeInTheDocument()
            }, { timeout: 3000 })

            const retryButtons = screen.getAllByText('Tentar novamente')
            expect(retryButtons).toHaveLength(1)
        })
    })

    describe('Network Error Scenarios', () => {
        test('should handle network timeout', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })
        })

        test('should handle 500 server error', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.json(
                        { error: 'Internal Server Error' },
                        { status: 500 }
                    )
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })
        })

        test('should handle 404 not found error', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.json(
                        { error: 'Not Found' },
                        { status: 404 }
                    )
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            }, { timeout: 3000 })
        })
    })

    describe('Error Recovery', () => {
        test('should recover from error after successful retry', async () => {
            const user = userEvent.setup()
            let callCount = 0

            server.use(
                http.get('/api/subjects', () => {
                    callCount++
                    if (callCount === 1) {
                        return HttpResponse.error()
                    }
                    return HttpResponse.json({ subjects: [] })
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            const retryButton = screen.getByText('Tentar novamente')
            await user.click(retryButton)

            await waitFor(() => {
                expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
                expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
            })

            expect(callCount).toBe(2)
        })

        test('should handle multiple retry attempts', async () => {
            const user = userEvent.setup()
            let callCount = 0

            server.use(
                http.get('/api/subjects', () => {
                    callCount++
                    if (callCount <= 3) {
                        return HttpResponse.error()
                    }
                    return HttpResponse.json({ subjects: [] })
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            const retryButton1 = screen.getByText('Tentar novamente')
            await user.click(retryButton1)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            const retryButton2 = screen.getByText('Tentar novamente')
            await user.click(retryButton2)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            const retryButton3 = screen.getByText('Tentar novamente')
            await user.click(retryButton3)

            await waitFor(() => {
                expect(screen.queryByText('Erro ao carregar dados')).not.toBeInTheDocument()
                expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
            })

            expect(callCount).toBe(4)
        })
    })

    describe('Error UI States', () => {
        test('should show appropriate error message', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            expect(screen.getByText('Tentar novamente')).toBeInTheDocument()
        })

        test('should maintain UI layout during error state', async () => {
            server.use(
                http.get('/api/subjects', () => {
                    return HttpResponse.error()
                })
            )

            renderWithProviders(<Home />)

            await waitFor(() => {
                expect(screen.getByText('Erro ao carregar dados')).toBeInTheDocument()
            })

            expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
            expect(screen.getByText('Simulados')).toBeInTheDocument()
        })
    })
})