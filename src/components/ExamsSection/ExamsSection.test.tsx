import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExamsSection from './index'

describe('ExamsSection', () => {
    it('should render the exams title', () => {
        render(<ExamsSection />)
        expect(screen.getByText('Simulados')).toBeInTheDocument()
    })

    it('should render all four exams', () => {
        render(<ExamsSection />)
        expect(screen.getByText('1º Simulado Enem de Linguagens')).toBeInTheDocument()
        expect(screen.getByText('1º Simulado Enem de Matemática')).toBeInTheDocument()
        expect(screen.getByText('1º Simulado Enem Ciência da Natureza')).toBeInTheDocument()
        expect(screen.getByText('2º Simulado Enem Ciência da Natureza')).toBeInTheDocument()
    })

    it('should display category badges', () => {
        render(<ExamsSection />)
        const linguagensTag = screen.getByText('LINGUAGENS')
        const matematicaTag = screen.getByText('MATEMÁTICA')
        const naturezasTag = screen.getAllByText('NATUREZAS')

        expect(linguagensTag).toBeInTheDocument()
        expect(matematicaTag).toBeInTheDocument()
        expect(naturezasTag).toHaveLength(2)
    })

    it('should display availability information', () => {
        render(<ExamsSection />)
        const availabilityText = screen.getAllByText(/Disponível há \d+ dias/)
        expect(availabilityText).toHaveLength(4)
    })
})

