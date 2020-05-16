"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridClientModule = void 0;
const common_1 = require("@nestjs/common");
const sendgridclient_core_module_1 = require("./sendgridclient-core.module");
let SendGridClientModule = (() => {
    var SendGridClientModule_1;
    let SendGridClientModule = SendGridClientModule_1 = class SendGridClientModule {
        static forRoot(options) {
            return {
                module: SendGridClientModule_1,
                imports: [sendgridclient_core_module_1.SendGridClientCoreModule.forRoot(options)]
            };
        }
        static forRootAsync(options) {
            return {
                module: SendGridClientModule_1,
                imports: [sendgridclient_core_module_1.SendGridClientCoreModule.forRootAsync(options)]
            };
        }
    };
    SendGridClientModule = SendGridClientModule_1 = __decorate([
        common_1.Module({})
    ], SendGridClientModule);
    return SendGridClientModule;
})();
exports.SendGridClientModule = SendGridClientModule;
