import { Component } from '@angular/core';

@Component({
    selector: 'bucket',
    templateUrl: 'bucket.component.html'
})

export class Bucket {
    message: string = '';

    onMessage(value: string) {
        this.message = 'The apple is ' + value;
    }
}