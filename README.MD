[![npm version](http://img.shields.io/npm/v/@ntegral/nestjs-sendgrid-client.svg?style=flat)](https://npmjs.org/package/@ntegral/nestjs-sendgrid-client "View this project on npm")
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-sendgrid-client/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-sendgrid-client)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

<p align="center">
  <h3 align="center">
    @ntegral/nestjs-sendgrid-client
  </h3>

  <p align="center">
    Provides an injectable SendGrid Client for the SendGrid v3 Web API
  </p>

</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-sendgrid-client` implements a module, `SendGridClientModule`, which when imported into
your nestjs project provides a SendGrid client to any class that injects it. This
lets SendGrid be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-sendgrid-client @sendgrid/client
```

## Getting Started

The simplest way to use `@ntegral/nestjs-sendgrid-client` is to use `SendGridClientModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { SendGridClientModule } from '@ntegral/nestjs-sendgrid-client';

@Module({
  imports: [
    SendGridClientModule.forRoot({
      apiKey: 'my_secret_key',
    }),
  ],
})
export class AppModule {}
```

The async way `@ntegral/nestjs-sendgrid-client` is to use `SendGridClientModule.forRootAsync`

```typescript
import { Module } from '@nestjs-common';
import { SendGridClientModule } from '@ntegral/nestjs-sendgrid-client';
import { ConfigModule, ConfigureService } from '@nestjs/config';

@Module({
  imports: [
    SendGridClientModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg:ConfigService) => ({
        apiKey: cfg.get('SENDGRID_API_KEY'),
      }),
      inject: [ConfigService],
    })
  ]
})

export class AppModule {}
```

You can then inject the Stripe client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid-client';

@Injectable()
export class AppService {
  public constructor(@InjectSendGrid() private readonly client: SendGridService) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { SendGridModule } from '@ntegral/nestjs-sendgrid';

@Module({
  imports: [
    StripeModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        apiKey: cfg.get('sendgrid_api_key'),
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [@sendgrid/mail](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail)

Copyright &copy; 2019 Ntegral Inc.
