import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = `${environment.apiUrl}/sendMail`;

  constructor(private http: HttpClient) { }

  sendEmail(recipient: string, msgBody: string, subject: string): Observable<any> {

    const emailDetails = {
        recipient,
        msgBody,
        subject,
    };

    console.log("Sending email: " + emailDetails.recipient + " " + emailDetails.msgBody + " " + emailDetails.subject);

    return this.http.post<any>(`${this.apiUrl}`, emailDetails);
  }
}
