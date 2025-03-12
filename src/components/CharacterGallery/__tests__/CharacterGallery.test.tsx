import { screen, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CharacterGallery from '../CharacterGallery';
import { Character } from '@/types/Character';
import '@testing-library/jest-dom';

vi.mock('../CharacterCard/', () => ({
  default: ({ character }: { character: Character }) => (
    <div data-testid="character-card">{character.name}</div>
  ),
}));

describe('CharacterGallery', () => {
  const mockCharacters: Character[] = [
    {
      id: '1',
      name: 'Character One',
      thumbnail: {
        path: 'https://example.com/image',
        extension: 'jpg',
      },
    },
    {
      id: '2',
      name: 'Character Two',
      thumbnail: {
        path: 'https://example.com/image',
        extension: 'jpg',
      },
    },
  ];

  it('renders the correct number of CharacterCard components', () => {
    render(<CharacterGallery characters={mockCharacters} />);

    expect(screen.getAllByTestId('character-card')).toHaveLength(
      mockCharacters.length
    );
  });

  it('renders CharacterCard components with correct data', () => {
    render(<CharacterGallery characters={mockCharacters} />);

    mockCharacters.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('does not render CharacterCard components when no characters are provided', () => {
    render(<CharacterGallery characters={[]} />);

    expect(screen.queryAllByTestId('character-card')).toHaveLength(0);
  });
});
