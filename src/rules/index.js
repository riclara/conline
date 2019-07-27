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
  static getRule (name) {
    const resp = rules[name] || rules['Default']
    return resp
  }

}