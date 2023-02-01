// eslint-disable-next-line prettier/prettier
import { IsString, IsNotEmpty, IsPositive, IsPhoneNumber } from "class-validator";

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsPhoneNumber('NG')
  phoneNumber: string;
}
