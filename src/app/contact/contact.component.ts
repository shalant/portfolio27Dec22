import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import emailjs from '@emailjs/browser';

@Component({
  standalone: true,

  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: ''
  })

  constructor(private fb: FormBuilder) {}

  send() {
    emailjs.send("service_3i7iscj","template_dunufc5",{
      from_name: "bob",
      to_name: "test",
      from_email: "doug.rosenberg@gmail.com",
      subject: "blah",
      message: "test",
      });
      
  }

}

