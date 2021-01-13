import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-initial',
  templateUrl: './forgot-initial.component.html',
  styleUrls: ['./forgot-initial.component.css']
})
export class ForgotInitialComponent implements OnInit {

  public email : any ;

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  startRecoveryFunc(){

    if (!this.email) {
      this.toastr.warning('Enter Email Address','Missing Entry')
    } else {
      this.toastr.success('Link Sent' , 'Check Recovery Mail')
    }

  }



}
