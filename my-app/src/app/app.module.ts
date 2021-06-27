import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { SummaryComponent } from './summary/summary.component';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { BillsComponent } from './bills/bills.component';
import { MatTableModule} from '@angular/material/table'
import { MonetaryService } from './monetary/monetary.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhopayswhoComponent } from './whopayswho/whopayswho.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    SummaryComponent,
    BillsComponent,
    WhopayswhoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [MonetaryService],
  bootstrap: [AppComponent]
})
export class AppModule {    
}
