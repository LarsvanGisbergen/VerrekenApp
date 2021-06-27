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
    
    this.bills = this.eliminateDoubles(this.bills);

    //update payments register
    if (this.bills.length > 1) {
      this.calculatePayments();
      console.log("Service updated payments with new bill from: " + bill.name);
    }
    return true;
  }

   getBills(): Observable<Bill[]> {
    return of(this.bills);
  }
  
  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }
  

  calculatePayments(): void {
    this.payments = [];
  
    let valPayed = 0;
    this.bills.forEach(element => {
      valPayed += element.amount;
    });
    let average = valPayed / this.bills.length;
  
    let payers: Bill[] = [];
    let receivers: Bill[] = [];
  
    this.bills.forEach(element => {
      let diff = element.amount - average;
      if (diff > 0) {
        receivers.push(new Bill(element.name, diff));
      }
      if (diff < 0) {
        payers.push(new Bill(element.name, -diff));
      }
    })
  
    while(receivers.length > 0 && payers.length > 0){
      let receiver = receivers[0];
      let payer = payers[0];
      
      if(payer.amount >= receiver.amount) {
        this.payments.push(new Payment(payer.name, receiver.amount, receiver.name));
        if (payer.amount > receiver.amount) {
          payers.push(new Bill(payer.name, payer.amount - receiver.amount));
        }
      }  else if (payer.amount < receiver.amount){
        this.payments.push(new Payment(payer.name, payer.amount, receiver.name));
        receivers.push(new Bill(receiver.name, receiver.amount - payer.amount));
      } 
      payers.splice(payers.indexOf(payer), 1);
      receivers.splice(receivers.indexOf(receiver), 1);
    }
  
    this.payments.forEach(element => {
      element.amount = Math.round((element.amount + Number.EPSILON) * 100) / 100;
    });
  }
  
  //If bill exists for specific name, new bill will be added onto previous bill for specific name
  eliminateDoubles(doubles: Bill[]): Bill[] {
    let singles: Bill[] = [];
  
    doubles.forEach(double => {
      let exists!: Bill;
      singles.forEach(single => {
        if (double.name == single.name){
          exists = single;
        }
      })
      if(exists == null){
        singles.push(double);
      } else {
        singles.splice(singles.indexOf(exists), 1);
        double.amount += exists.amount;
        singles.push(double);
      }
    })
  
    return singles;
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