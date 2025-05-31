export interface PaginationResponseDto<T> {
  instruments: T[];
  total: number;
  page: number;
  limit: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
