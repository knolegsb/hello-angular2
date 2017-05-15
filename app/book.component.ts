import {Component} from '@angular/core';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.component.css"]
})

export class BookComponent {
//   name = "Anroid Game Programming"

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
    onSubmit(newform){
        console.log(newform);
        debugger;
    }

    books = [
        {id:'001', name:'Mobile Programming', price:31500, date:'20150115', img:'img001.jpg'},
        {id:'002', name:'Apatche Cordova', price:31500, date:'20150131', img:'img002.jpg'},
        {id:'003', name:'Web App Hybrid App', price:31500, date:'20150320', img:'img003.jpg'},
        {id:'004', name:'OpenGL ES 2.0 Android Game Programming', price:31500, date:'20150601', img:'img004.jpg'},
        {id:'005', name:'Ext JS6 Programming', price:31500, date:'20151005', img:'img005.jpg'},
    ]
    bookName = '';
    onClick(name){
        this.bookName = name;
    }
}