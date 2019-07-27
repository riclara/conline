const expect = require('chai').expect

const Product = require('../src/model/product')
const CarInsurance = require('../src/products/carInsurance')

describe('CarInsurance Mega Coverage rule Test', function () {
  it('Mega Coverage rule', function () {
    const coTest = new CarInsurance([ new Product('Mega Coverage', -1, 80) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Mega Coverage')
    expect(products[0].sellIn).equal(-1)
    expect(products[0].price).equal(80)
  })

  it('Mega Coverage rule 4', function () {
    const coTest = new CarInsurance([ new Product('Mega Coverage', -19, -3) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Mega Coverage')
    expect(products[0].sellIn).equal(-19)
    expect(products[0].price).equal(0)
  })
})
