import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'book-image',
    templateUrl: './app/book-image.component.html'
})

export class BookImageComponent{
    @Input() title = "Title";
    @Input() path = "./assets/image/img001.jpg";
    @Input() width = "100";
    @Input() height = "150";
    @Output() selectBook = new EventEmitter<string>();
    //this.selectBook.emit(name);

    onClick(title){
        this.selectBook.emit(title);
    }
}