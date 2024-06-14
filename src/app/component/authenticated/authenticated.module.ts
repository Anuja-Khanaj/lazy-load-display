import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSortModule} from '@angular/material/sort';
import {MatTabsModule, matTabsAnimations} from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatMenuModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule
  ]

})
export class AuthenticatedModule { }
