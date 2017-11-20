import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav',
    template: `
    <mat-toolbar color="primary">
    <button mat-button routerLink="/">Message Board</button>
        <button mat-button routerLink="/messages">Messages</button>
    </mat-toolbar>
    `
})
export class NavComponent {
    constructor() {}
}
