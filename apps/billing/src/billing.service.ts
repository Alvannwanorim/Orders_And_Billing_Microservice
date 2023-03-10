import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  handleOrdersCreated(data: any) {
    this.logger.log('billing', data);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
