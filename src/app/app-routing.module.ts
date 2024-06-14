import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './component/layout/auth-layout/auth-layout/auth-layout.component';
import { AuthenticatedLayoutComponent } from './component/layout/authenticated-layout/authenticated-layout/authenticated-layout.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "", loadChildren: () => import('../app/component/layout/auth-layout/auth-layout.module').then(
          (m) => m.AuthLayoutModule
        )
      }
    ]
  },
  {
    path: "",
    component: AuthenticatedLayoutComponent,
    // canLoad:[AuthGuard],
    children: [
      {
        path: "", loadChildren: () => import('../app/component/layout/authenticated-layout/authenticated-layout.module').then(
          (m) => m.AuthenticatedLayoutModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
