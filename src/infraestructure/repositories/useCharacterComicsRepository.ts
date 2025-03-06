import { useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { PagedListResponse } from '@/infraestructure/dto';
import { Comic } from '@/domain/model';
import { API_ENDPOINT } from '@/infraestructure/constants';

interface CharacterComicsParams {
  limit?: number;
}

export const useCharacterComicsRepository = (
  id?: string,
  params?: CharacterComicsParams
) =>
  useQuery({
    enabled: !!id,
    queryKey: [API_ENDPOINT.CHARACTERS, API_ENDPOINT.COMICS, id, params],
    queryFn: () =>
      httpClient.get<PagedListResponse<Comic>>(
        `/${API_ENDPOINT.CHARACTERS}/${id}/${API_ENDPOINT.COMICS}`,
        {
          params,
        }
      ),
    select: ({ data: response }) => response.data.results,
  });
