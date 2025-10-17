import { test, expect } from './setup'

test.describe('Navigation E2E Tests', () => {
    test('should navigate between pages', async ({ page }) => {
        await page.goto('/')

        await page.getByText('Revisões').first().click()
        await expect(page).toHaveURL('/revisoes')
        await expect(page.getByRole('heading', { name: 'Revisões por área do conhecimento' })).toBeVisible()

        await page.getByText('Página Inicial').first().click()
        await expect(page).toHaveURL('/')
        await expect(page.getByText('Página Inicial').first()).toBeVisible()
    })

    test('should show active navigation state', async ({ page }) => {
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
})
