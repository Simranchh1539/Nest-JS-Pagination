import { NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const checkNotFoundError = (data: any, entity: string, id: string) => {
  if (!data) {
    throw new NotFoundException(`${entity} with id ${id} is not found`);
  }
};

export const transformResponse = (dtoClass: any, data: any) => {
  const options = { excludeExtraneousValues: true };
  return plainToInstance(dtoClass, data, options);
};
