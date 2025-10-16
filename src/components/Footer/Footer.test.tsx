import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './index'

describe('Footer', () => {
    it('should render the footer text', () => {
        render(<Footer />)
        expect(screen.getByText(/Powered by/i)).toBeInTheDocument()
        expect(screen.getByText(/Big Brain/i)).toBeInTheDocument()
    })

    it('should render as a footer element', () => {
        const { container } = render(<Footer />)
        const footer = container.querySelector('footer')
        expect(footer).toBeInTheDocument()
    })

    it('should render logos', () => {
        render(<Footer />)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        expect(screen.getByAltText('Big Brain')).toBeInTheDocument()
        expect(screen.getByAltText('Microsoft')).toBeInTheDocument()
    })
})

