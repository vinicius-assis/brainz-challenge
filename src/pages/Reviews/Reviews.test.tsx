import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Reviews from './index'

describe('Reviews', () => {
    it('should render reviews page title', () => {
        render(
            <BrowserRouter>
                <Reviews />
            </BrowserRouter>
        )
        expect(screen.getByText('Revisões por área do conhecimento')).toBeInTheDocument()
    })
})

