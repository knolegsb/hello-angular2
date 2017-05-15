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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TextColorDirective = (function () {
    function TextColorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    TextColorDirective.prototype.onfocus = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'background', 'yellow');
    };
    TextColorDirective.prototype.onblur = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'background', 'white');
        console.log(this.el);
    };
    return TextColorDirective;
}());
__decorate([
    core_1.HostListener('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextColorDirective.prototype, "onfocus", null);
__decorate([
    core_1.HostListener('blur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextColorDirective.prototype, "onblur", null);
TextColorDirective = __decorate([
    core_1.Directive({
        selector: '[text-color]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], TextColorDirective);
exports.TextColorDirective = TextColorDirective;
//# sourceMappingURL=text-color.directive.js.map