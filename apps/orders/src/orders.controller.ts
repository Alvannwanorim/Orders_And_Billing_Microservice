import { JwtAuthGuard } from '@app/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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
  @UseGuards(JwtAuthGuard)
  async createOrders(@Body() request: CreateOrderRequest, @Req() req: any) {
    console.log(req.user);
    return this.ordersService.createOrder(request);
  }
}
