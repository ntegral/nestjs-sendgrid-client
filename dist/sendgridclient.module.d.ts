import { DynamicModule } from '@nestjs/common';
import { SendGridClientModuleOptions, SendGridClientAsyncOptions } from './interfaces';
export declare class SendGridClientModule {
    static forRoot(options: SendGridClientModuleOptions): DynamicModule;
    static forRootAsync(options: SendGridClientAsyncOptions): DynamicModule;
}
