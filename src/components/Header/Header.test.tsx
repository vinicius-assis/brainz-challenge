import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Header from './index'

describe('Header Component', () => {
  it('should render navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Página Inicial')).toBeInTheDocument()
    expect(screen.getByText('Revisões')).toBeInTheDocument()
    expect(screen.getByText('Plano de Estudos')).toBeInTheDocument()
    expect(screen.getByText('Simulados')).toBeInTheDocument()
  })

  it('should have only Home and Reviews as clickable links', () => {
    render(<Header />)

    const paginaInicial = screen.getByText('Página Inicial')
    const revisoes = screen.getByText('Revisões')
    const planoEstudos = screen.getByText('Plano de Estudos')
    const simulados = screen.getByText('Simulados')

    expect(paginaInicial.tagName).toBe('A')
    expect(revisoes.tagName).toBe('A')
    expect(planoEstudos.tagName).toBe('SPAN')
    expect(simulados.tagName).toBe('SPAN')
  })

  it('should mark Home as active by default', () => {
    const { container } = render(<Header />)

    const activeIndicators = container.querySelectorAll('.bg-primary')
    expect(activeIndicators).toHaveLength(1)
  })

  it('should toggle active item on click', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    const revisoesLink = screen.getByText('Revisões')

    await user.click(revisoesLink)

    const activeIndicators = container.querySelectorAll('.bg-primary')
    expect(activeIndicators).toHaveLength(1)
  })
})

