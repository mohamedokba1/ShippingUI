import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/Employee/add/add.component';
import { EditComponent } from './components/Employee/edit/edit.component';
import { DisplayComponent } from './components/Employee/display/display.component';
import { DeleteComponent } from './components/Privellge/delete/delete.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [AppComponent, AddComponent, EditComponent, DisplayComponent, DeleteComponent, SidemenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
