import {Directive, ElementRef, Renderer, HostListener, Input} from '@angular/core'

@Directive({
    selector: '[text-color]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class TextColorDirective{
    @Input('text-color') color;

    constructor(private el:ElementRef, private renderer:Renderer){

    }

    // @HostListener('focus') onfocus(){
    //     this.renderer.setElementStyle(
    //         this.el.nativeElement,
    //         'background',
    //         'yellow'
    //     );
    // }
    // @HostListener('blur') onblur(){
    //     this.renderer.setElementStyle(
    //         this.el.nativeElement,
    //         'background',
    //         'white'
    //     );
    //     console.log(this.el);
    // }

    onFocus(){
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background',
            this.color
        );        
    }
    onBlur(){
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background',
            'white'
        );
        console.log(this.el);
    }
}