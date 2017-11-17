import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable()

export class ContactService {
    constructor(private _http: Http) {

    }

    getContactList() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let args = new RequestOptions({ headers: headers });
        return this._http.get("/api/data", args).map((response) => response.json());
    }

    addContact(contact: Contact) {
        console.log("Contact: ", contact);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let args = new RequestOptions({ headers: headers });
        return this._http.post("/api/data", contact, args).map((response) => response.json());
    }

    removeContact(id: number) {
        return this._http.delete("/api/data/" + id).map((response) => response.json());
    }
}