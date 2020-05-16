import { SendGridClientModuleOptions } from "../interfaces";
export declare function createSendGridClientProviders(options: SendGridClientModuleOptions): {
    provide: string;
    useValue: import("@ntegral/sendgrid-client").SendGridClient;
};
