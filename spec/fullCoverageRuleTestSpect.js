const expect = require('chai').expect

const Product = require('../src/model/product')
const CarInsurance = require('../src/products/carInsurance')

describe('CarInsurance Full Coverage rule Test', function () {
  it('Full Coverage rule', function () {
    const coTest = new CarInsurance([ new Product('Full Coverage', 2, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Full Coverage')
    expect(products[0].sellIn).equal(1)
    expect(products[0].price).equal(1)
  })

  it('Full Coverage rule 2', function () {
    const coTest = new CarInsurance([ new Product('Full Coverage', -3, 8) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Full Coverage')
    expect(products[0].sellIn).equal(-4)
    expect(products[0].price).equal(10)
  })

  it('Full Coverage rule 3', function () {
    const coTest = new CarInsurance([ new Product('Full Coverage', -24, 50) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Full Coverage')
    expect(products[0].sellIn).equal(-25)
    expect(products[0].price).equal(50)
  })

  it('Full Coverage rule 4', function () {
    const coTest = new CarInsurance([ new Product('Full Coverage', -19, -3) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Full Coverage')
    expect(products[0].sellIn).equal(-20)
    expect(products[0].price).equal(0)
  })
})
