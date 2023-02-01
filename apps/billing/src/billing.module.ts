import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [RmqModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
