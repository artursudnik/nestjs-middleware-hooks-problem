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

## Expected behavior

When an application receives a signal and closes, I'd expect all three hooks to be executed. Actually only `onModuleDestroy` and `onApplicationShutdown` are executed.

All three hooks are executed if for example defined for a module, not middleware.