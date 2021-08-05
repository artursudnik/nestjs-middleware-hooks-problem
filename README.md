## Bug Report

## Current behavior
I have defined a middleware

```
@Injectable()
export class MyMiddleware implements NestMiddleware {
```

with the following hooks defined:

```
  async onModuleDestroy() {
    console.log('middleware onModuleDestroy');
  }

  async beforeApplicationShutdown(signal) {
    console.log(`middleware beforeApplicationShutdown (${signal})`);
  }

  onApplicationShutdown(signal) {
    console.log(`middleware onApplicationShutdown (${signal})`);
  }
```

Application log during shutdown:
```
[Nest] 26102  - 08/05/2021, 1:28:14 PM     LOG [NestFactory] Starting Nest application...
[Nest] 26102  - 08/05/2021, 1:28:14 PM     LOG [InstanceLoader] AppModule dependencies initialized +24ms
[Nest] 26102  - 08/05/2021, 1:28:14 PM     LOG [RoutesResolver] AppController {/}: +8ms
[Nest] 26102  - 08/05/2021, 1:28:14 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 26102  - 08/05/2021, 1:28:14 PM     LOG [NestApplication] Nest application successfully started +1ms
^Cmiddleware onModuleDestroy
module onModuleDestroy
module beforeApplicationShutdown
middleware onApplicationShutdown (SIGINT)
module onApplicationShutdown
```

## Expected behavior

When an application receives a signal and closes, I'd expect all three hooks to be executed. Actually only `onModuleDestroy` and `onApplicationShutdown` are executed.

All three hooks are executed if for example defined for a module, not middleware.
