import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Orders extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;
}

export const OrderSchema = SchemaFactory.createForClass(Orders);
