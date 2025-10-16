import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ReviewHeader from './index'

describe('ReviewHeader', () => {
    it('should render the header content', () => {
        render(
            <BrowserRouter>
                <ReviewHeader />
            </BrowserRouter>
        )

        expect(screen.getByText('Revisões por área do conhecimento')).toBeInTheDocument()
        expect(screen.getByText('Voltar para a tela inicial')).toBeInTheDocument()
    })
})
