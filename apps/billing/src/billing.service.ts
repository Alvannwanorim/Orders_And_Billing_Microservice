import { Injectable, Logger } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  handleOrdersCreated(data: any, context: RmqContext) {
    this.logger.log('billing', data);
    this.logger.log(context);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
