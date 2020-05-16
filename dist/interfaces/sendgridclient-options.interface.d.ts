import { SendGridClientOptions } from '@ntegral/sendgrid-client';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface SendGridClientModuleOptions extends SendGridClientOptions {
}
export interface SendGridClientOptionsFactory {
    createSendGridClientOptions(): Promise<SendGridClientOptions> | SendGridClientOptions;
}
export interface SendGridClientAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<SendGridClientOptionsFactory>;
    useExisting?: Type<SendGridClientOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<SendGridClientOptions> | SendGridClientOptions;
}
