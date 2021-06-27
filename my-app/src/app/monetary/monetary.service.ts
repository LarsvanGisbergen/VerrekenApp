import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MonetaryService {

  bills: Bill[] = []
  payments: Payment[] = []

  constructor() {    
    console.log("MonetaryService initialized");
  }

  //returns true if bill was added succesfully
  addBill(name: string, amount: number): boolean{
    let bill:Bill = new Bill(name, amount);
    try{
      this.bills.push(bill);
      console.log("name: " + bill.name + " amount: " + bill.amount + " succesfully added to service");
    }
    catch{
      return false;
    }    
    return true;
  }

   getBills(): Observable<Bill[]> {
    return of(this.bills);
  }
  
  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }
  
}



export class Bill{
  name!: string;
  amount!: number;

  
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;   
  }
}

export class Payment{
  name!: string;
  amount!: number;
  name_receiver!: string;
  
  constructor(name: string, amount: number, name_receiver: string) {
    this.name = name;
    this.amount = amount;
    this.name_receiver = name_receiver;
  }
}