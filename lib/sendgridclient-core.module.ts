import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { SendGridClientModuleOptions, SendGridClientAsyncOptions, SendGridClientOptionsFactory } from './interfaces';
import { createSendGridClientProviders } from './providers';
import { SENDGRIDCLIENT_MODULE_OPTIONS, SENDGRIDCLIENT_TOKEN, createSendGridClient } from './common';

@Global()
@Module({})
export class SendGridClientCoreModule {
    public static forRoot(options: SendGridClientModuleOptions): DynamicModule {
        const provider = createSendGridClientProviders(options);

        return {
            exports: [provider,],
            module: SendGridClientCoreModule,
            providers: [provider]
        };
    }

    public static forRootAsync(options:SendGridClientAsyncOptions): DynamicModule {
        const provider: Provider = {
            inject: [SENDGRIDCLIENT_MODULE_OPTIONS],
            provide: SENDGRIDCLIENT_TOKEN,
            useFactory: (options: SendGridClientModuleOptions) => createSendGridClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: SendGridClientCoreModule,
            providers: [...this.createAsyncProviders(options), provider]
        };
    }

    private static createAsyncProviders(
        options: SendGridClientAsyncOptions,
      ): Provider[] {
        if (options.useExisting || options.useFactory) {
          return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<SendGridClientOptionsFactory>;
        return [
          this.createAsyncOptionsProvider(options),
          {
            provide: useClass,
            useClass,
          },
        ];
      }
    
      private static createAsyncOptionsProvider(
        options: SendGridClientAsyncOptions,
      ): Provider {
        if (options.useFactory) {
          return {
            inject: options.inject || [],
            provide: SENDGRIDCLIENT_MODULE_OPTIONS,
            useFactory: options.useFactory,
          };
        }
        const inject = [
          (options.useClass || options.useExisting) as Type<SendGridClientOptionsFactory>,
        ];
        return {
          provide: SENDGRIDCLIENT_MODULE_OPTIONS,
          useFactory: async (optionsFactory: SendGridClientOptionsFactory) =>
            await optionsFactory.createSendGridClientOptions(),
          inject,
        };
      }
}