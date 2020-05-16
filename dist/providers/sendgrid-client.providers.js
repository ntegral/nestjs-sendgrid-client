"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendGridClientProviders = void 0;
const common_1 = require("../common");
function createSendGridClientProviders(options) {
    return {
        provide: common_1.SENDGRIDCLIENT_TOKEN,
        useValue: common_1.createSendGridClient(options)
    };
}
exports.createSendGridClientProviders = createSendGridClientProviders;
