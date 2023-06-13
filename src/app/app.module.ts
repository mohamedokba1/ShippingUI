
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './Shared/SharedModule/shared.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesRepresentativeModule } from './Components/SalesRepresentative/sales-representative.module';


@NgModule({
  declarations: [AppComponent, FooterComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    SalesRepresentativeModule,
  ],
=======
import { AddComponent } from './components/Employee/add/add.component';
import { EditComponent } from './components/Employee/edit/edit.component';
import { DisplayComponent } from './components/Employee/display/display.component';
import { DeleteComponent } from './components/Privellge/delete/delete.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [AppComponent, AddComponent, EditComponent, DisplayComponent, DeleteComponent, SidemenuComponent],
  imports: [BrowserModule, AppRoutingModule],
>>>>>>> 6e394095691dac357cc2baa6e8489b2f7d785c20
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
