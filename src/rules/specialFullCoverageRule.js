module.exports = class SpecialFullCoverage {
  static updatePrice (product) {
    product.sellIn--
    if (product.sellIn < 0) {
      product.price = 0
    } else if(product.sellIn < 5) {
      product.price = product.price + 3
    } else if(product.sellIn < 10) {
      product.price = product.price + 2
    } else {
      product.price++
    }
    if (product.price < 0) product.price = 0
    if (product.price > 50) product.price = 50
    return product
  }
}
