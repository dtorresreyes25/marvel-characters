export interface PagedListResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: PaginatedResults<T>;
  etag: string;
}

export interface PaginatedResults<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
