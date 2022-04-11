const { default: Condition } = require('../../src/filter/Condition');
const { default: Filter } = require('../../src/filter/Filter');

/**

 */
 (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD.
      define(['expect.js', process.cwd()+'/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      factory(require('expect.js'), require(process.cwd()+'/src/index'));
    } else {
      // Browser globals (root is window)
      factory(root.expect, root.fattureInCloudSdk);
    }
  }(this, function(expect, fattureInCloudSdk) {
    'use strict';
  
    var e
    var e1
    var c1
    var c2
    var f
    var f_empty
  
    beforeEach(function() {
      e = new fattureInCloudSdk.Condition('nation', fattureInCloudSdk.Operator.EQ, 'IT')
      e1 = new fattureInCloudSdk.Condition('company', fattureInCloudSdk.Operator.EQ, 'Madbit Entertainment S.r.l.');
      c1 = new fattureInCloudSdk.Condition('city', fattureInCloudSdk.Operator.EQ, 'Warsaw')
      c2 = new fattureInCloudSdk.Condition('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
      f = new fattureInCloudSdk.Filter(e)
      f_empty = new fattureInCloudSdk.Filter()
    });
  
    var getProperty = function(object, getter, property) {
      // Use getter method if present; otherwise, get the property directly.
      if (typeof object[getter] === 'function')
        return object[getter]();
      else
        return object[property];
    }
  
    var setProperty = function(object, setter, property, value) {
      // Use setter method if present; otherwise, set the property directly.
      if (typeof object[setter] === 'function')
        object[setter](value);
      else
        object[property] = value;
    }
  
    describe('Filter', function() {
      it('should create an instance of Filter', function() {
        expect(f).to.be.a(fattureInCloudSdk.Filter);
      });
  
      it('test attribute "expression"', function() {
        expect(f.expression).to.equal(e)
        f.expression = e1
        expect(f.expression).to.equal(e1)
      });

      it('test method where', function() {
        expect(f_empty.expression).to.equal(null)

        f_empty.where('nation', fattureInCloudSdk.Operator.EQ, 'IT')
        expect(f_empty.expression).to.eql(e)

        f_empty.where('company', fattureInCloudSdk.Operator.EQ, 'Madbit Entertainment S.r.l.')
        expect(f_empty.expression).to.eql(e1)
      });

      it('test method whereExpression', function() {
        expect(f_empty.expression).to.equal(null)

        f_empty.whereExpression(e)
        expect(f_empty.expression).to.equal(e)

        f_empty.whereExpression(e1)
        expect(f_empty.expression).to.equal(e1)
      });

    it('test method and', function() {
        expect(f_empty.expression).to.equal(null)
    
        var conj = new fattureInCloudSdk.Conjunction(c1, c2)

        var andError = function () { f_empty.and('company', fattureInCloudSdk.Operator.EQ, 'reply') };

        expect(andError).to.throwException(
            function (e) { 
                expect(e).to.equal('Cannot create a conjunction with an empty expression.');
            }
        )

        f_empty.where('city', fattureInCloudSdk.Operator.EQ, 'Warsaw').and('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
        expect(f_empty.expression).to.eql(conj)
    });

    it('test method andExpression', function() {
        expect(f_empty.expression).to.equal(null)
    
        var conj = new fattureInCloudSdk.Conjunction(c1, c2)

        var andError = function () { f_empty.andExpression(c2) };

        expect(andError).to.throwException(
            function (e) { 
                expect(e).to.equal('Cannot create a conjunction with an empty expression.');
            }
        )

        var andNullError = function () { f_empty.whereExpression(c1).andExpression(null) };
        
        expect(andNullError).to.throwException(
            function (e) { 
                expect(e).to.equal('Cannot create a conjunction with an empty expression.');
            }
        )

        f_empty.whereExpression(c1).andExpression(c2)
        expect(f_empty.expression).to.eql(conj)
    });

    it('test method andFilter', function() {
      expect(f_empty.expression).to.equal(null)
  
      var conj = new fattureInCloudSdk.Conjunction(c1, c2)

      var andError = function () { f_empty.andFilter(new Filter(c2)) };

      expect(andError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a conjunction with an empty expression.');
          }
      )

      var andEmptyError = function () { f_empty.whereExpression(c1).andFilter() };
      
      expect(andEmptyError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a conjunction with an empty expression.');
          }
      )

      var andNullError = function () { f_empty.whereExpression(c1).andFilter(null) };
      
      expect(andNullError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a conjunction with an empty expression.');
          }
      )

      f_empty.whereExpression(c1).andFilter(new Filter(c2))
      expect(f_empty.expression).to.eql(conj)
    });
    
    it('test method or', function() {
      expect(f_empty.expression).to.equal(null)
  
      var disj = new fattureInCloudSdk.Disjunction(c1, c2)

      var orError = function () { f_empty.or('company', fattureInCloudSdk.Operator.EQ, 'reply') };

      expect(orError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a disjunction with an empty expression.');
          }
      )

      f_empty.where('city', fattureInCloudSdk.Operator.EQ, 'Warsaw').or('company', fattureInCloudSdk.Operator.EQ, 'Przewodniczka Social Media')
      expect(f_empty.expression).to.eql(disj)
    });

    it('test method orExpression', function() {
        expect(f_empty.expression).to.equal(null)
    
        var disj = new fattureInCloudSdk.Disjunction(c1, c2)

        var orError = function () { f_empty.orExpression(c2) };

        expect(orError).to.throwException(
            function (e) { 
                expect(e).to.equal('Cannot create a disjunction with an empty expression.');
            }
        )

        var orNullError = function () { f_empty.whereExpression(c1).orExpression(null) };
        
        expect(orNullError).to.throwException(
            function (e) { 
                expect(e).to.equal('Cannot create a disjunction with an empty expression.');
            }
        )

        f_empty.whereExpression(c1).orExpression(c2)
        expect(f_empty.expression).to.eql(disj)
    });

    it('test method orFilter', function() {
      expect(f_empty.expression).to.equal(null)

      var disj = new fattureInCloudSdk.Disjunction(c1, c2)

      var orError = function () { f_empty.orFilter(new Filter(c2)) };

      expect(orError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a disjunction with an empty expression.');
          }
      )

      var orEmptyError = function () { f_empty.whereExpression(c1).orFilter() };
      
      expect(orEmptyError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a disjunction with an empty expression.');
          }
      )

      var orNullError = function () { f_empty.whereExpression(c1).orFilter(null) };
      
      expect(orNullError).to.throwException(
          function (e) { 
              expect(e).to.equal('Cannot create a disjunction with an empty expression.');
          }
      )

      f_empty.whereExpression(c1).orFilter(new Filter(c2))
      expect(f_empty.expression).to.eql(disj)
    });
  
    it('test method buidQuery', function() {
      expect(f_empty.buildQuery()).to.equal('')
  
      f_empty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      console.log(f_empty.buildQuery())
      expect(f_empty.buildQuery()).to.equal("company = 'Pzwodniczka Social Media'")
    });

    it('test method buildUrlEncodedQuery', function() {
      expect(f_empty.buildUrlEncodedQuery()).to.equal('')
  
      f_empty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      expect(f_empty.buildUrlEncodedQuery()).to.equal("company%20=%20\'Pzwodniczka%20Social%20Media\'")
    });

    it('test method toString', function() {
      expect(f_empty.toString()).to.equal('')
  
      f_empty = new Filter(new Condition('company', fattureInCloudSdk.Operator.EQ, 'Pzwodniczka Social Media'))
      expect(f_empty.toString()).to.equal('company = \'Pzwodniczka Social Media\'')
    });
  })
}));
  