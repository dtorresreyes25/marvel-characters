import { useQuery } from '@tanstack/react-query';
import httpClient from '@/infraestructure/httpClient';
import { Character } from '@/domain/model';
import { PagedListResponse } from '@/infraestructure/dto';
import { API_ENDPOINT } from '@/infraestructure/constants';

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
