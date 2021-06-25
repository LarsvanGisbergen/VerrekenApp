import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MonetaryService } from '../monetary/monetary.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  

  constructor(private mService: MonetaryService ) { 


  }

  ngOnInit(): void {
  }

  //returns true if values are valid to be saved
  onSave(name:string, amount:number): boolean{ 
    if(name != "" || amount <= 0) return false;      
    this.mService.addBill(name, amount);
    return true;
  }

}
