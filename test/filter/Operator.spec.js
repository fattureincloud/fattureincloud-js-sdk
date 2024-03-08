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

  beforeEach(function () {
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Operator', function () {
    it('test Operator enum', function () {
      expect(fattureInCloudSdk.Operator.EQ).to.equal('=')
      expect(fattureInCloudSdk.Operator.GT).to.equal('>')
      expect(fattureInCloudSdk.Operator.GTE).to.equal('>=')
      expect(fattureInCloudSdk.Operator.LT).to.equal('<')
      expect(fattureInCloudSdk.Operator.LTE).to.equal('<=')
      expect(fattureInCloudSdk.Operator.NEQ).to.equal('<>')
      expect(fattureInCloudSdk.Operator.IS).to.equal('is')
      expect(fattureInCloudSdk.Operator.IS_NOT).to.equal('is not')
      expect(fattureInCloudSdk.Operator.LIKE).to.equal('like')
      expect(fattureInCloudSdk.Operator.CONTAINS).to.equal('contains')
      expect(fattureInCloudSdk.Operator.NOT_LIKE).to.equal('not like')
      expect(fattureInCloudSdk.Operator.NOT_CONTAINS).to.equal('not contains')
      expect(fattureInCloudSdk.Operator.STARTS_WITH).to.equal('starts with')
      expect(fattureInCloudSdk.Operator.ENDS_WITH).to.equal('ends with')
    })
  })
}))
