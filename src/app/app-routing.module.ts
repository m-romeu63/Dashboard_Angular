import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  {path: '',canActivate: [AuthGuard], component: DashboardViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
