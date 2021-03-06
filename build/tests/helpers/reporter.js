"use strict";
// import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
// // @ts-ignore
// import SuiteInfo = jasmine.SuiteInfo;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// class CustomProcessor extends DisplayProcessor {
//     public displayJasmineStarted(info: SuiteInfo, log: string): string {
//         return `${log}`;
//     }
// }
// jasmine.getEnv().clearReporters();
// jasmine.getEnv().addReporter(new SpecReporter({
//     spec: {
//         displayStacktrace: StacktraceOption.NONE
//     },
//     customProcessors: [CustomProcessor],
// }) as unknown as CustomReporter);
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
var CustomProcessor = /** @class */ (function (_super) {
    __extends(CustomProcessor, _super);
    function CustomProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomProcessor.prototype.displayJasmineStarted = function (log) {
        return "" + log;
    };
    return CustomProcessor;
}(jasmine_spec_reporter_1.DisplayProcessor));
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    suite: {
        displayNumber: true
    },
    spec: {
        displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
}));
