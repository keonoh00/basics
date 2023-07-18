# hi-nestjs

Studying NestJS.

<a name="table-of-contents">

## Table of Contents

</a>

- [Table of Contents](#table-of-contents)
- [Background Information](#background-information)
- [Requirements](#requirements)
- [Setup Project](#setup-project)
- [NestJS](#nestjs)
  - [Controllers](#controllers)
  - [Providers](#providers)
  - [Modules](#modules)
  - [Main](#main)
  - [Testing](#testing)
  - [CLI](#cli)
  - [Pipes](#pipes)
  - [Routing](#routing)
- [NestJS Fastify](#nestjs-fastify)
- [NestJS README](#nestjs-readme)

<a name="background-information">

## Background Information

</a>

NestJS is a framework of Node.js.
It allows to make a backend application in a scalable way.
NestJS works on top of Express.js.
But Express.js can be replaced with Fastify.

<a name="requirements">

## Requirements

</a>

- Node.js
- [Insomnia](https://insomnia.rest/download) (For testing endpoints)

<a name="setup-project">

## Setup Project

</a>

1. Create a new project with NestJS CLI. (`yarn` might have problem installing, so recommended to use `npm`)

   ```bash
   npm i -g @nestjs/cli
   nest new hi-nestjs
   ```

2. Run the project.

   ```bash
   cd hi-nestjs
   npm run start:dev
   ```

<a name="nestjs">

## NestJS

</a>

NestJS uses decorators to define the structure of the application.
Decorators are the functions on top of classes, and they are used to do something to the class.
For example, `@Controller()` decorator is used to define a controller class.
`@Get()` decorator is used to define a GET endpoint.

```ts
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
```

<a name="controllers">

### Controllers

</a>

Controllers are the classes that handle requests and responses.
They are decorated with `@Controller()` decorator.
The decorator takes a string as an argument, which is the path of the controller.
The path is the prefix of the endpoints in the controller.

```ts
@Controller('/cats')
export class CatsController {
  @Get()
  hello() {
    return 'Hello Cats!';
  }
  @Post()
  create() {
    return 'Create Cat!';
  }
}
```

<a name="providers">

### Providers

</a>

Providers are the classes that can be injected into other classes.
They are decorated with `@Injectable()` decorator.
The decorator is optional, but it is recommended to use it.
The decorator takes an object as an argument, which is the configuration of the provider.
The configuration can be used to define the scope of the provider.
The scope can be `SINGLETON` or `TRANSIENT`.

```ts
@Injectable()
export class CatsService {}
```

<a name="modules">

### Modules

</a>

Modules are the classes that organize controllers and providers.

- Controller: Takes `url` and execute the defined function.
-

They are part of the application. eg. `AuthModule`, `UserModule`, `PostModule`.
They are decorated with `@Module()` decorator.

```ts
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
```

<a name="main">

### `main.ts`

</a>

The main file of the application is `main.ts`.
It is the entry point of the application.
It is used to bootstrap the application.

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

<a name="testing">

### Testing

</a>

NestJS provides a testing module.
It is used to test the application.
It is recommended to use the testing module to test the application.

```ts
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

<a name="cli">

### CLI

</a>

NestJS provides a CLI.
It is used to generate files.
It is recommended to use the CLI to generate files.

```bash
nest generate module cats
nest generate controller cats
nest generate service cats
```

<a name="pipes">

### Pipes

</a>

Pipes are the classes that are used to transform data.
But also, they are used to validate data.
Following code is the example of using ValidationPipe.
This is the global pipe, which means it is applied to all endpoints.

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
```

<a name="routing">

### Routing

</a>

Routing is the process of defining endpoints.
It is done by using decorators.
The decorators are used to define the structure of the application.
For example, `@Controller()` decorator is used to define a controller class.
`@Get()` decorator is used to define a GET endpoint.
Also, `@Post()`, `@Put()`, `@Delete()`, `@Patch()` decorators are used to define POST, PUT, DELETE, PATCH endpoints.

```ts
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
```

<a name="nestjs-fastify">

## NestJS Fastify

</a>

NestJS works on top of Express.js.
But Express.js can be replaced with Fastify.
Fastify is a framework of Node.js.

You can check details [here](https://docs.nestjs.com/techniques/performance#fastify).

So it is important to not use Express.js specific features.
For example, `req` and `res` objects are Express.js specific features.
So it is recommended to use `@Req()` and `@Res()` decorators instead of using `req` and `res` objects.

```ts
@Get()
getHello(@Req() req, @Res() res): string {
  return 'Hello World!';
}
```

## NestJS README

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

### Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Installation

```bash
$ npm install
# All dependencies will be installed.
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

### Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

### License

Nest is [MIT licensed](LICENSE).
