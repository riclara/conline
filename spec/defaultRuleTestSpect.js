const expect = require('chai').expect

const Product = require('../src/model/product')
const CarInsurance = require('../src/products/carInsurance')

describe('CarInsurance Default rule Test', function () {
  it('Default rule 1', function () {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 10, 20) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Medium Coverage')
    expect(products[0].sellIn).equal(9)
    expect(products[0].price).equal(19)
  })

  it('Default rule 2', function () {
    const coTest = new CarInsurance([ new Product('Medium Coverage', -1, 8) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Medium Coverage')
    expect(products[0].sellIn).equal(-2)
    expect(products[0].price).equal(6)
  })

  it('Default rule 3', function () {
    const coTest = new CarInsurance([ new Product('Medium Coverage', -3, 60) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Medium Coverage')
    expect(products[0].sellIn).equal(-4)
    expect(products[0].price).equal(50)
  })

  it('Default rule 4', function () {
    const coTest = new CarInsurance([ new Product('Medium Coverage', -19, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Medium Coverage')
    expect(products[0].sellIn).equal(-20)
    expect(products[0].price).equal(0)
  })
})
