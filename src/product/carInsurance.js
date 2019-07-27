const DefaultRule = require('../rules/defaultRule')
const FullCoverageRule = require('../rules/fullCoverageRule')
const MegaCoverageRule = require('../rules/megaCoverageRule')

module.exports = class CarInsurance {
  constructor (products = []) {
    this.products = products
  }

  updatePrice1 () {
    for (var i = 0; i < this.products.length; i++) {
      switch (this.products[i].name) {
        case 'Special Full Coverage':
          // code block
          // console.log('pending implement')
          break
        case 'Full Coverage':
          this.products[i] = FullCoverageRule.updatePrice(this.products[i])
          break
        case 'Mega Coverage':
          this.products[i] = MegaCoverageRule.updatePrice(this.products[i])
          break
        default:
          this.products[i] = DefaultRule.updatePrice(this.products[i])
          // code block
      }
    }
    return this.products
  }

  updatePrice () {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name !== 'Full Coverage' && this.products[i].name !== 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          if (this.products[i].name !== 'Mega Coverage') {
            this.products[i].price = this.products[i].price - 1
          }
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1
          if (this.products[i].name === 'Special Full Coverage') {
            if (this.products[i].sellIn < 11) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1
              }
            }
            if (this.products[i].sellIn < 6) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1
              }
            }
          }
        }
      }
      if (this.products[i].name !== 'Mega Coverage') {
        this.products[i].sellIn = this.products[i].sellIn - 1
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name !== 'Full Coverage') {
          if (this.products[i].name !== 'Special Full Coverage') {
            if (this.products[i].price > 0) {
              if (this.products[i].name !== 'Mega Coverage') {
                this.products[i].price = this.products[i].price - 1
              }
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price
          }
        } else {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1
          }
        }
      }
    }

    return this.products
  }
}
