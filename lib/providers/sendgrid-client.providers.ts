import { SendGridClientModuleOptions } from "../interfaces";
import { SENDGRIDCLIENT_TOKEN, createSendGridClient } from "../common";


export function createSendGridClientProviders(options: SendGridClientModuleOptions) {
    return {
        provide: SENDGRIDCLIENT_TOKEN,
        useValue: createSendGridClient(options)
    }
}