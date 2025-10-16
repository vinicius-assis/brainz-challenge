import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Container from './index'

describe('Container Component', () => {
    it('should render children correctly', () => {
        render(
            <Container>
                <div>Test Content</div>
            </Container>
        )

        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('should apply min-h-screen class', () => {
        const { container } = render(
            <Container>
                <div>Content</div>
            </Container>
        )

        const containerDiv = container.firstChild as HTMLElement
        expect(containerDiv.className).toContain('min-h-screen')
    })

    it('should apply horizontal padding', () => {
        const { container } = render(
            <Container>
                <div>Content</div>
            </Container>
        )

        const containerDiv = container.firstChild as HTMLElement
        expect(containerDiv.className).toContain('px-14')
    })

    it('should accept additional className prop', () => {
        const { container } = render(
            <Container className="custom-class">
                <div>Content</div>
            </Container>
        )

        const containerDiv = container.firstChild as HTMLElement
        expect(containerDiv.className).toContain('custom-class')
    })

    it('should render multiple children', () => {
        render(
            <Container>
                <div>First Child</div>
                <div>Second Child</div>
                <div>Third Child</div>
            </Container>
        )

        expect(screen.getByText('First Child')).toBeInTheDocument()
        expect(screen.getByText('Second Child')).toBeInTheDocument()
        expect(screen.getByText('Third Child')).toBeInTheDocument()
    })
})

