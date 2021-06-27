import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MonetaryService } from '../monetary/monetary.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  

  constructor(private mService: MonetaryService ) { 
    

  }

  nameControl = new FormControl('', [
    Validators.required
  ]);
  amountControl = new FormControl('', [
    Validators.required,
    Validators.min(0.01)
  ]);

  ngOnInit(): void {
  }

  //returns true if values are valid to be saved
  onSave(): void{ 
    if(this.nameControl.valid && this.amountControl.valid){
      this.mService.addBill(this.nameControl.value, Math.round((this.amountControl.value + Number.EPSILON) * 100) / 100);
    }   
    
    this.nameControl.reset();
    this.amountControl.reset();    
  }

}
