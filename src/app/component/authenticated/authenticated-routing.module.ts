import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    // component:DashboardComponent,
    redirectTo:'dashboard',
    // canActivate:[AuthGuard]
  },
  {path:'dashboard', component:DashboardComponent,
    // canLoad:[AuthGuard]
  },
  {
    path:'product',
    component:ProductComponent,
    // canLoad:[AuthGuard]
  },
  {
    path:'about',
    component:AboutComponent,
    // canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
