
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
