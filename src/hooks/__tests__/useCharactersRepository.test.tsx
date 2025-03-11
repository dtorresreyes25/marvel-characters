import { renderHook, act, waitFor } from '@testing-library/react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { expect, it, describe } from 'vitest';
import { useCharactersRepository } from '@/hooks';
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

describe('useCharactersRepository', () => {
  it('should fetch characters successfully', async () => {
    const { result } = renderHook(
      () => useCharactersRepository({ nameStartsWith: '', limit: 10 }),
      { wrapper: createWrapper() }
    );

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    expect(result.current.data.results).toEqual(
      charactersListMock.data.results
    );
  });
});
