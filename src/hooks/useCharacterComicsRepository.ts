import { useQuery } from '@tanstack/react-query';
import httpClient from '@/services/httpClient';
import { Comic, PagedListResponse } from '@/types';
import { API_ENDPOINT } from '@/constants';

interface FetchComicsParams {
  limit?: number;
}

const fetchCharacterComics = async (
  characterId: string,
  options?: FetchComicsParams
) => {
  const { data: response } = await httpClient.get<PagedListResponse<Comic>>(
    `/${API_ENDPOINT.CHARACTERS}/${characterId}/${API_ENDPOINT.COMICS}`,
    { params: options }
  );

  return response.data.results;
};

export const useCharacterComicsRepository = (
  characterId?: string,
  options?: FetchComicsParams
) => {
  return useQuery({
    queryKey: [
      API_ENDPOINT.CHARACTERS,
      characterId,
      API_ENDPOINT.COMICS,
      options?.limit ?? 'default',
    ],
    queryFn: () => fetchCharacterComics(characterId!, options),
    enabled: Boolean(characterId),
  });
};
