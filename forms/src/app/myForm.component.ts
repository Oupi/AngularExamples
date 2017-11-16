import { Component } from '@angular/core';

import { Apple } from './apple.model';
import { log } from 'util';

@Component({
    selector: 'my-form',
    templateUrl: 'myForm.component.html'
})

export class MyForm {
    apples = [];
    apple: Apple = new Apple("");

    addApple(){
        this.apples.push(this.apple);
        console.log("Apple color: " + this.apple.color)
        this.apple = new Apple("");
    }

    removeApple(index){
        this.apples.splice(index, 1);
    }
}