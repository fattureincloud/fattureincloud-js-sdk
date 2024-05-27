/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
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

  let instance

  beforeEach(function () {
    instance = new fattureInCloudSdk.IssuedDocument()
    instance.id = 12345
    instance.type = 'receipt'
    instance.year = 2021
    instance.numeration = 'rec123'
    instance.subject = ''
    instance.visible_subject = ''
    instance.rc_center = ''
    instance.ei_cassa_type = ''
    instance.ei_withholding_tax_causal = 'a'
    instance.ei_other_withholding_tax_type = 'a'
    instance.ei_other_withholding_tax_causal = 'c'
    instance.stamp_duty = 0
    instance.use_gross_prices = false
    instance.e_invoice = false
    instance.delivery_note = false
    instance.accompanying_invoice = false
    instance.amount_net = 68.18
    instance.amount_vat = 6.82
    instance.amount_gross = 75
    instance.amount_due_discount = 1
    instance.amount_rivalsa = 0
    instance.amount_cassa = 0
    instance.amount_withholding_tax = 0
    instance.amount_other_withholding_tax = 0
    instance.h_margins = 15
    instance.v_margins = 16
    instance.show_payment_method = false
    instance.show_payments = true
    instance.show_totals = 'all'
    instance.show_notification_button = false
    instance.is_marked = false
    instance.date = '2021-08-20'
    instance.number = 1
    instance.notes = ''
    instance.rivalsa = 0
    instance.cassa = 0
    instance.withholding_tax = 0
    instance.withholding_tax_taxable = 100
    instance.other_withholding_tax = 0
    instance.use_split_payment = false
    instance.attachment_url = 'kdijrnf893hnwkfk45f50f.pdf'
    instance.seen_date = '2020-08-23'
    instance.next_due_date = '2020-08-23'
    instance.url = 'y12h45rn9yf2mse0p43t7ec90vr.pdf'
    instance.show_tspay_button = false
    instance.dn_number = 3
    instance.dn_date = '2020-10-21'
    instance.dn_ai_packages_number = 4
    instance.dn_ai_weight = 3
    instance.dn_ai_causal = 'causal'
    instance.dn_ai_destination = 'dest'
    instance.dn_ai_transporter = 'trasp'
    instance.dn_ai_notes = 'notes'
    instance.amount_rivalsa_taxable = 3
    instance.amount_global_cassa_taxable = 3
    instance.amount_cassa_taxable = 3
    instance.amount_cassa2 = 3
    instance.amount_cassa2_taxable = 3
    instance.amount_withholding_tax_taxable = 3
    instance.amount_enasarco_taxable = 3
    instance.amount_other_withholding_tax_taxable = 3
    instance.ei_cassa2_type = 3
    instance.attachment_token = 'asdaosdjaoisndoa'
    instance.entity = {
      id: 54321,
      name: 'Mary Red S.r.L.',
      vat_number: 'IT05432181211',
      tax_code: 'IT05432181211',
      address_street: 'Corso impero, 66',
      address_postal_code: '20900',
      address_city: 'Milano',
      address_province: 'MI',
      address_extra: '',
      country: 'Italia',
      certified_email: 'mary@pec.red.com',
      ei_code: 'ABCXCR1'
    }
    instance.currency = {
      id: 'EUR',
      exchange_rate: '1.00000',
      symbol: '€'
    }
    instance.language = {
      code: 'it',
      name: 'Italiano'
    }
    instance.payment_method = {
      id: 4,
      name: 'Credit card'
    }
    instance.items_list = [
      {
        product_id: 5432,
        code: 'SG3',
        name: 'Soggiorno',
        measure: '',
        net_price: 68.18182,
        category: '',
        id: 277876033,
        gross_price: 75,
        apply_withholding_taxes: true,
        discount: 0,
        discount_highlight: false,
        in_dn: false,
        qty: 1,
        vat: {
          id: 3,
          value: 10,
          description: ''
        },
        stock: false,
        description: '',
        not_taxable: false
      }
    ]
    instance.payments_list = [
      {
        amount: 75,
        due_date: '2020-08-23',
        paid_date: null,
        id: 69078013,
        payment_terms: {
          days: 0,
          type: 'standard'
        },
        status: 'not_paid',
        payment_account: null
      }
    ]
    instance.template = {
      id: 2821,
      name: 'Light Smoke'
    }
    instance.extra_data = {
      ts_status: 1
    }
    instance.refers_to = {
      id: 7
    }
    instance.acc_inv_template = {
      id: 4
    }
    instance.delivery_note_template = {
      id: 54321
    }
    instance.ei_raw = {
      prop: true
    }
    instance.ei_data = {
      bank_name: 'Sao Paulo'
    }
  })

  // const getProperty = function (object, getter, property) {
  //   // Use getter method if present; otherwise, get the property directly.
  //   if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  // }

  // const setProperty = function (object, setter, property, value) {
  //   // Use setter method if present; otherwise, set the property directly.
  //   if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  // }

  describe('IssuedDocument', function () {
    it('should create an instance of IssuedDocument', function () {
      expect(instance).to.be.a(fattureInCloudSdk.IssuedDocument)
    })

    it('should have the property id (base name: "id")', function () {
      expect(typeof instance.id).to.be('number')
    })

    it('should have the property entity (base name: "entity")', function () {
      expect(typeof instance.entity).to.be('object')
    })

    it('should have the property type (base name: "type")', function () {
      expect(typeof instance.type).to.be('string')
    })

    it('should have the property number (base name: "number")', function () {
      expect(typeof instance.number).to.be('number')
    })

    it('should have the property numeration (base name: "numeration")', function () {
      expect(typeof instance.numeration).to.be('string')
    })

    it('should have the property date (base name: "date")', function () {
      expect(typeof instance.date).to.be('string')
    })

    it('should have the property currency (base name: "currency")', function () {
      expect(typeof instance.currency).to.be('object')
    })

    it('should have the property language (base name: "language")', function () {
      expect(typeof instance.language).to.be('object')
    })

    it('should have the property subject (base name: "subject")', function () {
      expect(typeof instance.subject).to.be('string')
    })

    it('should have the property visibleSubject (base name: "visible_subject")', function () {
      expect(typeof instance.visible_subject).to.be('string')
    })

    it('should have the property rcCenter (base name: "rc_center")', function () {
      expect(typeof instance.rc_center).to.be('string')
    })

    it('should have the property notes (base name: "notes")', function () {
      expect(typeof instance.notes).to.be('string')
    })

    it('should have the property rivalsa (base name: "rivalsa")', function () {
      expect(typeof instance.rivalsa).to.be('number')
    })

    it('should have the property cassa (base name: "cassa")', function () {
      expect(typeof instance.cassa).to.be('number')
    })

    it('should have the property withholdingTax (base name: "withholding_tax")', function () {
      expect(typeof instance.withholding_tax).to.be('number')
    })

    it('should have the property withholdingTaxTaxable (base name: "withholding_tax_taxable")', function () {
      expect(typeof instance.withholding_tax_taxable).to.be('number')
    })

    it('should have the property otherWithholdingTax (base name: "other_withholding_tax")', function () {
      expect(typeof instance.other_withholding_tax).to.be('number')
    })

    it('should have the property stampDuty (base name: "stamp_duty")', function () {
      expect(typeof instance.stamp_duty).to.be('number')
    })

    it('should have the property paymentMethod (base name: "payment_method")', function () {
      expect(typeof instance.payment_method).to.be('object')
    })

    it('should have the property useSplitPayment (base name: "use_split_payment")', function () {
      expect(typeof instance.use_split_payment).to.be('boolean')
    })

    it('should have the property useGrossPrices (base name: "use_gross_prices")', function () {
      expect(typeof instance.use_gross_prices).to.be('boolean')
    })

    it('should have the property eInvoice (base name: "e_invoice")', function () {
      expect(typeof instance.e_invoice).to.be('boolean')
    })

    it('should have the property eiData (base name: "ei_data")', function () {
      expect(typeof instance.ei_data).to.be('object')
    })

    it('should have the property itemsList (base name: "items_list")', function () {
      expect(typeof instance.items_list).to.be('object')
    })

    it('should have the property paymentsList (base name: "payments_list")', function () {
      expect(typeof instance.payments_list).to.be('object')
    })

    it('should have the property template (base name: "template")', function () {
      expect(typeof instance.template).to.be('object')
    })

    it('should have the property deliveryNoteTemplate (base name: "delivery_note_template")', function () {
      expect(typeof instance.delivery_note_template).to.be('object')
    })

    it('should have the property accInvTemplate (base name: "acc_inv_template")', function () {
      expect(typeof instance.acc_inv_template).to.be('object')
    })

    it('should have the property hMargins (base name: "h_margins")', function () {
      expect(typeof instance.h_margins).to.be('number')
    })

    it('should have the property showPayments (base name: "show_payments")', function () {
      expect(typeof instance.show_payments).to.be('boolean')
    })

    it('should have the property showPaymentMethod (base name: "show_payment_method")', function () {
      expect(typeof instance.show_payment_method).to.be('boolean')
    })

    it('should have the property showTotals (base name: "show_totals")', function () {
      expect(typeof instance.show_totals).to.be('string')
    })

    it('should have the property vMargins (base name: "v_margins")', function () {
      expect(typeof instance.v_margins).to.be('number')
    })

    it('should have the property showNotificationButton (base name: "show_notification_button")', function () {
      expect(typeof instance.show_notification_button).to.be('boolean')
    })

    it('should have the property deliveryNote (base name: "delivery_note")', function () {
      expect(typeof instance.delivery_note).to.be('boolean')
    })

    it('should have the property accompanyingInvoice (base name: "accompanying_invoice")', function () {
      expect(typeof instance.accompanying_invoice).to.be('boolean')
    })

    it('should have the property dnNumber (base name: "dn_number")', function () {
      expect(typeof instance.dn_number).to.be('number')
    })

    it('should have the property dnDate (base name: "dn_date")', function () {
      expect(typeof instance.dn_date).to.be('string')
    })

    it('should have the property dnAiPackagesNumber (base name: "dn_ai_packages_number")', function () {
      expect(typeof instance.dn_ai_packages_number).to.be('number')
    })

    it('should have the property dnAiWeight (base name: "dn_ai_weight")', function () {
      expect(typeof instance.dn_ai_weight).to.be('number')
    })

    it('should have the property dnAiCausal (base name: "dn_ai_causal")', function () {
      expect(typeof instance.dn_ai_causal).to.be('string')
    })

    it('should have the property dnAiDestination (base name: "dn_ai_destination")', function () {
      expect(typeof instance.dn_ai_destination).to.be('string')
    })

    it('should have the property dnAiTransporter (base name: "dn_ai_transporter")', function () {
      expect(typeof instance.dn_ai_transporter).to.be('string')
    })

    it('should have the property dnAiNotes (base name: "dn_ai_notes")', function () {
      expect(typeof instance.dn_ai_notes).to.be('string')
    })

    it('should have the property refersTo (base name: "refers_to")', function () {
      expect(typeof instance.refers_to).to.be('object')
    })

    it('should have the property isMarked (base name: "is_marked")', function () {
      expect(typeof instance.is_marked).to.be('boolean')
    })

    it('should have the property amountNet (base name: "amount_net")', function () {
      expect(typeof instance.amount_net).to.be('number')
    })

    it('should have the property amountVat (base name: "amount_vat")', function () {
      expect(typeof instance.amount_vat).to.be('number')
    })

    it('should have the property amountGross (base name: "amount_gross")', function () {
      expect(typeof instance.amount_gross).to.be('number')
    })

    it('should have the property amountRivalsa (base name: "amount_rivalsa")', function () {
      expect(typeof instance.amount_rivalsa).to.be('number')
    })

    it('should have the property amountCassa (base name: "amount_cassa")', function () {
      expect(typeof instance.amount_cassa).to.be('number')
    })

    it('should have the property amountWithholdingTax (base name: "amount_withholding_tax")', function () {
      expect(typeof instance.amount_withholding_tax).to.be('number')
    })

    it('should have the property amountOtherWithholdingTax (base name: "amount_other_withholding_tax")', function () {
      expect(typeof instance.amount_other_withholding_tax).to.be('number')
    })

    it('should have the property extraData (base name: "extra_data")', function () {
      expect(typeof instance.extra_data).to.be('object')
    })

    it('should have the property seenDate (base name: "seen_date")', function () {
      expect(typeof instance.seen_date).to.be('string')
    })

    it('should have the property nextDueDate (base name: "next_due_date")', function () {
      expect(typeof instance.next_due_date).to.be('string')
    })

    it('should have the property url (base name: "url")', function () {
      expect(typeof instance.url).to.be('string')
    })

    it('should have the property attachmentUrl (base name: "attachment_url")', function () {
      expect(typeof instance.attachment_url).to.be('string')
    })

    it('should have the property attachmentToken (base name: "attachment_token")', function () {
      expect(typeof instance.attachment_token).to.be('string')
    })

    it('should have the property eiRaw (base name: "ei_raw")', function () {
      expect(typeof instance.ei_raw).to.be('object')
    })

    it('should have the property showTspayButton (base name: "show_tspay_button")', function () {
      expect(typeof instance.show_tspay_button).to.be('boolean')
    })

    it('should have the property year (base name: "year")', function () {
      expect(typeof instance.year).to.be('number')
    })

    it('should have the property amountRivalsaTaxable (base name: "amount_rivalsa_taxable")', function () {
      expect(typeof instance.amount_rivalsa_taxable).to.be('number')
    })

    it('should have the property amountGlobalCassaTaxable (base name: "amount_global_cassa_taxable")', function () {
      expect(typeof instance.amount_global_cassa_taxable).to.be('number')
    })

    it('should have the property amountCassaTaxable (base name: "amount_cassa_taxable")', function () {
      expect(typeof instance.amount_cassa_taxable).to.be('number')
    })

    it('should have the property amountCassa2 (base name: "amount_cassa2")', function () {
      expect(typeof instance.amount_cassa2).to.be('number')
    })

    it('should have the property amountCassa2Taxable (base name: "amount_cassa2_taxable")', function () {
      expect(typeof instance.amount_cassa2_taxable).to.be('number')
    })

    it('should have the property amountWithholdingTaxTaxable (base name: "amount_withholding_tax_taxable")', function () {
      expect(typeof instance.amount_withholding_tax_taxable).to.be('number')
    })

    it('should have the property amountEnasarcoTaxable (base name: "amount_enasarco_taxable")', function () {
      expect(typeof instance.amount_enasarco_taxable).to.be('number')
    })

    it('should have the property amountOtherWithholdingTaxTaxable (base name: "amount_other_withholding_tax_taxable")', function () {
      expect(typeof instance.amount_other_withholding_tax_taxable).to.be('number')
    })

    it('should have the property eiCassaType (base name: "ei_cassa_type")', function () {
      expect(typeof instance.ei_cassa_type).to.be('string')
    })

    it('should have the property eiCassa2Type (base name: "ei_cassa2_type")', function () {
      expect(typeof instance.ei_cassa2_type).to.be('number')
    })

    it('should have the property eiWithholdingTaxCausal (base name: "ei_withholding_tax_causal")', function () {
      expect(typeof instance.ei_withholding_tax_causal).to.be('string')
    })

    it('should have the property eiOtherWithholdingTaxType (base name: "ei_other_withholding_tax_type")', function () {
      expect(typeof instance.ei_other_withholding_tax_type).to.be('string')
    })

    it('should have the property eiOtherWithholdingTaxCausal (base name: "ei_other_withholding_tax_causal")', function () {
      expect(typeof instance.ei_other_withholding_tax_causal).to.be('string')
    })

    it('should have the property amountDueDiscount (base name: "amount_due_discount")', function () {
      expect(typeof instance.amount_due_discount).to.be('number')
    })
  })
}))
