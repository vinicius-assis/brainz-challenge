import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Header from './index'

describe('Header Component', () => {
  it('should render navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByText('Página Inicial')).toBeInTheDocument()
    expect(screen.getByText('Revisões')).toBeInTheDocument()
    expect(screen.getByText('Plano de Estudos')).toBeInTheDocument()
    expect(screen.getByText('Simulados')).toBeInTheDocument()
  })

  it('should have only Página Inicial and Revisões as clickable links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const paginaInicial = screen.getByText('Página Inicial')
    const revisoes = screen.getByText('Revisões')
    const planoEstudos = screen.getByText('Plano de Estudos')
    const simulados = screen.getByText('Simulados')

    expect(paginaInicial.tagName).toBe('A')
    expect(revisoes.tagName).toBe('A')
    expect(planoEstudos.tagName).toBe('SPAN')
    expect(simulados.tagName).toBe('SPAN')
  })

  it('should mark Página Inicial as active when on home page', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const activeIndicators = container.querySelectorAll('.bg-primary')
    expect(activeIndicators).toHaveLength(1)
  })
})

