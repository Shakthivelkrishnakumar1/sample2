import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [ 
  { path: 'search', component: SearchComponent },
  { path: 'allUsers', component: AllUsersComponent },
 
  { path: 'list', component: ListComponent },
  { path: 'companies', component: AllCompaniesComponent },

  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search' }, // Handle any other route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
