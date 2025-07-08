import { Transform } from 'class-transformer';
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export const TransformMongoId = () => {
  return Transform(({ obj }) => obj._id?.toString());
};

export const IsUniqueArray = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'UniqueArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(arr: any[], _args: ValidationArguments) {
          if (!Array.isArray(arr)) return false;
          const uniqueValues: any[] = [];
          return arr.every((item) => {
            if (uniqueValues.includes(item)) return false;
            uniqueValues.push(item);
            return true;
          });
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must not contain duplicate values`;
        },
      },
    });
  };
}
