import { useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { Character } from '@/domain/model';
import { PagedListResponse } from '@/infraestructure/dto';
import { API_ENDPOINT } from '@/infraestructure/constants';

export const useCharactersDetailsRepository = (id?: string) =>
  useQuery({
    enabled: !!id,
    queryKey: [API_ENDPOINT.CHARACTERS, id],
    queryFn: () =>
      httpClient.get<PagedListResponse<Character>>(
        `/${API_ENDPOINT.CHARACTERS}/${id}`
      ),
    select: ({ data: response }) => response.data.results[0],
  });
