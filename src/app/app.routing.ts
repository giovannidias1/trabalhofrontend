import { ListEmployersComponent } from './list-employers/list-employers.component';
import { EmployersComponent } from './employers/employers.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { CarsComponent } from './cars/cars.component';
import { AgencyComponent } from './agency/agency.component';
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
import { ListAgencyComponent } from './list-agency/list-agency.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'listCars', component: ListCarsComponent },
  { path: 'listAgency', component: ListAgencyComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'listClients', component: ListClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'listEmployers', component: ListEmployersComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'table', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },

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
