import Product from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Produto 1", 100);
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("1", "", 100);
    }).toThrow("Name is required");
  });

  it("should throw error when price is empty", () => {
    expect(() => {
      new Product("1", "Produto 1", null as any);
    }).toThrow("Price must be greater than 0");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      new Product("1", "Produto 1", -1);
    }).toThrow("Price must be greater than 0");
  });

  it("should change name", () => {
    const product = new Product("1", "Produto 1", 100);

    product.changeName("Produto 2");

    expect(product.name).toBe("Produto 2");
  });

  it("should change price", () => {
    const product = new Product("1", "Produto 1", 100);

    product.changePrice(200);

    expect(product.price).toBe(200);
  });
});
