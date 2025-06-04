export class PaginationResponseDto<T> {
  constructor(
    public readonly instruments: T[],
    public readonly total: number,
    public readonly page: number,
    public readonly limit: number,
    public readonly lastPage: number,
    public readonly hasNextPage: boolean,
    public readonly hasPreviousPage: boolean
  ) {}
}
