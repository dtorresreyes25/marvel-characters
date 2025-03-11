import { http, HttpHandler, HttpResponse } from 'msw';
import { API_ENDPOINT } from '@/constants';
import { charactersListMock } from './characterListMock.ts';
import { characterComicsMock } from './characterComicsMock.ts';
import { Character } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

export const handlers: HttpHandler[] = [
  http.get(`${API_URL}/${API_ENDPOINT.CHARACTERS}`, ({ request }) => {
    const url = new URL(request.url);
    const nameStartsWith = url.searchParams.get('nameStartsWith');

    if (nameStartsWith) {
      return HttpResponse.json({
        ...charactersListMock,
        data: {
          ...charactersListMock.data,
          results: charactersListMock.data.results.filter(
            (character: Character) =>
              character.name
                .toLowerCase()
                .includes(nameStartsWith.toLowerCase())
          ),
        },
      });
    }

    return HttpResponse.json(charactersListMock);
  }),

  http.get(
    `${API_URL}/${API_ENDPOINT.CHARACTERS}/:id/${API_ENDPOINT.COMICS}`,
    () => {
      return HttpResponse.json(characterComicsMock);
    }
  ),

  http.get(`${API_URL}/${API_ENDPOINT.CHARACTERS}/:id`, ({ params }) => {
    const characterId = params.id;
    const character = charactersListMock.data.results.find(
      (character: Character) => character.id === Number(characterId)
    );

    if (!character) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      ...charactersListMock,
      data: {
        ...charactersListMock.data,
        results: [character],
      },
    });
  }),
];
