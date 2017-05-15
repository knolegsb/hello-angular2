"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookComponent = (function () {
    function BookComponent() {
        //   name = "Anroid Game Programming"
        this.books = [
            { id: '001', name: 'Mobile Programming', price: 31500, date: '20150115', img: 'img001.jpg' },
            { id: '002', name: 'Apatche Cordova', price: 31500, date: '20150131', img: 'img002.jpg' },
            { id: '003', name: 'Web App Hybrid App', price: 31500, date: '20150320', img: 'img003.jpg' },
            { id: '004', name: 'OpenGL ES 2.0 Android Game Programming', price: 31500, date: '20150601', img: 'img004.jpg' },
            { id: '005', name: 'Ext JS6 Programming', price: 31500, date: '20151005', img: 'img005.jpg' },
        ];
        this.bookName = '';
    }
    //   ngOnInit(){
    //       var el = document.getElementsByClassName("font-orange")[0];
    //       console.log(el);
    //   }
    //   setName(name){
    //     this.name = name;
    //   }
    //   getName(){
    //     return this.name;
    //   }
    //name = "Android";
    BookComponent.prototype.onSubmit = function (newform) {
        console.log(newform);
        debugger;
    };
    BookComponent.prototype.onClick = function (name) {
        this.bookName = name;
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'my-book',
        templateUrl: './app/book.component.html',
        styleUrls: ["./assets/stylesheets/book.component.css"]
    })
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map