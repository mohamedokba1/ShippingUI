import { OrdersListComponent } from './Components/SalesRepresentative/orders-list/orders-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersStatesComponent } from './Components/SalesRepresentative/orders-states/orders-states.component';

const routes: Routes = [
  { path: '', component: OrdersStatesComponent },
  { path: 'orders', component: OrdersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
