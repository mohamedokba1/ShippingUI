import { Component, OnInit } from '@angular/core';
import { Order, OrderState } from 'src/app/Core/Models/order';
import { OrderService } from 'src/app/Core/Services/order.service';

@Component({
  selector: 'app-orders-states',
  templateUrl: './orders-states.component.html',
  styleUrls: ['./orders-states.component.css'],
})
export class OrdersStatesComponent implements OnInit {
  orders: Order[] = [];
  orderStatusCounts: any = {};
  salesRepresentatives: string[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getAllOrders().subscribe((response: any) => {
      this.orders = response;
      this.countOrderStatuses();
      // this.salesRepresentatives = this.getSalesRepresentatives();
      // this.countOrderStatusesSales();
    });
  }

  countOrderStatuses(): void {
    this.orderStatusCounts = {};
    this.orders.forEach((order) => {
      const orderState = OrderState[order.state];
      if (this.orderStatusCounts[order.state]) {
        this.orderStatusCounts[order.state]++;
      } else {
        this.orderStatusCounts[order.state] = 1;
      }
    });
  }

  getStatusName(statusValue: any): string {
    return OrderState[statusValue];
  }

  getSalesRepresentatives(): string[] {
    const representativesSet = new Set<string>();
    this.orders.forEach((order) => {
      representativesSet.add(order.salesRepresentativeId);
    });

    return Array.from(representativesSet);
  }

  countOrderStatusesSales(): void {
    this.orderStatusCounts = {};

    this.salesRepresentatives.forEach((representative) => {
      this.orderStatusCounts[representative] = {};

      this.orders.forEach((order) => {
        if (order.salesRepresentativeId === representative) {
          const orderState = OrderState[order.state] as keyof typeof OrderState;
          const stateName = orderState ? orderState.toString() : '';

          if (stateName) {
            if (this.orderStatusCounts[representative][stateName]) {
              this.orderStatusCounts[representative][stateName]++;
            } else {
              this.orderStatusCounts[representative][stateName] = 1;
            }
          }
        }
      });
    });
  }
}
