/* tslint:disable */
/* eslint-disable */
/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE GmbH. 2011 - 2025. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v5.1.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface InlineResponse20160PayloadToAccountLimit
 */
export interface InlineResponse20160PayloadToAccountLimit {

    /**
     * @type {string}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example EUR
     */
    currency: string;

    /**
     * @type {number}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example 1000
     */
    max_single_amount: number;

    /**
     * @type {number}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example 10000
     */
    max_monthly_amount: number;

    /**
     * @type {number}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example 10
     */
    max_number_of_monthly_transactions: number;

    /**
     * @type {number}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example 12000
     */
    max_yearly_amount: number;

    /**
     * @type {number}
     * @memberof InlineResponse20160PayloadToAccountLimit
     * @example 100
     */
    max_number_of_yearly_transactions: number;
}
