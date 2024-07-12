import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';



import { AllUsersComponent } from './all-users/all-users.component';
const routes: Routes = [
  { path: 'allUsers', component: AllUsersComponent },
  { path: 'search', component: SearchComponent },

 

  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search' } // Handle any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
