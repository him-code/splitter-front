import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-final',
  templateUrl: './forgot-final.component.html',
  styleUrls: ['./forgot-final.component.css']
})
export class ForgotFinalComponent implements OnInit {

  public password : any ;
  public passwordConfirm : any ;

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  resetFunc(){
    if (!this.password) {
      this.toastr.warning('Enter Password','Missing Entry')
    } else if(!this.passwordConfirm) {
      this.toastr.warning('Confirm Password' , 'Missing Entry')
    } else {
      this.toastr.success('india won')
    }
  }
}
