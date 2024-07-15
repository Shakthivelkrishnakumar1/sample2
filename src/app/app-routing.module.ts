import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { IngestComponent } from './ingest/ingest.component';
import { IngestUserComponent } from './ingest-user/ingest-user.component';
import { IngestCompanyComponent } from './ingest-company/ingest-company.component';
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
  // { path: 'ingest-user', component: IngestUserComponent },
  // { path: 'ingest-company', component: IngestCompanyComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search' }, // Handle any other route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
