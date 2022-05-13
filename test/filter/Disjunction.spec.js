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

  let left
  let right
  let c
  let left1
  let right1

  beforeEach(function () {
    left = new fattureInCloudSdk.Condition('city', fattureInCloudSdk.Operator.EQ, 'Bergamo')
    right = new fattureInCloudSdk.Condition('age', fattureInCloudSdk.Operator.LT, 35)
    c = new fattureInCloudSdk.Disjunction(left, right)
    left1 = new fattureInCloudSdk.Condition('team', fattureInCloudSdk.Operator.EQ, 'Volley Bergamo 1991')
    right1 = new fattureInCloudSdk.Condition('best_player', fattureInCloudSdk.Operator.IS_NOT, null)
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Disjunction', function () {
    it('should create an instance of Disjunction', function () {
      expect(c).to.be.a(fattureInCloudSdk.Disjunction)
    })

    it('test attribute "left"', function () {
      expect(c.left).to.equal(left)
      c.left = left1
      expect(c.left).to.equal(left1)
    })

    it('test attribute "right"', function () {
      expect(c.right).to.equal(right)
      c.right = right1
      expect(c.right).to.equal(right1)
    })

    it('test method buildQuery', function () {
      expect(c.buildQuery()).to.equal("(city = 'Bergamo' or age < 35)")
      c.left = left1
      c.right = right1
      expect(c.buildQuery()).to.equal("(team = 'Volley Bergamo 1991' or best_player is not null)")
    })
  })
}))
