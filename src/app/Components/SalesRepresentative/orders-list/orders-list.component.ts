import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent {
  selectedState: string = '';

  selectState(state: string): void {
    this.selectedState = state;
  }
}
