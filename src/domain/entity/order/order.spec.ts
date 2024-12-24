import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrow("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrow("CustomerId is required");
  });

  it("should throw error when items are empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrow("Item qtd must be greater than 0");
  });

  it("should calculate total", () => {
    const item = new OrderItem("1", "Item 1", 10, "1", 2);
    const item2 = new OrderItem("2", "Item 2", 15, "2", 2);
    const order = new Order("123", "123", [item]);
    const order2 = new Order("123", "123", [item, item2]);

    let total = order.total();
    let total2 = order2.total();

    expect(total).toBe(20);

    expect(total2).toBe(50);
  });

  it("should check if the item qte qtd is less or equal 0", () => {
    expect(() => {
      const item = new OrderItem("1", "Item 1", 10, "1", 0);
      new Order("123", "123", [item]);
    }).toThrow("Quantity must be greater than 0");
  });
});
