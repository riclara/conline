module.exports = class DefaultRule {
  static updatePrice (product) {
    product.sellIn--
    if (product.price <= 0) return product
    if (product.sellIn < 0) {
      product.price = product.price - 2
    } else {
      product.price--
    }
    return product
  }
}
