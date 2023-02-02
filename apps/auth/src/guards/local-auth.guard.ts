import { AuthGuard } from '@nestjs/passport/dist';

export default class LocalAuthGuard extends AuthGuard('local') {}
