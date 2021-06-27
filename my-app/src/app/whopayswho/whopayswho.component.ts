import { Component, OnInit } from '@angular/core';
import { MonetaryService } from '../monetary/monetary.service';

@Component({
  selector: 'app-whopayswho',
  templateUrl: './whopayswho.component.html',
  styleUrls: ['./whopayswho.component.css']
})
export class WhopayswhoComponent implements OnInit {

  constructor(public mService: MonetaryService) { }
  
  displayedColumns: string[] = ['Betaler', 'Bedrag', 'Ontvanger'];
  ngOnInit(): void {
  }

}
