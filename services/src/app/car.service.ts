import { Car } from './car.model';
import { Injectable } from '@angular/core';

@Injectable()

export class CarService {
    carlist: Car[] = [];

    getCarlist() {
        return this.carlist;
    }

    addCar(car: Car) {
        this.carlist.push(car);
    }

    removeCar(index: number) {
        this.carlist.splice(index, 1);
    }
}