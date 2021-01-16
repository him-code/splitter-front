import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import {Router} from '@angular/router' ;
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit { 

  public countryNames : any ;
  public countryCodes : any ; 
  public phonePrefix : any ;
  public firstName : any ;
  public lastName : any ;
  public nickName : any ;
  public country : any ;
  public contact : any ;
  public email : any ;
  public password : any ;

  

  constructor(private appService : AppService,
    private toastr : ToastrService,
    private router : Router,
    private cookie : CookieService) { }

  ngOnInit(): void {
    this.countryNames = this.appService.countryNames ;
    this.countryCodes = this.appService.countryCodes ;    
  } 

  goToHome(){
    this.router.navigate(['home']);
  }

  signupFunc(){
    if (!this.firstName) {
      this.toastr.warning('Enter First name','Missing Entry')
    } else if (!this.lastName) {
      this.toastr.warning('Enter Last name','Missing Entry')
    }else if (!this.nickName) {
      this.toastr.warning('Enter Nick name','Missing Entry')
    } else if (!this.country) {
      this.toastr.warning('Select Country','Missing Entry')
    }else if (!this.contact) {
      this.toastr.warning('Enter Contact Number','Missing Entry')
    }else if (!this.email) {
      this.toastr.warning('Enter Email ','Missing Entry')
    }else if (!this.password) {
      this.toastr.warning('Enter Password','Missing Entry')
    }else{
      let data = {
        firstName : this.firstName,
        lastName : this.lastName,
        nickName : this.nickName,
        mobileNumber : this.phonePrefix + this.contact ,
        email : this.email,
        password : this.password
      }

      this.appService.signupFunction(data)
      .subscribe((apiResponse) => {

        console.log('this is api response',apiResponse)

        if (apiResponse.status === 200) {
          this.toastr.success('Sign Up Successful' , 'Welcome') ;
          this.cookie.set('authToken',JSON.stringify(apiResponse.data.xauth)) ;
          setTimeout(() => {
            this.goToHome()
          }, 2005);
        } else {
          this.toastr.error(apiResponse.message) ;
        }
      })
    } 

  }
  
  //dont remove it , this is an important function about phone number 
  changeFunc(value){
    let ind = this.countryNames.indexOf(value)
    this.phonePrefix = this.countryCodes[ind]
  }


  

}
