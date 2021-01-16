import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router' ;
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  //public selectFrom = ['dhyanchand' , 'preeti' , 'shahrukh' , 'aamir' , 'salman' , 'afghanistan'] 
  public groupName ;
  public newArray = [] ;
  public email : String ;
  public toCreate = [] ;

  constructor(private appservice : AppService,
    private cookie : CookieService,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
  } 

  filter(){
    
    let query = this.email.toLowerCase().trim() ;

    //   let tempArray = this.selectFrom.filter(entry =>{
    //   if(entry.toLowerCase().includes(query)) return true ;
    //   else return false ;
    //   })
    //   this.newArray = this.removeDuplicates([...this.newArray , ...tempArray]) ;
    
    let xauth = JSON.parse(this.cookie.get('authToken')) ;

    this.appservice.getUsers(xauth, query).subscribe(apiResponse => {
      console.log(apiResponse) ;
      if(apiResponse.status === 200){
        let length = apiResponse.data.length ;
        this.newArray = apiResponse.data ;
        for(let i of this.newArray){
          console.log(i)
        }
        console.log(this.newArray)
      }else{
        console.log('failed' , apiResponse.message)
      }
    })
  
  
  } 

  removeDuplicates(arr : Array<any>) : Array<any>{
    let uniqueResults : Set<any> =  new Set<any>();
    arr.forEach(e => uniqueResults.add(e));
    return Array.from(uniqueResults)
  }

  addToCreateArray(element){
    console.log('shabash') ;
    let add = 1 ;
    this.toCreate.map(el =>{
      if(el._id === element._id) add = 0 ;
    })
    if (add === 1){
      this.toCreate.push(element) ;
    }
  } 

  removeFromToCreateArray(element){
    let temp = this.toCreate.filter(el=>{
      if(el._id === element._id){return false}
      else return true ;
    }) 

    this.toCreate = temp ;
  }

  createGroupFunc(){
    let xauth = JSON.parse(this.cookie.get('authToken')) ;

    if (this.groupName === undefined || this.groupName === null || this.groupName === ''){
      this.toastr.error('Enter group name', 'Group Name Misssing')
    } else if (!this.toCreate.length){
      this.toastr.error('Add members Please', 'No Members Added')
    } else {
      this.appservice.createGroup(this.groupName , this.toCreate , xauth).subscribe(apiResponse => {
        console.log(apiResponse) ;
        if(apiResponse.status === 200){
          console.log(apiResponse.message)
          console.log(apiResponse.data)
          this.toastr.success('Group Created' , 'Success')
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 2005);
        }else{
          console.log('group creation failed' , apiResponse.message)
        }
      })
    }
  }
}
