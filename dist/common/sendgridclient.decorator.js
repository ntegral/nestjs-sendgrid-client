"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectSendGridClient = void 0;
const common_1 = require("@nestjs/common");
const sendgridclient_constants_1 = require("./sendgridclient.constants");
function InjectSendGridClient() {
    return common_1.Inject(sendgridclient_constants_1.SENDGRIDCLIENT_TOKEN);
}
exports.InjectSendGridClient = InjectSendGridClient;
