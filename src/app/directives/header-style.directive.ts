import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appHeaderStyle]'
})

export class HeaderStyleDirective implements OnInit {

    constructor(private el: ElementRef) {}

    @Input() namePage!: string

    ngOnInit() {
        switch (this.namePage) {
            case 'home':
                this.el.nativeElement.classList.add('header-home')
                break;

                default:
                this.el.nativeElement.classList.add('header-fixo')
                break;
        }
    }
}