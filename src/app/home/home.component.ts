import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private xauth : any ;
  public nickName : any ;
  public myGroups = [] ;

  constructor(private cookie : CookieService,
    private router : Router,
    private appservice : AppService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.xauth = JSON.parse(this.cookie.get('authToken')) ;
    this.appservice.getGroups(this.xauth)
    .subscribe((apiResponse) => {
      if(apiResponse.status === 200){
        console.log('success get groups api , here is the data ' , apiResponse.data)
        this.nickName = apiResponse.data.user.nickName ; 
        let temp = apiResponse.data.groups.map(x => x) ;
        this.myGroups = temp ;
        console.log('',this.myGroups)
      }else{
        console.log('abort get groups api' , apiResponse.message)
      }
    })
  }

  redirectFunc(group){
    this.appservice.setCurrentGroup(group) ;
    this.router.navigate(['group'])
  }

  logOutFunc(){
    this.toastr.success('Logging Out' , 'Log out has been initiated')
    this.cookie.deleteAll('/')
    setTimeout(() => {
      this.router.navigate(['login'])  
    },2005);
    
  }
}

