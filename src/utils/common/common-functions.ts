import { BadRequestException, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationDetailsInput } from '../interfaces/interfaces';

export const checkNotFoundError = (data: any, entity: string, id: string) => {
  if (!data) {
    throw new NotFoundException(`${entity} with id ${id} is not found`);
  }
};

export const transformResponse = (dtoClass: any, data: any) => {
  const options = { excludeExtraneousValues: true };
  return plainToInstance(dtoClass, data, options);
};

export const checkPaginationExist = (query: PaginationDetailsInput) => {
  const { page, pageSize } = query;

  const isPageExist = page !== undefined;
  const isPageSizeExist = pageSize !== undefined;

   if ((isPageExist && !isPageSizeExist) || (!isPageExist && isPageSizeExist)) {
     throw new BadRequestException('Please ensure both page and pageSize are provided.');
   }

  if (page == 0) {
    throw new BadRequestException('Page number must be greater than 0.');
  }

  if (pageSize == 0) {
    throw new BadRequestException('Page size must be greater than 0.');
  }

  const hasPagination = page !== undefined && pageSize !== undefined;

  const pageNum = hasPagination ? Math.max(page || 1, 1) : 1;
  const sizeNum = hasPagination ? Math.max(pageSize || 10, 1) : undefined;

  return { hasPagination, page: pageNum, pageSize: sizeNum };
}

export const paginationResponse = (
  data: any[],
  total: number,
  page: number,
  pageSize?: number,
  hasPagination?: boolean,
) => {
  const totalPages = pageSize ? Math.ceil(total / pageSize) : 1;

  if (hasPagination && (page > totalPages) && totalPages > 0) {
    throw new BadRequestException(`Page number (${page}) exceeds the total pages (${totalPages}). Please enter a valid page.`);
  }

  let range: string | undefined;
  if (pageSize) {
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(start + pageSize - 1, total);
    range = `Showing records ${start} to ${end}`;
  }

  return {
    data,
    totalRecords: total,
    totalPages,
    currentPage: hasPagination ? page : undefined,
    range,
  };
}

export const paginateQuery = (query: any, page: number, pageSize?: number) => {
  const skip = pageSize ? (page - 1) * pageSize : 0;

  if (pageSize) {
    query.skip(skip).limit(pageSize);
  }

  return query;
}
