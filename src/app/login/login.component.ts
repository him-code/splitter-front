import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email : any ;
  public password : any ; 

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  } 

  loginFunc(){

    if (!this.email) {
      this.toastr.warning('Enter Email Address','Missing Entry')
    } else if (!this.password) {
      this.toastr.warning('Enter Password','Missing Entry')
    } else { // real logic begins here 
      this.toastr.success('atleast you logged in' , 'Success')
    }

  }



}
