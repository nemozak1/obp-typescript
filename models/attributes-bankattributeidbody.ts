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
 * @interface AttributesBANKATTRIBUTEIDBody
 */
export interface AttributesBANKATTRIBUTEIDBody {

    /**
     * @type {string}
     * @memberof AttributesBANKATTRIBUTEIDBody
     * @example TAX_ID
     */
    name: string;

    /**
     * @type {string}
     * @memberof AttributesBANKATTRIBUTEIDBody
     * @example INTEGER
     */
    type: string;

    /**
     * @type {string}
     * @memberof AttributesBANKATTRIBUTEIDBody
     * @example 12345678
     */
    value: string;

    /**
     * @type {boolean}
     * @memberof AttributesBANKATTRIBUTEIDBody
     * @example true
     */
    is_active: boolean;
}
