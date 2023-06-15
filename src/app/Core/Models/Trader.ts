import { Order } from "./order";

export interface ITrader {
    TraderId: string,
    Name: string,
    Email: string,
    Address: string,
    PhoneNo: string,
    CostPerRefusedOrder: number,
    Privellge: string[],
    Orders: Order[]
}
