import { NgModule } from '@angular/core';
import { OrdersStatesComponent } from './orders-states/orders-states.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [OrdersStatesComponent, OrdersListComponent],
  imports: [CommonModule, BrowserModule],
  exports: [OrdersStatesComponent, OrdersListComponent],
})
export class SalesRepresentativeModule {}
