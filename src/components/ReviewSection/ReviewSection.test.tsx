import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ReviewSection from './index'

describe('ReviewSection', () => {
    it('should render the review title', () => {
        render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )
        expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
    })

    it('should render all four subject areas', () => {
        render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )
        expect(screen.getByText('Matemática')).toBeInTheDocument()
        expect(screen.getByText('Linguagens')).toBeInTheDocument()
        expect(screen.getByText('Ciências Humanas')).toBeInTheDocument()
        expect(screen.getByText('Ciências da Natureza')).toBeInTheDocument()
    })

    it('should render the link to access all areas', () => {
        render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/revisoes')
    })

    it('should show full text on larger screens and CirclePlus icon on smaller screens', () => {
        const { container } = render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )

        const fullTextSpan = container.querySelector('.hidden.sm\\:inline')
        const circlePlusIcon = container.querySelector('svg')

        expect(fullTextSpan).toBeInTheDocument()
        expect(circlePlusIcon).toBeInTheDocument()
        expect(fullTextSpan?.textContent).toBe('+ Acessar todas as áreas de conhecimento')
    })

    it('should render images for all subjects', () => {
        render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(4)
    })

    it('should have responsive grid layout', () => {
        const { container } = render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )

        const grid = container.querySelector('.grid')
        expect(grid?.className).toContain('grid-cols-1')
        expect(grid?.className).toContain('sm:grid-cols-2')
        expect(grid?.className).toContain('xl:grid-cols-4')
    })

    it('should have proper image container sizing', () => {
        const { container } = render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )

        const imageContainers = container.querySelectorAll('.w-\\[100px\\].h-\\[100px\\]')
        expect(imageContainers).toHaveLength(4)

        const images = screen.getAllByRole('img')
        images.forEach(img => {
            expect(img.className).toContain('max-w-[100px]')
            expect(img.className).toContain('max-h-[100px]')
            expect(img.className).toContain('object-contain')
        })
    })

    it('should have overflow protection on cards', () => {
        const { container } = render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )

        const cards = container.querySelectorAll('.overflow-hidden')
        expect(cards).toHaveLength(4)

        const cardsWithMinHeight = container.querySelectorAll('.min-h-\\[140px\\]')
        expect(cardsWithMinHeight).toHaveLength(4)
    })

    it('should allow text to wrap without truncation', () => {
        const { container } = render(
            <BrowserRouter>
                <ReviewSection />
            </BrowserRouter>
        )

        const titles = container.querySelectorAll('h4')
        titles.forEach(title => {
            expect(title.className).toContain('leading-tight')
            expect(title.className).not.toContain('truncate')
        })
    })
})

