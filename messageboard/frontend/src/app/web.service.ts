import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import { AuthService } from './auth.service';
@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:53394/api';

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService) {
    this.getMessages();
}

     getMessages(user) {
            user = (user) ? '/' + user : '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handleError('Unable to GET messages!');
            });
    }

     async postMessage(message) {
        try {
            var response = await  this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError('Unable to POST message!');
        }
    }

    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData , this.auth.tokenHeader).map(res => res.json());
    }

    private handleError(error) {
        console.log(error);
        this.sb.open(error , 'close', {duration: 2000});
    }
}
