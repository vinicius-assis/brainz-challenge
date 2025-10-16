import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './index'

describe('Home', () => {
    it('should render home page sections', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
        expect(screen.getByText('Simulados')).toBeInTheDocument()
    })

    it('should render profile card', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByText('Boas-vindas')).toBeInTheDocument()
        expect(screen.getByText('José de Abreu')).toBeInTheDocument()
    })
})

