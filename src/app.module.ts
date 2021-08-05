import {
  BeforeApplicationShutdown,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationShutdown,
  OnModuleDestroy,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyMiddleware } from './my.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements
    NestModule,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MyMiddleware).forRoutes('*');
  }

  onModuleDestroy(): any {
    console.log('module onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string): any {
    console.log('module beforeApplicationShutdown');
  }

  onApplicationShutdown(signal?: string): any {
    console.log('module onApplicationShutdown');
  }
}
