import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.component.css"]
})

export class BookComponent {
    // bookForm: FormGroup = new FormGroup({
    //     id: new FormControl('004', Validators.required),
    //     name: new FormControl('Android Game Programming', Validators.required),
    //     price: new FormControl('', Validators.required),
    //     date: new FormControl('', Validators.required)
    // })

    bookForm:FormGroup;
    constructor(private _formBuilder:FormBuilder){
        
        this.bookForm= _formBuilder.group({
            // id: new FormControl('004', Validators.required),
            // name: new FormControl('Android Game Programming', Validators.required),
            // price:new FormControl('', Validators.required),
            // date:new FormControl('', Validators.required)        
            price: new FormControl('', Validators.compose([validNumber]))
        });
        
    }

    ngOnInit(){

    }

    onSubmit(newform){
        console.log(newform);
        console.log(this.bookForm);
        debugger;
    }
}

function validNumber(c: FormControl){
    if (c.value == ''){
        return {
                valid: false,
                errorMsg: 'required'
        };
    }
    if (c.value == ''){
        return {
            valid:false,
            errorMsg: 'required'
        }
    }
    let NUMBER_REGEXP = /^[0-9]/;
    return NUMBER_REGEXP.test(c.value)?{
        valid: true,
        errorMsg:''
    } : {
        valid: false,
        errorMsg: 'Must enter numbers'
    };
}
