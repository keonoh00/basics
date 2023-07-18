# hi-nestjs

Studying NestJS.

<a name="table-of-contents">

## Table of Contents

</a>

- [Table of Contents](#table-of-contents)
- [Background Information](#background-information)
- [Requirements](#requirements)
- [Setup Project](#setup-project)
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
