import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(
    private http : HttpClient
  ) { }

  private hostedUrl : string = "https://jon-arbell-de-ocampo-portfolio-backend.onrender.com/api/email-inquiry";
  private localUrl : string = "http://localhost:8080/api/email-inquiry";

  sendEmail(value : any) : any {
    return this.http.post<any>(this.hostedUrl,value);
  }

}
