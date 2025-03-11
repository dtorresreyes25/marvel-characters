import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ComicCard from '../ComicCard';
import { Comic } from '@/types';
import '@testing-library/jest-dom';

vi.mock('@/components/Typography', () => ({
  default: ({ children }: { variant: string; children: React.ReactNode }) => (
    <span data-testid="typography">{children}</span>
  ),
}));

describe('ComicCard', () => {
  const mockComic: Comic = {
    id: '1',
    title: 'Amazing Comic',
    thumbnail: {
      path: 'https://example.com/image',
      extension: 'jpg',
    },
    dates: [
      {
        type: 'onsaleDate',
        date: '2022-04-20',
      },
    ],
  };

  it('renders the comic title', () => {
    render(<ComicCard comic={mockComic} />);
    expect(screen.getByText(mockComic.title)).toBeInTheDocument();
  });

  it('renders the comic thumbnail with the correct src and alt attributes', () => {
    render(<ComicCard comic={mockComic} />);
    const image = screen.getByAltText(`Cover of ${mockComic.title}`);
    expect(image).toHaveAttribute(
      'src',
      `${mockComic.thumbnail.path}.${mockComic.thumbnail.extension}`
    );
  });

  it('renders the publication year when available', () => {
    render(<ComicCard comic={mockComic} />);
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('does not render publication year if not available', () => {
    const comicWithoutDate: Comic = {
      ...mockComic,
      dates: [],
    };
    render(<ComicCard comic={comicWithoutDate} />);
    expect(screen.queryByText('2022')).toBeNull();
  });
});
