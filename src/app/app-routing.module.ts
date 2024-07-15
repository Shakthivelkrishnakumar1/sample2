import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { IngestComponent } from './ingest/ingest.component';
import { IngestUserComponent } from './ingest-user/ingest-user.component';
import { IngestCompanyComponent } from './ingest-company/ingest-company.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [ 
  { path: 'search', component: SearchComponent },
  // { path: 'allUsers', component: AllUsersComponent },
 
  // { path: 'list', component: ListComponent },
  // { path: 'companies', component: AllCompaniesComponent },
  { path: 'list', component: ListComponent, children: [
    { path: 'users', component: AllUsersComponent },
    { path: 'companies', component: AllCompaniesComponent }
  ]},
  {
    path: 'ingest',
    component: IngestComponent,
    children: [
      { path: 'ingest-user', component: IngestUserComponent },
      { path: 'ingest-company', component: IngestCompanyComponent }
    ]
  },
  { 
    path: 'update', component: UpdateComponent,
    children: [
      { path: 'update-user', component: UpdateUserComponent },
      { path: 'update-company', component: UpdateCompanyComponent }
    ]
  },
  // { path: 'update-user', component: UpdateUserComponent },
  // { path: 'update-company', component: UpdateCompanyComponent },
  { 
    path: 'delete', component: DeleteComponent,
    children: [
      { path: 'delete-user', component: DeleteUserComponent },
      { path: 'delete-company', component: DeleteCompanyComponent }
    ]
  },
  // { path: 'ingest-company', component: IngestCompanyComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/search' }, // Handle any other route
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
