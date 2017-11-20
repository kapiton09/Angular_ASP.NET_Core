import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import { WebService } from './web.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { HttpModule} from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

var routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:Name',
  component: MessagesComponent
}
];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, 
    MatToolbarModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
