import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './index'

describe('Layout', () => {
    it('should render header and footer', () => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )

        const header = document.querySelector('header')
        expect(header).toBeInTheDocument()

        const footer = document.querySelector('footer')
        expect(footer).toBeInTheDocument()
    })
})

