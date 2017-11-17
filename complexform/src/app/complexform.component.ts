import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'complexform',
    templateUrl: 'complexform.component.html'
})

export class ComplexForm {
    complexForm: FormGroup;
    constructor(formBuilder: FormBuilder) {
        this.complexForm = formBuilder.group({
            "firstName": [null, Validators.required],
            "lastName": [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            "javaEE": false,
            "MEAN": false,
            "react": false
        })
    }

    submit(value: any) {
        console.log("form data: ", value)
    }
}