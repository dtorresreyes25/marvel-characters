import { keepPreviousData, useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { Character } from '@/domain/model';
import { PagedListResponse } from '@/infraestructure/dto';
import { API_ENDPOINT } from '@/infraestructure/constants';

interface CharactersParams {
  nameStartsWith?: string | null;
  limit?: number;
}

export const useCharactersRepository = (params: CharactersParams) =>
  useQuery({
    queryKey: [API_ENDPOINT.CHARACTERS, params],
    queryFn: () =>
      httpClient.get<PagedListResponse<Character>>(
        `/${API_ENDPOINT.CHARACTERS}`,
        {
          params,
        }
      ),
    select: ({ data: pagedListResponse }) => pagedListResponse.data,
    placeholderData: keepPreviousData,
  });
