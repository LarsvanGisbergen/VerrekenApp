import { Component, OnInit } from '@angular/core';
import { MonetaryService } from '../monetary/monetary.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  
  constructor(public mService: MonetaryService) { 
    
  }
  displayedColumns: string[] = ['name', 'amount'];
  ngOnInit(): void {
    
  }

}
