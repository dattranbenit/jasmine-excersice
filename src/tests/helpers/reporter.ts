// import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
// // @ts-ignore
// import SuiteInfo = jasmine.SuiteInfo;

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




import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(log: string): string {
      return `${log}`;
    }
}
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
new SpecReporter({
    suite: {
    displayNumber: true
    },
    spec: {
    displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
}) as jasmine.CustomReporter
);




