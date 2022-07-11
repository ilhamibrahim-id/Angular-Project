import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_b9ibo77', 'template_87n641e', e.target as HTMLFormElement, 'UFhIi3PiyKAtwItAD')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        window.location.href = '/sukses';
      }, (error) => {
        console.log(error.text);
      });
  }

}
