import { useQuery } from '@tanstack/react-query';
import httpClient from '../services/httpClient';
import { Character, PagedListResponse } from '../types';
import { API_ENDPOINT } from '../constants';

const fetchCharacterDetails = async (characterId: string) => {
  const { data: response } = await httpClient.get<PagedListResponse<Character>>(
    `/${API_ENDPOINT.CHARACTERS}/${characterId}`
  );
  return response.data.results[0];
};

export const useCharacterDetailsRepository = (characterId?: string) => {
  return useQuery({
    queryKey: [API_ENDPOINT.CHARACTERS, characterId],
    queryFn: () => fetchCharacterDetails(characterId!),
    enabled: !!characterId,
  });
};
