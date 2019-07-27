// const DefaultRule = require('../rules/defaultRule')
// const FullCoverageRule = require('../rules/fullCoverageRule')
// const MegaCoverageRule = require('../rules/megaCoverageRule')
// const SpecialFullCoverageRule = require('../rules/specialFullCoverageRule')
// const SuperSale = require('../rules/superSale')
const Rule = require('../rules')

module.exports = class CarInsurance {
  constructor (products = []) {
    this.products = products
  }

  updatePrice () {
    for (var i = 0; i < this.products.length; i++) {
      Rule.getRule(this.products[i].name).updatePrice(this.products[i])
    }
    return this.products
  }
}
