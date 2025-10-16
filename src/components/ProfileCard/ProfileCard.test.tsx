import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProfileCard from './index'

describe('ProfileCard Component', () => {
    it('should render welcome message', () => {
        render(<ProfileCard />)

        expect(screen.getByText('Boas-vindas')).toBeInTheDocument()
    })

    it('should render user name', () => {
        render(<ProfileCard />)

        expect(screen.getByText('José de Abreu')).toBeInTheDocument()
    })

    it('should render main heading', () => {
        render(<ProfileCard />)

        expect(screen.getByText('Vamos ativar o seu painel de desempenho?')).toBeInTheDocument()
    })

    it('should render profile image', () => {
        render(<ProfileCard />)

        const image = screen.getByAltText('Profile')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src')
    })

    it('should render call to action button', () => {
        render(<ProfileCard />)

        const button = screen.getByRole('button', { name: /Acessar o meu plano de estudos/i })
        expect(button).toBeInTheDocument()
    })

    it('should render explanatory text', () => {
        render(<ProfileCard />)

        expect(screen.getByText(/À medida que você avança/i)).toBeInTheDocument()
    })

    it('should have neutral-400 border', () => {
        const { container } = render(<ProfileCard />)

        const card = container.querySelector('.border-neutral-400')
        expect(card).toBeInTheDocument()
    })

    it('should render personalized text', () => {
        render(<ProfileCard />)

        expect(screen.getByText(/personalizado e comece a estudar do seu jeito/i)).toBeInTheDocument()
    })
})

