module.exports = class MegaCoverageRule {
  static updatePrice (product) {
    if (product.price < 0)  {
      product.price = 0
    }
    return product
  }
}
