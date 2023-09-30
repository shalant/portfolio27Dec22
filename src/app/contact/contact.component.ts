import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import emailjs from '@emailjs/browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],

})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('LPBekRQvHNWcIRZ6L');
  
    let response = await emailjs.send("service_3i7iscj","template_dunufc5", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
      });
      
      alert("Message has been sent.");
      this.form.reset();
  }

}

