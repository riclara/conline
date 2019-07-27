const expect = require('chai').expect

const Product = require('../src/model/product')
const CarInsurance = require('../src/products/carInsurance')

describe('CarInsurance Super Sale Test', function () {
  
  it('Super Sale 1', function () {
    const coTest = new CarInsurance([ new Product('Super Sale', 3, 6) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Super Sale')
    expect(products[0].sellIn).equal(2)
    expect(products[0].price).equal(4)
  })
  
  it('Super Sale 2', function () {
    const coTest = new CarInsurance([ new Product('Super Sale', 0, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Super Sale')
    expect(products[0].sellIn).equal(-1)
    expect(products[0].price).equal(0)
  })
  
  it('Super Sale 3', function () {
    const coTest = new CarInsurance([ new Product('Super Sale', 10, 60) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Super Sale')
    expect(products[0].sellIn).equal(9)
    expect(products[0].price).equal(50)
  })

  it('Super Sale 4', function () {
    const coTest = new CarInsurance([ new Product('Super Sale', -10, 6) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Super Sale')
    expect(products[0].sellIn).equal(-11)
    expect(products[0].price).equal(2)
  })

  it('Super Sale 5', function () {
    const coTest = new CarInsurance([ new Product('Super Sale', 3, -6) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('Super Sale')
    expect(products[0].sellIn).equal(2)
    expect(products[0].price).equal(0)
  })


})
