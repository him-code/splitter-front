import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ExpenseComponent } from './expense/expense.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { ForgotInitialComponent } from './forgot-initial/forgot-initial.component';
import { ForgotFinalComponent } from './forgot-final/forgot-final.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    GroupComponent,
    ExpenseComponent,
    ForgotInitialComponent,
    ForgotFinalComponent,
    CreateGroupComponent,
    CreateExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'login' , component: LoginComponent , pathMatch: 'full'},
      {path : 'signup' , component : SignupComponent , pathMatch : 'full'},
      {path : 'home' , component : HomeComponent , pathMatch : 'full'},
      {path : 'group' , component : GroupComponent , pathMatch : 'full'},
      {path : 'expense' , component : ExpenseComponent , pathMatch : 'full'},
      {path : 'forgotInitial' , component : ForgotInitialComponent , pathMatch : 'full'},
      {path : 'forgotFinal' , component : ForgotFinalComponent , pathMatch : 'full'},
      {path : 'createGroup' , component : CreateGroupComponent , pathMatch : 'full'},
      {path: '' , redirectTo: 'login' , pathMatch: 'full'},
      {path: '*' , component : LoginComponent},
      {path: '**' , component : LoginComponent}
    ]),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut : 2000,
      positionClass: 'toast-bottom-full-width'
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
