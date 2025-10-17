import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TopicCarousel from './index'

const mockTopics = [
    {
        id: '1',
        title: 'Topic 1',
        description: 'Description 1'
    },
    {
        id: '2',
        title: 'Topic 2',
        description: 'Description 2'
    },
    {
        id: '3',
        title: 'Topic 3',
        description: 'Description 3'
    },
    {
        id: '4',
        title: 'Topic 4',
        description: 'Description 4'
    },
    {
        id: '5',
        title: 'Topic 5',
        description: 'Description 5'
    }
]

describe('TopicCarousel', () => {
    it('should render category title', () => {
        render(
            <BrowserRouter>
                <TopicCarousel category="Test Category" topics={mockTopics} />
            </BrowserRouter>
        )
        expect(screen.getByText('Test Category')).toBeInTheDocument()
    })

    it('should render all topic cards in the carousel', () => {
        render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        expect(screen.getByText('Topic 1')).toBeInTheDocument()
        expect(screen.getByText('Topic 2')).toBeInTheDocument()
        expect(screen.getByText('Topic 3')).toBeInTheDocument()
        expect(screen.getByText('Topic 4')).toBeInTheDocument()
        expect(screen.getByText('Topic 5')).toBeInTheDocument()
    })

    it('should show navigation arrows', () => {
        render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        const prevButton = screen.getByLabelText('Anterior')
        const nextButton = screen.getByLabelText('Próximo')

        expect(prevButton).toBeInTheDocument()
        expect(nextButton).toBeInTheDocument()
    })


    it('should render show all link', () => {
        render(
            <BrowserRouter>
                <TopicCarousel
                    category="Test"
                    topics={mockTopics}
                />
            </BrowserRouter>
        )

        expect(screen.getByText(/Acessar todos os tópicos/)).toBeInTheDocument()
    })

    it('should apply category-specific styles when categoryId is provided', () => {
        render(
            <BrowserRouter>
                <TopicCarousel
                    category="Matemática"
                    topics={mockTopics}
                    categoryId="matematica"
                />
            </BrowserRouter>
        )

        const categoryElement = screen.getByText('Matemática')
        expect(categoryElement).toBeInTheDocument()
    })

    it('should render topic titles with truncate class', () => {
        const longTitleTopics = [
            {
                id: '1',
                title: 'Very Long Topic Title That Should Be Truncated',
                description: 'Description'
            }
        ]

        render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={longTitleTopics} />
            </BrowserRouter>
        )

        const titleElement = screen.getByText('Very Long Topic Title That Should Be Truncated')
        expect(titleElement).toHaveClass('truncate')
    })

    it('should apply mt-6 when isFirst is true', () => {
        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} isFirst={true} />
            </BrowserRouter>
        )

        const carouselDiv = container.firstChild as HTMLElement
        expect(carouselDiv).toHaveClass('mt-6')
    })

    it('should apply mt-12 when isFirst is false', () => {
        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} isFirst={false} />
            </BrowserRouter>
        )

        const carouselDiv = container.firstChild as HTMLElement
        expect(carouselDiv).toHaveClass('mt-12')
    })

    it('should apply mt-12 by default when isFirst is not provided', () => {
        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        const carouselDiv = container.firstChild as HTMLElement
        expect(carouselDiv).toHaveClass('mt-12')
    })

    it('should render all cards with flex-shrink-0 class', () => {
        const manyTopics = Array.from({ length: 10 }, (_, i) => ({
            id: `${i + 1}`,
            title: `Topic ${i + 1}`,
            description: `Description ${i + 1}`
        }))

        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={manyTopics} />
            </BrowserRouter>
        )

        const cards = container.querySelectorAll('.flex-shrink-0')
        expect(cards).toHaveLength(10)
    })

    it('should have overflow-hidden container', () => {
        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        const overflowContainer = container.querySelector('.overflow-hidden')
        expect(overflowContainer).toBeInTheDocument()
    })

    it('should have transition classes for smooth animation', () => {
        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        const transitionContainer = container.querySelector('.transition-transform')
        expect(transitionContainer).toBeInTheDocument()
        expect(transitionContainer).toHaveClass('duration-500', 'ease-out')
    })

    it('should handle responsive itemsPerView correctly', () => {
        // Mock window.innerWidth for different screen sizes
        const originalInnerWidth = window.innerWidth;

        // Test desktop size (>= 1024px)
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1200,
        });

        const { container } = render(
            <BrowserRouter>
                <TopicCarousel category="Test" topics={mockTopics} />
            </BrowserRouter>
        )

        // Should show 4 cards on desktop
        expect(container).toBeInTheDocument()

        // Restore original window.innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth,
        });
    })
})
