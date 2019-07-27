const expect = require('chai').expect

const Product = require('../src/model/product')
const CarInsurance = require('../src/products/carInsurance')

describe('CarInsurance Special Full Coverage rule Test', function () {
  it('Special Full Coverage rule', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 14, 21) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(13)
    expect(products[0].price).equal(22)
  })

  it('Special Full Coverage rule 2', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 9, 50) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(8)
    expect(products[0].price).equal(50)
  })

  it('Special Full Coverage rule 3', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 0, 50) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(-1)
    expect(products[0].price).equal(0)
  })

  it('Special Full Coverage rule 4', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', -10, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(-11)
    expect(products[0].price).equal(0)
  })

  it('Special Full Coverage rule 5', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 4, 44) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(3)
    expect(products[0].price).equal(47)
  })

  it('Special Full Coverage rule 5', function () {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 29, -3) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Special Full Coverage')
    expect(products[0].sellIn).equal(28)
    expect(products[0].price).equal(0)
  })
})
