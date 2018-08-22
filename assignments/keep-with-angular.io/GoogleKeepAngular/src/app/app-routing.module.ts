import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeepComponent } from '../app/keep/keep.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { KeepDetailComponent } from '../app/keep-detail/keep-detail.component'

const routes: Routes = [
  {path: 'keeps', component: KeepComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: KeepDetailComponent}
]
@NgModule({
  exports : [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

 }
