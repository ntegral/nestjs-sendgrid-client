import { SendGridClientModuleOptions } from '../interfaces';
import { SendGridClient } from '@ntegral/sendgrid-client';

export function createSendGridClient(options: SendGridClientModuleOptions): SendGridClient {
  const client = new SendGridClient(options);
  return client;
}
