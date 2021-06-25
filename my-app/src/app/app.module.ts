import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { SummaryComponent } from './summary/summary.component';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { BillsComponent } from './bills/bills.component';
import { MatTableModule} from '@angular/material/table'
import { MonetaryService } from './monetary/monetary.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    SummaryComponent,
    BillsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule   
  ],
  providers: [MonetaryService],
  bootstrap: [AppComponent]
})
export class AppModule {    
}
