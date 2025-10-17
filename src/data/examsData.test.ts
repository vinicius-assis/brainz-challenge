import { describe, it, expect } from 'vitest';
import { mockExamsResponse } from './examsData';

describe('examsData', () => {
    it('should have correct structure', () => {
        expect(mockExamsResponse).toHaveProperty('exams');
        expect(Array.isArray(mockExamsResponse.exams)).toBe(true);
    });

    it('should contain 4 exams', () => {
        expect(mockExamsResponse.exams).toHaveLength(4);
    });

    it('should have all required properties for each exam', () => {
        mockExamsResponse.exams.forEach(exam => {
            expect(exam).toHaveProperty('id');
            expect(exam).toHaveProperty('category');
            expect(exam).toHaveProperty('title');
            expect(exam).toHaveProperty('daysAvailable');
            expect(exam).toHaveProperty('textColor');
        });
    });

    it('should have correct exam IDs', () => {
        const expectedIds = ['linguagens-1', 'matematica-1', 'natureza-1', 'natureza-2'];
        const actualIds = mockExamsResponse.exams.map(exam => exam.id);
        expect(actualIds).toEqual(expectedIds);
    });

    it('should have correct categories', () => {
        const expectedCategories = ['LINGUAGENS', 'MATEMÁTICA', 'NATUREZAS', 'NATUREZAS'];
        const actualCategories = mockExamsResponse.exams.map(exam => exam.category);
        expect(actualCategories).toEqual(expectedCategories);
    });

    it('should have unique IDs', () => {
        const ids = mockExamsResponse.exams.map(exam => exam.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have correct days available for all exams', () => {
        mockExamsResponse.exams.forEach(exam => {
            expect(exam.daysAvailable).toBe(5);
        });
    });

    it('should have valid text colors', () => {
        const expectedColors = [
            'text-[#34238C]', // Linguagens
            'text-[#2569C3]', // Matemática
            'text-[#24a31a]', // Natureza 1
            'text-[#24a31a]'  // Natureza 2
        ];
        const actualColors = mockExamsResponse.exams.map(exam => exam.textColor);
        expect(actualColors).toEqual(expectedColors);
    });

    it('should have valid titles starting with number', () => {
        mockExamsResponse.exams.forEach(exam => {
            expect(exam.title).toMatch(/^\d+/);
        });
    });
});
