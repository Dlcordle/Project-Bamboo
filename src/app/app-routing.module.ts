import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { SearchComponent } from './components/search/search.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  // define the path that corresponds with the component that should be rendered
  {path: '', component:MainComponent, pathMatch: "full"}, // upon initializing the app, it loads the main component
  {path: 'main', component: MainComponent },
  {path: 'register', component: SignUpComponent},
  {path: 'login', component: SignInComponent},
  {path: 'flashcard', component: FlashcardComponent},
  {path: 'search', component: SearchComponent},
  {path: 'view', component: ViewComponent},
  {path: 'create', component: CreateComponent},

  {path: '**', component: MainComponent} // a WildCard Route is used to handle unknown paths (ALWAYS goes last)
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
