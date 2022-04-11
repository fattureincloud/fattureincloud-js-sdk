import Expression from "./Expression";
/**
 * The Condition filter module.
 * @module filter/Condition
 */
export default class Condition extends Expression {
    /**
     * The field to compare.
     * @member {Number} field
     */
    field

    /**
     * The operator to use.
     * @member {filter/Operator} operator
     */
    operator

    /**
     * The value to compare.
     * @member {String|Number|Boolean} value
     */
    value

    /**
     * Constructs a new <code>Condition</code>.
     * @param {String} field The field to compare.
     * @param {filter/Operator} operator The operator to use.
     * @param {String|Number|Boolean} value The value to compare.
     */
    constructor(field, operator, value) {
        super()
        this.field = field
        this.operator = operator
        this.value = value
    }

    /**
     * Builds the query from the condition.
     * @return {String} The query.
     */
    buildQuery() {
        if (this.field == undefined || this.field == null || this.field == '') {
            throw 'cannot build query with an empty field'
        }
        if (this.operator == undefined || this.operator == null || this.operator == '') {
            throw 'cannot build query with an empty operator'
        }
        if (this.value == null) {
            return `${this.field} ${this.operator} null`
        }
        if (typeof this.value == 'string') {
            return `${this.field} ${this.operator} '${this.value}'`
        }
        else {
            return `${this.field} ${this.operator} ${this.value}`
        }
    }

    /**
     * Builds the query from the condition.
     * @return {String} The query.
     */
    toString() {
        return this.buildQuery();
    }

}