import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import { WebService } from './web.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { HttpModule} from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, 
    MatToolbarModule, FormsModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
