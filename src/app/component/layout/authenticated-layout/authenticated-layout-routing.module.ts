import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard2Guard } from 'src/app/guard/auth-gurad2.guard';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {path:'dashboard',
    // canLoad:[AuthGuard],
    loadChildren:()=>import('../../authenticated/authenticated.module').then(
      m => m.AuthenticatedModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedLayoutRoutingModule { }
