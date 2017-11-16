import { Component } from '@angular/core'

@Component({
    selector: 'binder',
    templateUrl: 'binder.component.html'
})

export class Binder {
    welcomeText: string = 'Hello Angular!';
    clickMessage: string = '';
    eventMessage: string = '';
    MyName: string = '';

    youClicked() {
        this.clickMessage = 'You called?';
        this.MyName = "Zashka";
    }

    onClickMe(value:string) {
        this.eventMessage = 'Hello, ' + value;
     }
}