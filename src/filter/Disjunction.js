import Expression from "./Expression";
/**
 * The Disjunction filter module.
 * @module filter/Disjunction
 */
export default class Disjunction extends Expression {
    /**
     * The left expression.
     * @member {filter/Expression} left
     */
    left

    /**
     * The right expression.
     * @member {filter/Expression} right
     */
    right

    /**
     * Constructs a new <code>Disjunction</code>.
     * @param {filter/Expression} left The left expression.
     * @param {filter/Expression} right The right expression.
     */
    constructor(left, right) {
        super()
        this.left = left
        this.right = right
    }

    /**
     * Builds the query from the disjunction.
     * @return {String} The query.
     */
    buildQuery() {
        if (this.left == undefined || this.left == null || this.left == '') {
            throw 'cannot build query with an empty left condition'
        }
        if (this.right == undefined || this.right == null || this.right == '') {
            throw 'cannot build query with an empty right condition'
        }
        return `(${this.left} or ${this.right})`
    }

    /**
     * Builds the query from the disjunction.
     * @return {String} The query.
     */
    toString() {
        return this.buildQuery()
    }
}