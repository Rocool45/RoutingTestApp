import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { FairCardComponent } from './shared/fairs/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/fairs/fair-details/fair-details.component';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterLinkWithHref, RouterOutlet, RouterLink } from "@angular/router";
import { UserBashbaordComponent } from './shared/user/user-bashbaord/user-bashbaord.component';
import { UserCardComponent } from './shared/user/user-card/user-card.component';
import { UserFormComponent } from './shared/user/user-form/user-form.component';
import { ProductDashboardComponent } from './shared/product/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './shared/product/product-card/product-card.component';
import { ProductFormComponent } from './shared/product/product-form/product-form.component';
import { FairDashboardComponent } from './shared/fairs/fair-dashboard/fair-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { A11yModule } from "@angular/cdk/a11y";
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './shared/component/auth/auth.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetConfirmComponent,
    FairCardComponent,
    FairDetailsComponent,
    UserBashbaordComponent,
    UserCardComponent,
    UserFormComponent,
    ProductDashboardComponent,
    ProductCardComponent,
    ProductFormComponent,
    FairDashboardComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    RouterLinkWithHref,
    RouterOutlet,
    RouterLink,
    MatCardModule,
    A11yModule,
  MatTooltipModule,
  HttpClientModule,
  MatProgressSpinnerModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
