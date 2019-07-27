const DefaultRule = require('../rules/defaultRule')
const FullCoverageRule = require('../rules/fullCoverageRule')
const MegaCoverageRule = require('../rules/megaCoverageRule')
const SpecialFullCoverageRule = require('../rules/specialFullCoverageRule')
const SuperSale = require('../rules/superSale')

const rules = {
  'Default': DefaultRule,
  'Full Coverage': FullCoverageRule,
  'Mega Coverage': MegaCoverageRule,
  'Special Full Coverage': SpecialFullCoverageRule,
  'Super Sale': SuperSale
}

module.exports = class Rule {
  static updatePrice(product) {
    const rule = rules[product.name] || rules['Default']
    return rule.updatePrice(product)
  }
}