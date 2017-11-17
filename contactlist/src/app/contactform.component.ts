import { Component } from "@angular/core";

import { Contact } from "./contact.model";
import { ContactService } from "./contact.service";

@Component({
    selector: 'contactform',
    templateUrl: 'contactform.component.html'
})

export class ContactForm {
    contact:Contact;
    constructor(private _contactService: ContactService) {
        this.contact = new Contact(0,"","","","","","","");
     }

    addContact() {
        this._contactService.addContact(this.contact).subscribe(
            (data) => console.log("Success in addContact ", data),
            (error) => console.log("Error in addContact ", error),
            () => console.log("addContact completed")
        );
        this.contact = new Contact(0,"","","","","","","");
    }
}