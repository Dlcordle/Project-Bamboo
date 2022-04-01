import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';

import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN,  REDIRECT_URI} from 'src/app/Storage.json';
import { Card } from 'src/app/models/card';

//import { GoogleDriveFunctions } from 'src/app/services/google_drive_functions';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    FlashcardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
