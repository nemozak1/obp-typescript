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

import { InlineResponse20044AccountViewsAvailable } from './inline-response20044-account-views-available';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20044Account
 */
export interface InlineResponse20044Account {

    /**
     * @type {string}
     * @memberof InlineResponse20044Account
     * @example 123
     */
    id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20044Account
     * @example OBP
     */
    label: string;

    /**
     * @type {Array<InlineResponse20044AccountViewsAvailable>}
     * @memberof InlineResponse20044Account
     */
    views_available: Array<InlineResponse20044AccountViewsAvailable>;

    /**
     * @type {string}
     * @memberof InlineResponse20044Account
     * @example gh.29.uk
     */
    bank_id: string;
}
