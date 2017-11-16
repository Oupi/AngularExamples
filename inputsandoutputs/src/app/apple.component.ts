import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'apple',
    templateUrl: 'apple.component.html'
})

export class Apple {
    @Input() color: string;
    @Output() emitter = new EventEmitter();

    onClick(){
        this.emitter.emit(this.color);
    }
}