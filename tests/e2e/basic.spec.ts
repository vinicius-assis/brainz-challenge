import { test, expect } from './setup'

test.describe('Basic E2E Tests', () => {
    test('should load home page successfully', async ({ page }) => {
        await page.goto('/')

        await expect(page.getByText('Página Inicial').first()).toBeVisible()
        await expect(page.getByText('Faltam 89 dias para o ENEM!')).toBeVisible()
        await expect(page.getByText('Área de Revisão')).toBeVisible()
        await expect(page.getByRole('heading', { name: 'Simulados' })).toBeVisible()
    })

    test('should navigate between pages', async ({ page }) => {
        await page.goto('/')

        await page.getByText('Revisões').first().click()
        await expect(page).toHaveURL('/revisoes')
        await expect(page.getByRole('heading', { name: 'Revisões por área do conhecimento' })).toBeVisible()

        await page.getByText('Página Inicial').first().click()
        await expect(page).toHaveURL('/')
        await expect(page.getByText('Página Inicial').first()).toBeVisible()
    })

    test('should show navigation state correctly', async ({ page }) => {
        await page.goto('/')

        const homeLink = page.getByText('Página Inicial').first()
        await expect(homeLink).toHaveClass(/bg-primary\/10/)

        await page.getByText('Revisões').first().click()

        const reviewsLink = page.getByText('Revisões').first()
        await expect(reviewsLink).toHaveClass(/bg-primary\/10/)
    })

    test('should handle mobile menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })

        await page.goto('/')

        const mobileMenuButton = page.getByLabel('Toggle mobile menu')
        await mobileMenuButton.click()

        await expect(page.getByText('Página Inicial')).toHaveCount(2)
        await expect(page.getByText('Revisões')).toHaveCount(2)

        const mobileReviewsLinks = page.getByText('Revisões')
        await mobileReviewsLinks.nth(1).click()

        await expect(page).toHaveURL('/revisoes')
        await expect(page.getByRole('heading', { name: 'Revisões por área do conhecimento' })).toBeVisible()
    })

    test('should show disabled navigation items', async ({ page }) => {
        await page.goto('/')

        const planLink = page.getByRole('navigation').getByText('Plano de Estudos')
        const simsLink = page.getByRole('navigation').getByText('Simulados')

        await expect(planLink).toHaveClass(/cursor-not-allowed/)
        await expect(simsLink).toHaveClass(/cursor-not-allowed/)
    })

    test('should load reviews page', async ({ page }) => {
        await page.goto('/revisoes')

        await expect(page.getByRole('heading', { name: 'Revisões por área do conhecimento' })).toBeVisible()
        await expect(page.getByText('Página Inicial').first()).toBeVisible()
    })

    test('should handle review section link', async ({ page }) => {
        await page.goto('/')

        await expect(page.getByText('Área de Revisão')).toBeVisible()

        await page.getByText('+ Acessar todas as áreas de conhecimento').click()

        await expect(page).toHaveURL('/revisoes')
        await expect(page.getByRole('heading', { name: 'Revisões por área do conhecimento' })).toBeVisible()
    })
})
