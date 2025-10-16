import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ReviewSection from './index'

describe('ReviewSection', () => {
    it('should render the review title', () => {
        render(<ReviewSection />)
        expect(screen.getByText('Área de Revisão')).toBeInTheDocument()
    })

    it('should render all four subject areas', () => {
        render(<ReviewSection />)
        expect(screen.getByText('Matemática')).toBeInTheDocument()
        expect(screen.getByText('Linguagens')).toBeInTheDocument()
        expect(screen.getByText('Ciências Humanas')).toBeInTheDocument()
        expect(screen.getByText('Ciências da Natureza')).toBeInTheDocument()
    })

    it('should render the link to access all areas', () => {
        render(<ReviewSection />)
        const link = screen.getByText('+ Acessar todas as áreas de conhecimento')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/revisoes')
    })

    it('should render images for all subjects', () => {
        render(<ReviewSection />)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(4)
    })
})

