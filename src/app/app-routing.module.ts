import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './sections/login/login.component';
import { MainComponent } from './sections/main/main.component';
import { LoginHelpComponent } from './sections/login-help/login-help.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'LoginHelp', component: LoginHelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
