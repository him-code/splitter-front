import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import {Router} from '@angular/router' ;
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : any ;
  public password : any ; 

  constructor(private appService : AppService,
    private toastr : ToastrService,
    private router : Router,
    private cookie : CookieService) { }

  ngOnInit(): void {
  } 

  loginFunc(){

    if (!this.email) {
      this.toastr.warning('Enter Email Address','Missing Entry')
    } else if (!this.password) {
      this.toastr.warning('Enter Password','Missing Entry')
    } else { // real logic begins here 

      let data = {
        email : this.email,
        password : this.password
      } 

      this.appService.logInFunction(data)
      .subscribe((apiResponse) => {

        console.log(apiResponse);

        if (apiResponse.status === 200) {
          this.toastr.success('Log In Successful' , 'Success') ;
          this.cookie.set('authToken' , JSON.stringify(apiResponse.data.xauth)) 
          console.log('this data is saved to cookie ' , apiResponse.data.xauth)
          setTimeout(()=>{
            this.router.navigate(['home']);
          } , 2005)
        } else {
          this.toastr.error(apiResponse.message)
        }
      })
    }

  }



}
