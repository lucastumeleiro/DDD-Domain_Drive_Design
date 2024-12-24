import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "Lucas Tumeleiro");
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrow("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Lucas");

    customer.changeName("Jailson");

    expect(customer.name).toBe("Jailson");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Lucas");

    customer.changeName("Jailson");

    expect(customer.name).toBe("Jailson");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Lucas");
    const address = new Address("Rua 1", 1, "12345-678", "São Paulo");
    customer.Adress = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined when activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Lucas");
      customer.activate();
    }).toThrow("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Lucas");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Lucas");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
