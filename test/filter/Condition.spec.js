/**

 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.fattureInCloudSdk)
  }
}(this, function (expect, fattureInCloudSdk) {
  'use strict'

  let cBool
  let cNum
  let cString
  let cNull

  beforeEach(function () {
    cBool = new fattureInCloudSdk.Condition('qualified', fattureInCloudSdk.Operator.EQ, true)
    cNum = new fattureInCloudSdk.Condition('price', fattureInCloudSdk.Operator.LTE, 10.12)
    cString = new fattureInCloudSdk.Condition('sweet', fattureInCloudSdk.Operator.ENDS_WITH, 'cioccolato')
    cNull = new fattureInCloudSdk.Condition('girlfriend', fattureInCloudSdk.Operator.IS_NOT, null)
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Condition', function () {
    it('should create an instance of Condition', function () {
      expect(cBool).to.be.a(fattureInCloudSdk.Condition)
      expect(cNum).to.be.a(fattureInCloudSdk.Condition)
      expect(cString).to.be.a(fattureInCloudSdk.Condition)
      expect(cNull).to.be.a(fattureInCloudSdk.Condition)
    })

    it('test attribute "field"', function () {
      expect(cBool.field).to.equal('qualified')
      cBool.field = 'phd'
      expect(cBool.field).to.equal('phd')
      expect(cNum.field).to.equal('price')
      expect(cString.field).to.equal('sweet')
      expect(cNull.field).to.equal('girlfriend')
    })

    it('test attribute "operator"', function () {
      expect(cBool.operator).to.equal(fattureInCloudSdk.Operator.EQ)
      expect(cNum.operator).to.equal(fattureInCloudSdk.Operator.LTE)
      cNum.operator = fattureInCloudSdk.Operator.GTE
      expect(cNum.operator).to.equal(fattureInCloudSdk.Operator.GTE)
      expect(cString.operator).to.equal(fattureInCloudSdk.Operator.ENDS_WITH)
      expect(cNull.operator).to.equal(fattureInCloudSdk.Operator.IS_NOT)
    })

    it('test attribute "value"', function () {
      expect(cBool.value).to.equal(true)
      expect(cNum.value).to.equal(10.12)
      expect(cString.value).to.equal('cioccolato')
      cString.value = 'panna'
      expect(cString.value).to.equal('panna')
      expect(cNull.value).to.equal(null)
    })

    it('test method "buildQuery"', function () {
      expect(cBool.buildQuery()).to.equal('qualified = true')
      expect(cNum.buildQuery()).to.equal('price <= 10.12')
      expect(cString.buildQuery()).to.equal("sweet ends with 'cioccolato'")
      expect(cNull.buildQuery()).to.equal('girlfriend is not null')
    })
  })
}))
