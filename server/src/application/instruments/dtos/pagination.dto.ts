import { Category } from '../../../domain/entities/instrument.entity';

export class PaginationDto {
  private constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly category?: Category
  ) {}

  static create(
    page: number = 1,
    limit: number = 10,
    category?: Category
  ): PaginationDto {
    return new PaginationDto(page, limit, category);
  }
}
