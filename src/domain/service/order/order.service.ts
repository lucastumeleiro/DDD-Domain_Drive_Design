import { v4 as uuid } from "uuid";
import Customer from "../../entity/customer/customer";
import Order from "../../entity/order/order";
import OrderItem from "../../entity/order/order_item";

export default class OrderService {
  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);

    return order;
  }

  static total(orders: Order[]): number {
    return orders.reduce((total: number, order: Order) => {
      return total + order.total();
    }, 0);
  }
}
