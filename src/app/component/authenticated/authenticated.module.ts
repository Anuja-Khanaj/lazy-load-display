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
import { MatTableModule } from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import { ViewProductComponent } from './view-product/view-product.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    AboutComponent,
    SearchPipe,
   ViewProductComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ClipboardModule
  ]

})
export class AuthenticatedModule { }
