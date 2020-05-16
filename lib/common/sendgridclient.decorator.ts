import { Inject } from '@nestjs/common';
import { SENDGRIDCLIENT_TOKEN } from './sendgridclient.constants';

export function InjectSendGridClient() {
  return Inject(SENDGRIDCLIENT_TOKEN);
}
