import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PromoBanner from './index'

describe('PromoBanner Component', () => {
    it('should render main heading', () => {
        render(<PromoBanner />)

        expect(screen.getByText('Faltam apenas 89 dias para o Enem')).toBeInTheDocument()
    })

    it('should render descriptive text', () => {
        render(<PromoBanner />)

        expect(screen.getByText(/Seu jeito! Seu ritmo!/i)).toBeInTheDocument()
    })

    it('should render call to action button', () => {
        render(<PromoBanner />)

        const button = screen.getByRole('button', { name: /Acessar o meu plano de estudos/i })
        expect(button).toBeInTheDocument()
    })

    it('should have secondary-100 border', () => {
        const { container } = render(<PromoBanner />)

        const banner = container.querySelector('.border-secondary-100')
        expect(banner).toBeInTheDocument()
    })

    it('should have correct background color', () => {
        const { container } = render(<PromoBanner />)

        const banner = container.querySelector('.bg-secondary-50')
        expect(banner).toBeInTheDocument()
    })

    it('should display illustration image', () => {
        render(<PromoBanner />)

        const image = screen.getByAltText('Ilustração de estudantes')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src')
    })
})

