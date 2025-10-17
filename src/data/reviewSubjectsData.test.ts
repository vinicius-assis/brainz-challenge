import { describe, it, expect } from 'vitest';
import { mockReviewSubjectsResponse } from './reviewSubjectsData';

describe('reviewSubjectsData', () => {
  it('should have correct structure', () => {
    expect(mockReviewSubjectsResponse).toHaveProperty('subjects');
    expect(Array.isArray(mockReviewSubjectsResponse.subjects)).toBe(true);
  });

  it('should contain 4 subjects', () => {
    expect(mockReviewSubjectsResponse.subjects).toHaveLength(4);
  });

  it('should have all required properties for each subject', () => {
    mockReviewSubjectsResponse.subjects.forEach(subject => {
      expect(subject).toHaveProperty('id');
      expect(subject).toHaveProperty('title');
      expect(subject).toHaveProperty('image');
      expect(subject).toHaveProperty('bgColor');
      expect(subject).toHaveProperty('borderColor');
      expect(subject).toHaveProperty('textColor');
    });
  });

  it('should have correct subject IDs', () => {
    const expectedIds = ['matematica', 'linguagens', 'natureza', 'humanas'];
    const actualIds = mockReviewSubjectsResponse.subjects.map(subject => subject.id);
    expect(actualIds).toEqual(expectedIds);
  });

  it('should have correct subject titles', () => {
    const expectedTitles = ['Matemática', 'Linguagens', 'Ciências da Natureza', 'Ciências Humanas'];
    const actualTitles = mockReviewSubjectsResponse.subjects.map(subject => subject.title);
    expect(actualTitles).toEqual(expectedTitles);
  });

  it('should have unique IDs', () => {
    const ids = mockReviewSubjectsResponse.subjects.map(subject => subject.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid image paths', () => {
    mockReviewSubjectsResponse.subjects.forEach(subject => {
      // Images can be either .svg file paths or data URLs from Vite imports
      expect(subject.image).toMatch(/\.(svg|png|jpg|jpeg)$|^data:/);
    });
  });

  it('should have consistent border color', () => {
    mockReviewSubjectsResponse.subjects.forEach(subject => {
      expect(subject.borderColor).toBe('border-neutral-400');
    });
  });
});
