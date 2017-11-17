import { Component, OnInit } from '@angular/core';

import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
    selector: 'contactlist',
    templateUrl: 'contactlist.component.html'
})

export class ContactList implements OnInit {
    contactList: Contact[];
    constructor(private _contactService: ContactService) {

    }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this._contactService.getContactList().subscribe(
            (contactList) => this.contactList = contactList,
            (error) => console.log("Error in getContacts() ", error),
            () => console.log("getContacts completed")
        );
    }

    removeContact(id: number) {
        this._contactService.removeContact(id).subscribe(
            (data) => {
                console.log("Success in removeContact ", data);
                this.getContacts();
            },
            (error) => console.log("Error in removeContact() ", error),
            () => console.log("removeContact() completed")
        );
    }
}