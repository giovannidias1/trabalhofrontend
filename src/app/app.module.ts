import { RentalComponent } from './rental/rental.component';
import { EmployersComponent } from './employers/employers.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { CarsComponent } from './cars/cars.component';
import { ListAgencyComponent } from './list-agency/list-agency.component';
import { RestService } from './rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ClientsComponent } from './clients/clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgencyComponent } from './agency/agency.component';
import { SelectModule } from 'ng2-select';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientsComponent,
    ListClientsComponent,
    AgencyComponent,
    ListAgencyComponent,
    CarsComponent,
    ListCarsComponent,
    ListEmployersComponent,
    EmployersComponent,
    RentalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    Ng2SmartTableModule,
    SelectModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
