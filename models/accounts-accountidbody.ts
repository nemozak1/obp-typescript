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

import { Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings } from './obpv310managementbanks-bankidaccounts-accountidaccount-routings';
 /**
 * 
 *
 * @export
 * @interface AccountsACCOUNTIDBody
 */
export interface AccountsACCOUNTIDBody {

    /**
     * @type {string}
     * @memberof AccountsACCOUNTIDBody
     * @example Label
     */
    label: string;

    /**
     * @type {string}
     * @memberof AccountsACCOUNTIDBody
     * @example CURRENT
     */
    type: string;

    /**
     * @type {string}
     * @memberof AccountsACCOUNTIDBody
     * @example 1234
     */
    branch_id: string;

    /**
     * @type {Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>}
     * @memberof AccountsACCOUNTIDBody
     */
    account_routings: Array<Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings>;
}
