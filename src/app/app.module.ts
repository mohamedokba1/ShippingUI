import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/Employee/display/display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './Shared/SharedModule/shared.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SalesRepresentativeModule } from './components/SalesRepresentative/sales-representative.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SalesRepresentativeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
