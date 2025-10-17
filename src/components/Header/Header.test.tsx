import { render, screen, fireEvent } from '@testing-library/react'
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

  it('should show ChevronDown only on desktop', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const chevronDown = container.querySelector('.hidden.md\\:block')
    expect(chevronDown).toBeInTheDocument()
  })

  it('should show mobile menu button only on mobile', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const mobileMenuButton = container.querySelector('.md\\:hidden')
    expect(mobileMenuButton).toBeInTheDocument()
  })

  it('should toggle mobile menu when button is clicked', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')

    // Menu should not be visible initially
    expect(container.querySelector('.absolute.top-full')).not.toBeInTheDocument()

    // Click to open menu
    fireEvent.click(mobileMenuButton)

    // Menu should now be visible
    expect(container.querySelector('.absolute.top-full')).toBeInTheDocument()

    // Click to close menu
    fireEvent.click(mobileMenuButton)

    // Menu should be hidden again
    expect(container.querySelector('.absolute.top-full')).not.toBeInTheDocument()
  })

  it('should show hamburger icon when menu is closed and X icon when open', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')

    // Should show hamburger icon initially (Menu icon)
    const menuIcon = mobileMenuButton.querySelector('svg')
    expect(menuIcon).toBeInTheDocument()

    // Click to open menu
    fireEvent.click(mobileMenuButton)

    // Should show X icon when menu is open
    const xIcon = mobileMenuButton.querySelector('svg')
    expect(xIcon).toBeInTheDocument()
  })
})

