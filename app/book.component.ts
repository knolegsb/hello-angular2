import {Component, OnInit} from '@angular/core';
//import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {BookService} from './book.service';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.component.css"],
    providers: [BookService]
})

export class BookComponent implements OnInit{
    books = [];
    //bookService: BookService;
    constructor(private bookService:BookService){
        //this.bookService = new BookService();
    }
    ngOnInit(){
        this.books = this.bookService.getBooks();
    }
}
