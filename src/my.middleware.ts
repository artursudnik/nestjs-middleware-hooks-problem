import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): any {
    next();
  }

  async onModuleDestroy() {
    console.log('middleware onModuleDestroy');
  }

  async beforeApplicationShutdown(signal) {
    console.log(`middleware beforeApplicationShutdown (${signal})`);
  }

  onApplicationShutdown(signal) {
    console.log(`middleware onApplicationShutdown (${signal})`);
  }
}
