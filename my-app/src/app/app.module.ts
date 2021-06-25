import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { SummaryComponent } from './summary/summary.component';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    SummaryComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {    
}
