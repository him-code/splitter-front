import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

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
  public country : any ;
  public contact : any ;
  public email : any ;
  public password : any ;

  

  constructor(private appService : AppService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.countryNames = this.appService.countryNames ;
    this.countryCodes = this.appService.countryCodes ;    
  } 

  signupFunc(){
    if (!this.firstName) {
      this.toastr.warning('Enter First name','Missing Entry')
    } else if (!this.lastName) {
      this.toastr.warning('Enter Last name','Missing Entry')
    } else if (!this.country) {
      this.toastr.warning('Select Country','Missing Entry')
    }else if (!this.contact) {
      this.toastr.warning('Enter Contact Number','Missing Entry')
    }else if (!this.email) {
      this.toastr.warning('Enter Email ','Missing Entry')
    }else if (!this.password) {
      this.toastr.warning('Enter Password','Missing Entry')
    }else{console.log(this.contact)} 

  }
  

  changeFunc(value){
    let ind = this.countryNames.indexOf(value)
    this.phonePrefix = this.countryCodes[ind]
  }


  

}
