import { AuthGuard } from './authGuard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { EmployersComponent } from './employers/employers.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { path: 'listClients', component: ListClientsComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'employers', component: EmployersComponent},
  { path: 'listEmployers', component: ListEmployersComponent},
  { path: 'orderService', component: RentalComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: HomeComponent},

  //canActivate: [AuthGuard]
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
