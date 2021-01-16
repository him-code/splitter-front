import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit { 

  public array1 = [
    {
      position:'right',
      value:40
      },
      {
        position:'left',
      value:50
      },
      {
        position:'left',
      value:99
      },
      {
        position:'left',
      value:78
      },
      {
        position:'right',
      value:69
      }
 ] 

 public toReceive = [] ; 
 public toGive = [] ;
  public groupData  ;
  public groupName : 'Group' ;

  constructor(private router : Router,
    private cookie : CookieService,
    private appservice : AppService) { }

  ngOnInit(): void {
    this.groupData = this.appservice.getCurrentGroup() ; 
    let id = this.groupData.groupId ;
    let authToken = JSON.parse(this.cookie.get('authToken')) ;
    this.appservice.getSingleGroupInfo(authToken , id).subscribe(apiResponse=>{
      if (apiResponse.status === 200){
        console.log('group data fetch success')
        console.log(apiResponse.data)
        this.groupName = apiResponse.data.group.name ;
        this.toReceive = apiResponse.data.toReceive ;
        this.toGive = apiResponse.data.toPay ;

      } else{
        console.log('error' , apiResponse.messsage)
      }
    })
  }



  ngOnDestroy() : void{
    this.appservice.resetCurrentGroup() ;
    console.log('current group object of service has been emptied') ;
  }

}
