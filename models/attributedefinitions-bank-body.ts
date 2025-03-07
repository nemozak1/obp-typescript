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
 * @interface AttributedefinitionsBankBody
 */
export interface AttributedefinitionsBankBody {

    /**
     * @type {string}
     * @memberof AttributedefinitionsBankBody
     * @example SPECIAL_TAX_NUMBER
     */
    name: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsBankBody
     * @example Bank
     */
    category: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsBankBody
     * @example STRING
     */
    type: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsBankBody
     * @example description
     */
    description: string;

    /**
     * @type {string}
     * @memberof AttributedefinitionsBankBody
     * @example STRING
     */
    alias: string;

    /**
     * @type {Array<string>}
     * @memberof AttributedefinitionsBankBody
     */
    can_be_seen_on_views: Array<string>;

    /**
     * @type {boolean}
     * @memberof AttributedefinitionsBankBody
     * @example true
     */
    is_active: boolean;
}
