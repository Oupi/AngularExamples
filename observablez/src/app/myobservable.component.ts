import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'myobservable',
    templateUrl: 'myobservable.component.html'
})

export class MyObservable {
    private data: Observable<number>;
    private values: Array<number> = [];
    private error: boolean;
    private finished: boolean;

    init() {
        this.values = [];
        this.error = false;
        this.finished = false;
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(100);
            }, 1000)
            setTimeout(() => {
                observer.next(200);
            }, 2000)
            setTimeout(() => {
                let temp = Math.random();
                console.log("Random temp: ", temp);
                if(temp < 0.5){
                    observer.error("Meni piäleen");
                } else {
                    observer.next(300);
                }
            }, 3000)
            setTimeout(() => {
                observer.next(400);
            }, 4000)
            setTimeout(() => {
                observer.complete();
            }, 5000)
        });
        let subscription = this.data.subscribe(
            (value) => this.values.push(value),
            (error) => {
                this.error = true;
                console.log("Error: ", error);
            },
            () => this.finished = true
        );
    }
}