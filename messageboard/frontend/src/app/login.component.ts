import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    template: `
    <mat-card>
        <input mat-input [(ngModel)]="loginData.email" placeholder="Email" type="email">
        <input mat-input [(ngModel)]="loginData.password" placeholder="Password" type="password">
    <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
    `
})
export class LoginComponent {
    constructor(private auth: AuthService) {}

    loginData = {
        email: '',
        password: ''
    };

    login() {
        this.auth.login(this.loginData);
    }
}
