import { Transform } from 'class-transformer';

export const TransformMongoId = () => {
  return Transform(({ obj }) => obj._id?.toString());
};
