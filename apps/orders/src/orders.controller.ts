import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/order-request.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello() {
    return this.ordersService.getOrders();
  }

  @Post()
  async createOrders(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
