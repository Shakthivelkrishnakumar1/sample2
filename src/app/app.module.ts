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
import { IngestCompanyComponent } from './ingest-company/ingest-company.component';
import { IngestComponent } from './ingest/ingest.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllUsersComponent,
    ListComponent,
    AllCompaniesComponent,
    IngestUserComponent,
    IngestCompanyComponent,
    IngestComponent,
    UpdateUserComponent,
    UpdateCompanyComponent,
    DeleteUserComponent,
    DeleteCompanyComponent,
    DeleteComponent,
    UpdateComponent,

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
