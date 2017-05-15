"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_1 = require("./book");
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBooks = function () {
        // return  [
        //     {id:'001', name:'타이젠 모바일 프로그래밍', price:33000, date:'20150115', img:'img001.jpg'},
        //     {id:'002', name:'아파치 코르도바', price:22000, date:'20150131', img:'img002.jpg'},
        //     {id:'003', name:'웹앱 하이브리드 앱', price:32000, date:'20150320', img:'img003.jpg'},
        //     {id:'004', name:'OpenGL ES 2.0 안드로이드 게임프로그래밍', price:34000, date:'20150601', img:'img004.jpg'},
        //     {id:'005', name:'Ext JS6 프로그래밍', price:32000, date:'20151005', img:'img005.jpg'},
        // ]   
        this.books = [];
        this.books.push(new book_1.Book('001', '타이젠 모바일 프로그래밍', 33000, '20150115', 'img001.jpg'));
        this.books.push(new book_1.Book('002', '아파치 코르도바', 22000, '20150131', 'img002.jpg'));
        this.books.push(new book_1.Book('003', '웹앱 하이브리드 앱', 29000, '20150320', 'img003.jpg'));
        this.books.push(new book_1.Book('004', 'OpenGL ES 2.0 안드로이드 게임프로그래밍', 35000, '20150601', 'img004.jpg'));
        this.books.push(new book_1.Book('005', 'Ext JS6 프로그래밍', 32000, '20150115', 'img005.jpg'));
        return this.books;
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map