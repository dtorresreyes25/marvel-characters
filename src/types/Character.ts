export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: MarvelResourceList;
  series: MarvelResourceList;
  stories: MarvelResourceList;
  events: MarvelResourceList;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}

export interface MarvelResourceList {
  available: number;
  collectionURI: string;
  items: Resource[];
  returned: number;
}

export interface Resource {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
}
