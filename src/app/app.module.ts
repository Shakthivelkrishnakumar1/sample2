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
import { ListComponent } from './list/list.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { IngestUserComponent } from './ingest-user/ingest-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllUsersComponent,
    ListComponent,
    AllCompaniesComponent,
    IngestUserComponent
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
