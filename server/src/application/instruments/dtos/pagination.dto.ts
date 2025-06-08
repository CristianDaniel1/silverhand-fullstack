import { Category } from '../../../domain/entities/instrument.entity';

export class PaginationDto {
  constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly category?: Category,
    public readonly stringNum?: number,
    public readonly search?: string
  ) {}

  static createFromQuery(query: any): PaginationDto {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;

    const category = query.category?.toUpperCase() as Category | undefined;
    const stringNum = query.stringNum ? parseInt(query.stringNum) : undefined;
    const search = query.search ? String(query.search) : undefined;

    return new PaginationDto(page, limit, category, stringNum, search);
  }
}
