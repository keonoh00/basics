# hi-nestjs

NestJS Study - From making Contorller, Provider, Module, to Unit and E2E Testing.

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
- [Testing](#testing)
  - [NestJS Unit Testing](#nestjs-unit-testing)
  - [NestJS E2E Testing](#nestjs-e2e-testing)
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

<a name="testing">

## Testing

</a>

NestJS provides a testing module.
Unit testing is a process of testing a unit of the application.

### Jest Basic Guide and Grammar

#### `describe()`

`describe()` is used to group tests.
It takes two arguments.
First argument is the name of the group.
Second argument is the function that contains tests.

```ts
describe('AppController', () => {
  // ...
});
```

#### `it()`

`it()` is used to define a test.
It takes two arguments.
First argument is the name of the test.
Second argument is the function that contains the test.

```ts
describe('AppController', () => {
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // ...
    });
  });
});
```

#### `expect()`

`expect()` is used to check the result of the test.
It takes one argument.
The argument is the value that is expected to be returned.

```ts
describe('AppController', () => {
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

#### `beforeEach()`

`beforeEach()` is used to run a function before each test.
It takes one argument.
The argument is the function that is run before each test.

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

#### `beforeAll()`

`beforeAll()` is used to run a function before all tests.
It takes one argument.
The argument is the function that is run before all tests.

```ts
describe('AppController', () => {
  let appController: AppController;

  beforeAll(async () => {
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

#### `afterEach()`

`afterEach()` is used to run a function after each test.
It takes one argument.
The argument is the function that is run after each test.

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

  afterEach(async () => {
    // ...
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

#### `afterAll()`

`afterAll()` is used to run a function after all tests.
It takes one argument.
The argument is the function that is run after all tests.

```ts
describe('AppController', () => {
  let appController: AppController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(async () => {
    // ...
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

#### `toBe()`

`toBe()` is used to check if the value is equal to the expected value.
It takes one argument.
The argument is the expected value.

```ts
describe('root', () => {
  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });
});
```

#### `toEqual()`

`toEqual()` is used to check if the value is equal to the expected value.
It takes one argument.
The argument is the expected value.

```ts
describe('root', () => {
  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toEqual('Hello World!');
  });
});
```

#### `toContain()`

`toContain()` is used to check if the value contains the expected value.
It takes one argument.
The argument is the expected value.

```ts
describe('root', () => {
  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toContain('Hello');
  });
});
```

#### `toDo()`

`toDo()` is used to record some of the testings to do in the future.
It takes one argument.

<a name="nestjs-unit-testing">

### NestJS Unit Testing

</a>

#### Checking Test Coverage with Jest

```bash
npm run test:cov
```

This basically looks for `spec.ts` extension files and checks the coverage of the tests of the application.

#### Test Watch

```bash
npm run test:watch
```

This allows to continuously interact with the tests.

<a name="nestjs-e2e-testing">

### NestJS E2E Testing

</a>

E2E Testing stands for End to End Testing.
This test is used to test the application as a whole.
Starting from the request, to the response, it tests the whole process.
One of the advanges of E2E testing is that it sends a real request to the application.
In other words, it tests `controller`, `service`, `module`, and `pipe` together.

However, the settings of the real environment should match the settings of the test environment.
eg. the `pipe` setting of the real environment automatically converts the data type when `transform` is set to `true`.
But in the test environment, this setting is not synchronized.

#### Runnig E2E Test

```bash
npm run test:e2e
```

#### E2E Testing with Supertest

E2E testing file is located in `test/app.e2e-spec.ts`.

- `request`: `supertest` is used to send a request to the application.
- `app.getHttpServer()`: `app.getHttpServer()` is used to get the instance of the application.
  - `app.getHttpServer().get(url)` is used to send a GET request to the application.
  - `app.getHttpServer().post(url)` is used to send a POST request to the application.
  - `app.getHttpServer().delete(url)` is used to send a DELETE request to the application.
  - `app.getHttpServer().patch(url)` is used to send a PATCH request to the application.

In E2E testing, in some cases, we test the returning response code.
For example, if the request is successful, it should return `200` response code.
If the request is not successful, it should return `400` response code.
In this case, we can use `expect(200)` to check the response code.

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

<a name="nestjs-readme">

## NestJS README

</a>

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
