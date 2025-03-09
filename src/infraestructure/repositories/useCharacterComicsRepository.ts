import { useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { PagedListResponse } from '@/infraestructure/dto';
import { Comic } from '@/domain/model';
import { API_ENDPOINT } from '@/infraestructure/constants';

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
    queryFn: () => fetchCharacterComics(characterId!, options), // Ensure `characterId!` is non-null
    enabled: Boolean(characterId),
  });
};
