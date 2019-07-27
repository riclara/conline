const DefaultRule = require('../rules/defaultRule')
const FullCoverageRule = require('../rules/fullCoverageRule')
const MegaCoverageRule = require('../rules/megaCoverageRule')
const SpecialFullCoverageRule = require('../rules/specialFullCoverageRule')
const SuperSale = require('../rules/superSale')

module.exports = class CarInsurance {
  constructor (products = []) {
    this.products = products
  }

  updatePrice () {
    for (var i = 0; i < this.products.length; i++) {
      switch (this.products[i].name) {
        case 'Special Full Coverage':
          this.products[i] = SpecialFullCoverageRule.updatePrice(this.products[i])
          break
        case 'Full Coverage':
          this.products[i] = FullCoverageRule.updatePrice(this.products[i])
          break
        case 'Mega Coverage':
          this.products[i] = MegaCoverageRule.updatePrice(this.products[i])
          break
        case 'Super Sale':
          this.products[i] = SuperSale.updatePrice(this.products[i])
          break
        default:
          this.products[i] = DefaultRule.updatePrice(this.products[i])
      }
    }
    return this.products
  }
}
