import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.component.css"]
})

export class BookComponent {
    bookForm: FormGroup = new FormGroup({
        id: new FormControl('004', Validators.required),
        name: new FormControl('Android Game Programming', Validators.required),
        price: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required)
    })

    constructor(private _formBuilder:FormBuilder){
        /*
        this.bookForm= _formBuilder.group({
            id: new FormControl('111', Validators.required)
           // name: new FormControl('', Validators.required),
            //price:new FormControl('', Validators.required),
            //date:new FormControl('', Validators.required)        
        });
        */
    }

    ngOnInit(){
        
    }

    onSubmit(newform){
        console.log(newform);
        console.log(this.bookForm);
        debugger;
    }
}

