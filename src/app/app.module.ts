import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './sections/login/login.component';
import { MainComponent } from './sections/main/main.component';
import { LoginHelpComponent } from './sections/login-help/login-help.component';

const appRoute: Routes = [
  {path: 'Login', component: LoginComponent },
  {path: 'main', component: MainComponent},
  {path: 'LoginHelp', component: LoginHelpComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LoginHelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
