import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Orders } from './schemas/orders.schema';

@Injectable()
export class OrdersRepository extends AbstractRepository<Orders> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Orders.name) ordersModel: Model<Orders>,
    @InjectConnection() connection: Connection,
  ) {
    super(ordersModel, connection);
  }
}
