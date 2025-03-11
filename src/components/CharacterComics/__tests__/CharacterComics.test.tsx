import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Comic } from '@/types';
import { CharacterComics } from '@/components/CharacterComics/CharacterComics.tsx';
import '@testing-library/jest-dom';

vi.mock('@/components/CharacterComics/ComicCard', () => ({
  default: ({ comic }: { comic: Comic }) => (
    <div data-testid="comic-card">{comic.title}</div>
  ),
}));

describe('CharacterComics', () => {
  const mockComics = [
    { id: '1', title: 'Comic One' },
    { id: '2', title: 'Comic Two' },
  ] as unknown as Comic[];

  it('renders the section header correctly', () => {
    render(<CharacterComics comics={mockComics} />);

    expect(screen.getByText('Comics')).toBeInTheDocument();
  });

  it('renders the correct number of ComicCard components', () => {
    render(<CharacterComics comics={mockComics} />);

    expect(screen.getAllByTestId('comic-card')).toHaveLength(mockComics.length);
  });

  it('displays the comic titles', () => {
    render(<CharacterComics comics={mockComics} />);

    mockComics.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
