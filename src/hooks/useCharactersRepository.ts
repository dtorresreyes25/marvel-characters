import { keepPreviousData, useQuery } from '@tanstack/react-query';
import httpClient from '../services/httpClient';
import { Character, PagedListResponse } from '../types';

import { API_ENDPOINT } from '../constants';

interface FetchCharactersParams {
  nameStartsWith?: string | null;
  limit?: number;
}

const fetchCharacters = async (options: FetchCharactersParams) => {
  const { data: pagedListResponse } = await httpClient.get<
    PagedListResponse<Character>
  >(`/${API_ENDPOINT.CHARACTERS}`, { params: options });
  return pagedListResponse.data;
};

export const useCharactersRepository = (options: FetchCharactersParams) => {
  return useQuery({
    queryKey: [API_ENDPOINT.CHARACTERS, options],
    queryFn: () => fetchCharacters(options),
    placeholderData: keepPreviousData,
  });
};
