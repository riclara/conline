module.exports = class FullCoverageRule {
  static updatePrice (product) {
    product.sellIn--
    if (product.sellIn < 0) {
      product.price = product.price + 2
    } else {
      product.price++
    }
    if (product.price < 0) product.price = 0
    if (product.price > 50) product.price = 50
    return product
  }
}
