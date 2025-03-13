import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactMeService } from '../../service/contact-me/contact-me.service';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact-me.component.html'
})
export class ContactMeComponent {

  constructor(
    private contactMe : ContactMeService
  ) {}

  contactMeForm : FormGroup = new FormGroup ({
    fullName : new FormControl("",[Validators.required,Validators.minLength(5)]),
    email : new FormControl("",[Validators.required,Validators.email]),
    message : new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(500)])
  });

  hasError = signal((this.contactMeForm.controls['fullName'].touched && !!this.contactMeForm.controls['fullName'].errors) ||
  (this.contactMeForm.controls['email'].touched && !!this.contactMeForm.controls['email'].errors) ||
  (this.contactMeForm.controls['message'].touched && !!this.contactMeForm.controls['message'].errors));

  isSubmit = signal(false);

  finalMessage = signal({typeOfMessage : '', message : ''});

  onSubmit() : void {

    if(this.contactMeForm.valid){
      const contactMeValue = this.contactMeForm.value;

      this.contactMe.sendEmail(contactMeValue)
      .subscribe({
        next : (result : any) =>{
          this.isSubmit.set(true);
          this.finalMessage.set({typeOfMessage : 'success', message : 'Your message is on its way! Thank you for reaching out.'});

          setTimeout(()=>{

            this.isSubmit.set(false);
            this.finalMessage.set({typeOfMessage : '', message : ''});
            
          },5000);
          console.log(result);
        },
        error : (err :any)=>{

          this.isSubmit.set(true);

          const message = 'Oops! Something went wrong while sending your message. Please check your internet connection or try again later.';

          if(err.key !== 'exception')
            this.finalMessage.set({typeOfMessage : 'error', message : `${err.json().error}`});
          else 
            this.finalMessage.set({typeOfMessage : 'error', message : `${message}`});

          setTimeout(()=>{

            this.isSubmit.set(false);
            this.finalMessage.set({typeOfMessage : '', message : ''});
            
          },5000);

          console.error(err);
        },
        complete : ()=>{
          console.log('Request completed');
        }
      });

      this.contactMeForm.reset();
    }
  }
}
