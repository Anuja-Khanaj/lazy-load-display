import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedLayoutRoutingModule } from './authenticated-layout-routing.module';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AuthenticatedLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedLayoutRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class AuthenticatedLayoutModule { }
