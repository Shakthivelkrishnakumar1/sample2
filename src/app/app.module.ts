import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { AgGridModule } from 'ag-grid-angular';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AllUsersComponent } from './all-users/all-users.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    AgGridModule,
    RouterModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
