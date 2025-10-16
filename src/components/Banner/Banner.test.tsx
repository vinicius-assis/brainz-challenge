import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Banner from './index'

describe('Banner Component', () => {
    it('should render the countdown message', () => {
        render(<Banner />)

        expect(screen.getByText('Faltam 89 dias para o ENEM!')).toBeInTheDocument()
    })

    it('should render the motivational text', () => {
        render(<Banner />)

        expect(screen.getByText(/Vamos juntos dar o nosso melhor/)).toBeInTheDocument()
    })

    it('should apply correct styling classes to heading', () => {
        render(<Banner />)

        const heading = screen.getByText('Faltam 89 dias para o ENEM!')
        expect(heading.className).toContain('text-secondary')
        expect(heading.className).toContain('text-title-0')
    })

    it('should apply correct styling classes to paragraph', () => {
        render(<Banner />)

        const paragraph = screen.getByText(/Vamos juntos dar o nosso melhor/)
        expect(paragraph.className).toContain('text-neutral-100')
        expect(paragraph.className).toContain('text-title-4')
    })

    it('should have primary background color', () => {
        const { container } = render(<Banner />)

        const bannerDiv = container.querySelector('.bg-primary')
        expect(bannerDiv).toBeInTheDocument()
    })
})

