import { keepPreviousData, useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { Character } from '@/domain/model';
import { PagedListResponse } from '@/infraestructure/dto';

interface FetchCharactersParams {
  nameStartsWith?: string | null;
  limit?: number;
}

const API_ENDPOINT = 'characters';

export const useCharactersRepository = (params: FetchCharactersParams) =>
  useQuery({
    queryKey: [API_ENDPOINT, params],
    queryFn: () =>
      httpClient.get<PagedListResponse<Character>>(`/${API_ENDPOINT}`, {
        params,
      }),
    select: ({ data }) => data,
    placeholderData: keepPreviousData,
  });
