import { describe, it, expect } from 'vitest'
import { getCategoryStyles } from './categoryStyles'

describe('getCategoryStyles', () => {
    it('should return linguagens styles for linguagens category', () => {
        const styles = getCategoryStyles('linguagens')

        expect(styles.bgColor).toBe('#F1EEFF')
        expect(styles.textColor).toBe('#34238C')
    })

    it('should return matematica styles for matematica category', () => {
        const styles = getCategoryStyles('matematica')

        expect(styles.bgColor).toBe('#ECF4FF')
        expect(styles.textColor).toBe('#2569C3')
    })

    it('should return natureza styles for natureza category', () => {
        const styles = getCategoryStyles('natureza')

        expect(styles.bgColor).toBe('#DBFAE3')
        expect(styles.textColor).toBe('#24a31a')
    })

    it('should return humanas styles for humanas category', () => {
        const styles = getCategoryStyles('humanas')

        expect(styles.bgColor).toBe('#FFF4D1')
        expect(styles.textColor).toBe('#967200')
    })

    it('should return default styles for unknown category', () => {
        const styles = getCategoryStyles('unknown')

        expect(styles.bgColor).toBe('#F1EEFF')
        expect(styles.textColor).toBe('#34238C')
    })

    it('should return default styles when categoryId is undefined', () => {
        const styles = getCategoryStyles()

        expect(styles.bgColor).toBe('#F1EEFF')
        expect(styles.textColor).toBe('#34238C')
    })
})
