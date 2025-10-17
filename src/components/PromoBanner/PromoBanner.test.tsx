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

    it('should have correct background color and responsive padding', () => {
        const { container } = render(<PromoBanner />)

        const banner = container.querySelector('.bg-secondary-50')
        expect(banner).toBeInTheDocument()
        expect(banner?.className).toContain('py-6')
        expect(banner?.className).toContain('px-6')
        expect(banner?.className).toContain('lg:py-10')
        expect(banner?.className).toContain('lg:pr-12')
        expect(banner?.className).toContain('lg:pl-28')
    })

    it('should have responsive flex layout', () => {
        const { container } = render(<PromoBanner />)

        const flexContainer = container.querySelector('.flex')
        expect(flexContainer).toBeInTheDocument()
        expect(flexContainer?.className).toContain('flex-col')
        expect(flexContainer?.className).toContain('lg:flex-row')
        expect(flexContainer?.className).toContain('lg:items-center')
    })

    it('should display illustration image with responsive sizing', () => {
        render(<PromoBanner />)

        const image = screen.getByAltText('Ilustração de estudantes')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src')
        expect(image.className).toContain('w-24')
        expect(image.className).toContain('h-24')
        expect(image.className).toContain('lg:w-32')
        expect(image.className).toContain('lg:h-32')
        expect(image.className).toContain('mx-auto')
        expect(image.className).toContain('lg:mx-0')
    })

    it('should have responsive button width', () => {
        render(<PromoBanner />)

        const button = screen.getByRole('button', { name: /Acessar o meu plano de estudos/i })
        expect(button.className).toContain('w-full')
        expect(button.className).toContain('lg:w-auto')
    })
})

