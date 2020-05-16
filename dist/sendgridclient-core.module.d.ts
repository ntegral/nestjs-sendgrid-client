import { DynamicModule } from '@nestjs/common';
import { SendGridClientModuleOptions, SendGridClientAsyncOptions } from './interfaces';
export declare class SendGridClientCoreModule {
    static forRoot(options: SendGridClientModuleOptions): DynamicModule;
    static forRootAsync(options: SendGridClientAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
