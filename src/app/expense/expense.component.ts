import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit { 


  public expenseMembers = ['rohit' , 'sohan' , 'raj' , 'veer' , 'mallika' , 'deepika' , 'katrina' , 'pakistan' , 'hindustan' , 'afghanistan'] 
  public expenseHistory = ['one' , 'two' , 'three' , 'four']

  constructor() { }

  ngOnInit(): void {
  }

}
 