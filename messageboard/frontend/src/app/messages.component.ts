import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'messages',
    template: `
    <div *ngFor="let message of webService.messages | async">
    <mat-card class="card">
    <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}</mat-card-title>
    <mat-card-content>{{message.text}}</mat-card-content>
    </mat-card>
    </div>
    `
})
export class MessagesComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) {}

ngOnInit() {
    var name = this.route.snapshot.params.Name;
    this.webService.getMessages(name);
    }
}
