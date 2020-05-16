"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendGridClient = void 0;
const sendgrid_client_1 = require("@ntegral/sendgrid-client");
function createSendGridClient(options) {
    const client = new sendgrid_client_1.SendGridClient(options);
    return client;
}
exports.createSendGridClient = createSendGridClient;
