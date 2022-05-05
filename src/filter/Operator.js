/**
 * The Operator filter module.
 * @module filter/Operator
 */
export default class Operator {
    /**
     * Equal operator.
     * @member {String} EQ
     */
    static EQ = '='

    /**
     * Greater Than operator.
     * @member {String} GT
     */
    static GT = '>'

    /**
     * Greater Than or Equal operator.
     * @member {String} GTE
     */
    static GTE = '>='

    /**
     * Less Than operator.
     * @member {String} LT
     */
    static LT = '<'

    /**
     * Less Than or Equal operator.
     * @member {String} LTE
     */
    static LTE = '<='

    /**
     * Not Equal operator.
     * @member {String} NEQ
     */
    static NEQ = '<>'

    /**
     * Is operator.
     * @member {String} IS
     */
    static IS = 'is'

    /**
     * Is Not operator.
     * @member {String} IS_NOT
     */
    static IS_NOT = 'is not'

    /**
     * Like operator.
     * @member {String} GTE
     */
    static LIKE = 'like'

    /**
     * Contains operator.
     * @member {String} CONTAINS
     */
    static CONTAINS = 'contains'

    /**
     * Starts With operator.
     * @member {String} STARTS_WITH
     */
    static STARTS_WITH = 'starts with'

    /**
     * Ends With operator.
     * @member {String} ENDS_WITH
     */
    static ENDS_WITH = 'ends with'

}