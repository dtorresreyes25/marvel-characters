import { useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { Character } from '@/domain/model';
import { PagedListResponse } from '@/infraestructure/dto';

const API_ENDPOINT = 'characters';

export const useCharactersDetailsRepository = (id?: string) =>
  useQuery({
    enabled: !!id,
    queryKey: [API_ENDPOINT, id],
    queryFn: () =>
      httpClient.get<PagedListResponse<Character>>(`/${API_ENDPOINT}/${id}`),
    select: ({ data: response }) => response.data.results[0],
  });
