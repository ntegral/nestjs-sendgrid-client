import { DynamicModule, Module } from '@nestjs/common';
import { SendGridClientModuleOptions, SendGridClientAsyncOptions } from './interfaces';
import { SendGridClientCoreModule } from './sendgridclient-core.module';

@Module({})
export class SendGridClientModule {
    public static forRoot(options: SendGridClientModuleOptions): DynamicModule {
        return {
            module: SendGridClientModule,
            imports: [ SendGridClientCoreModule.forRoot(options as SendGridClientModuleOptions)]
        };
    }

    public static forRootAsync(options: SendGridClientAsyncOptions): DynamicModule {
        return {
            module: SendGridClientModule,
            imports: [SendGridClientCoreModule.forRootAsync(options)]
        };
    }
}