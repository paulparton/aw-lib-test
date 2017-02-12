"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var sample_component_1 = require('./src/sample.component');
var sample_directive_1 = require('./src/sample.directive');
var sample_pipe_1 = require('./src/sample.pipe');
var sample_service_1 = require('./src/sample.service');
__export(require('./src/sample.component'));
__export(require('./src/sample.directive'));
__export(require('./src/sample.pipe'));
__export(require('./src/sample.service'));
var SampleModule = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [sample_service_1.SampleService]
        };
    };
    SampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ],
            exports: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleModule);
    return SampleModule;
}());
exports.SampleModule = SampleModule;
//# sourceMappingURL=index.js.map