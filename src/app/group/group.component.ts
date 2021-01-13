import { Component, OnInit } from '@angular/core';

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

 public toReceive = [
   {
    name:'rakesh',
    amount : 65
   },
   {
    name:'mukesh',
    amount : 67
   },
   {
    name:'ramesh',
    amount : 68
   },
   {
    name:'suresh',
    amount : 69
   }
 ] 

 public toGive = [
  {
    name:'rakesh',
    amount : 658
   },
   {
    name:'mukesh',
    amount : 679
   },
   {
    name:'ramesh',
    amount : 686
   },
   {
    name:'suresh bazigar',
    amount : 69
   }
 ]
 
 

 

  constructor() { }

  ngOnInit(): void {
  }

}
