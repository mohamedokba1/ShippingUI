export enum OrderState {
  New = 0,
  Delayed = 1,
  Waiting = 2,
  Rejected = 3,
  Delivered = 4,
}

export enum ShippingType {
  Normal = 'Normal',
  Express24H = 'Express24H',
  Express15D = 'Express15D',
}

export enum PaymentType {
  Cash = 'Cash',
  Visa = 'Visa',
  PackageForPackage = 'PackageForPackage',
}

export interface Order {
  order_Id: string;
  state: OrderState;
  paymentMethod: PaymentType;
  orderDate: string;
  extraWeightCost: number;
  companyBranch: string;
  defaultCost: number;
  customerName: string;
  shipping_type: ShippingType;
  isDeleted: boolean;
  traderId: string;
  salesRepresentativeId: string;
}
