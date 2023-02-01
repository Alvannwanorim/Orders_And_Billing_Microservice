import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/order-request.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  async createOrder(request: CreateOrderRequest) {
    const orders = await this.ordersRepository.create(request);
    return orders;
  }
  getOrders() {
    return this.ordersRepository.find({});
  }
}
