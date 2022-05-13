const { default: Condition } = require('../../src/filter/Condition')
const { default: Filter } = require('../../src/filter/Filter');

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

  let e
  let e1
  let c1
  let c2
  let f
  let fEmpty

  beforeEach(function () {
    e = new fattureInCloudSdk.Condition('nation', fattureInCloudSdk.Operator.EQ, 'IT')
    e1 = new fattureInCloudSdk.Condition('company', fattureInCloudSdk.Operator.EQ, 'Madbit Entertainment S.r.l.')
    c1 = new fattureInCloudSdk.Condition('city', fattureInCloudSdk.Operator.EQ, 'Warsaw')
    c2 = new fattureInCloudSdk.Condition('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
    f = new fattureInCloudSdk.Filter(e)
    fEmpty = new fattureInCloudSdk.Filter()
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('Filter', function () {
    it('should create an instance of Filter', function () {
      expect(f).to.be.a(fattureInCloudSdk.Filter)
    })

    it('test attribute "expression"', function () {
      expect(f.expression).to.equal(e)
      f.expression = e1
      expect(f.expression).to.equal(e1)
    })

    it('test method where', function () {
      expect(fEmpty.expression).to.equal(null)

      fEmpty.where('nation', fattureInCloudSdk.Operator.EQ, 'IT')
      expect(fEmpty.expression).to.eql(e)

      fEmpty.where('company', fattureInCloudSdk.Operator.EQ, 'Madbit Entertainment S.r.l.')
      expect(fEmpty.expression).to.eql(e1)
    })

    it('test method whereExpression', function () {
      expect(fEmpty.expression).to.equal(null)

      fEmpty.whereExpression(e)
      expect(fEmpty.expression).to.equal(e)

      fEmpty.whereExpression(e1)
      expect(fEmpty.expression).to.equal(e1)
    })

    it('test method and', function () {
      expect(fEmpty.expression).to.equal(null)

      const conj = new fattureInCloudSdk.Conjunction(c1, c2)

      const andError = function () { fEmpty.and('company', fattureInCloudSdk.Operator.EQ, 'reply') }

      expect(andError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      fEmpty.where('city', fattureInCloudSdk.Operator.EQ, 'Warsaw').and('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
      expect(fEmpty.expression).to.eql(conj)
    })

    it('test method andExpression', function () {
      expect(fEmpty.expression).to.equal(null)

      const conj = new fattureInCloudSdk.Conjunction(c1, c2)

      const andError = function () { fEmpty.andExpression(c2) }

      expect(andError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      const andNullError = function () { fEmpty.whereExpression(c1).andExpression(null) }

      expect(andNullError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      fEmpty.whereExpression(c1).andExpression(c2)
      expect(fEmpty.expression).to.eql(conj)
    })

    it('test method andFilter', function () {
      expect(fEmpty.expression).to.equal(null)

      const conj = new fattureInCloudSdk.Conjunction(c1, c2)

      const andError = function () { fEmpty.andFilter(new Filter(c2)) }

      expect(andError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      const andEmptyError = function () { fEmpty.whereExpression(c1).andFilter() }

      expect(andEmptyError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      const andNullError = function () { fEmpty.whereExpression(c1).andFilter(null) }

      expect(andNullError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a conjunction with an empty expression.'))
        }
      )

      fEmpty.whereExpression(c1).andFilter(new Filter(c2))
      expect(fEmpty.expression).to.eql(conj)
    })

    it('test method or', function () {
      expect(fEmpty.expression).to.equal(null)

      const disj = new fattureInCloudSdk.Disjunction(c1, c2)

      const orError = function () { fEmpty.or('company', fattureInCloudSdk.Operator.EQ, 'reply') }

      expect(orError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      fEmpty.where('city', fattureInCloudSdk.Operator.EQ, 'Warsaw').or('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
      expect(fEmpty.expression).to.eql(disj)
    })

    it('test method orExpression', function () {
      expect(fEmpty.expression).to.equal(null)

      const disj = new fattureInCloudSdk.Disjunction(c1, c2)

      const orError = function () { fEmpty.orExpression(c2) }

      expect(orError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      const orNullError = function () { fEmpty.whereExpression(c1).orExpression(null) }

      expect(orNullError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      fEmpty.whereExpression(c1).orExpression(c2)
      expect(fEmpty.expression).to.eql(disj)
    })

    it('test method orFilter', function () {
      expect(fEmpty.expression).to.equal(null)

      const disj = new fattureInCloudSdk.Disjunction(c1, c2)

      const orError = function () { fEmpty.orFilter(new Filter(c2)) }

      expect(orError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      const orEmptyError = function () { fEmpty.whereExpression(c1).orFilter() }

      expect(orEmptyError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      const orNullError = function () { fEmpty.whereExpression(c1).orFilter(null) }

      expect(orNullError).to.throwException(
        function (e) {
          expect(e).to.eql(new Error('Cannot create a disjunction with an empty expression.'))
        }
      )

      fEmpty.whereExpression(c1).orFilter(new Filter(c2))
      expect(fEmpty.expression).to.eql(disj)
    })

    it('test method buidQuery', function () {
      expect(fEmpty.buildQuery()).to.equal('')

      fEmpty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      console.log(fEmpty.buildQuery())
      expect(fEmpty.buildQuery()).to.equal("company = 'Pzwodniczka Social Media'")
    })

    it('test method buildUrlEncodedQuery', function () {
      expect(fEmpty.buildUrlEncodedQuery()).to.equal('')

      fEmpty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      expect(fEmpty.buildUrlEncodedQuery()).to.equal("company%20=%20'Pzwodniczka%20Social%20Media'")
    })

    it('test method toString', function () {
      expect(fEmpty.toString()).to.equal('')

      fEmpty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      expect(fEmpty.toString()).to.equal("company = 'Pzwodniczka Social Media'")
    })
  })
}))
