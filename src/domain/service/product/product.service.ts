import Product from "../../entity/product/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    products.forEach((product: Product) => {
      product.changePrice(product.price + (product.price * percentage) / 100);
    });
  }
}
