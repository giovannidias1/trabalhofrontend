import { DatePipe } from '@angular/common';
import { AuthGuard } from './authGuard';
import { OsComponent } from './os/os.component';
import { EmployersComponent } from './employers/employers.component';
import { ListEmployersComponent } from './list-employers/list-employers.component';
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
import { BsDatepickerModule, ButtonsModule } from 'ngx-bootstrap';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
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
import { SelectModule } from 'ng2-select';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgxSelectModule } from 'ngx-select-ex';




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
    ListEmployersComponent,
    EmployersComponent,
    OsComponent,
    LoginPageComponent

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
    NgxViacepModule,
    NgxSelectModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [RestService, AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
