import { act, renderHook, waitFor } from '@testing-library/react';
import { useCharacterDetailsRepository } from '@/hooks/useCharacterDetailsRepository';
import { describe, it, expect } from 'vitest';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { charactersListMock } from '@/tests/mocks/characterListMock.ts';

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

describe('useCharacterDetailsRepository', () => {
  it('should fetch character details when characterId is provided', async () => {
    const characterId = '1';

    const { result } = renderHook(
      () => useCharacterDetailsRepository(characterId),
      { wrapper: createWrapper() }
    );

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    expect(result.current.data).toEqual(charactersListMock.data.results[0]);
  });
});
