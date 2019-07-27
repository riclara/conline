module.exports = class FullCoverageRule {
  static updatePrice (product) {
    product.sellIn--
    if (product.price === 50) return product
    if (product.price < 0)  {
      product.price = 0
    }

    if (product.sellIn < 0) {
      product.price = product.price + 2
    } else {
      product.price++
    }
    return product
  }
}
