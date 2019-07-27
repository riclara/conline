module.exports = class SuperSaleRule {
  static updatePrice (product) {
    product.sellIn--
    if (product.price <= 0) return product
    if (product.sellIn < 0) {
      product.price = product.price - 4
    } else {
      product.price = product.price - 2
    }
    if (product.price <= 0) product.price = 0
    else if (product.price > 50) product.price = 50
    return product
  }
}
