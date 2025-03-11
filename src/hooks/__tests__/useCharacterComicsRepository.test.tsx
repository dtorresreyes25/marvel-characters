import '@testing-library/jest-dom';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useCharacterComicsRepository } from '../useCharacterComicsRepository';
import { describe, it, expect } from 'vitest';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';
import { characterComicsMock } from '@/tests/mocks/characterComicsMock.ts';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.error(`Query ${query.queryKey} failed:`, error);
      },
      onSuccess: (data) => {
        console.log('Query succeeded:', data);
      },
    }),
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useCharacterComicsRepository', () => {
  const characterId = '1';
  const options = { limit: 10 };

  it('should fetch comics when characterId is provided', async () => {
    const { result } = renderHook(
      () => useCharacterComicsRepository(characterId, options),
      { wrapper: createWrapper() }
    );

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    expect(result.current.data).toMatchObject(characterComicsMock.data.results);
  });
});
