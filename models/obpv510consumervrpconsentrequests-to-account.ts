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

import { COUNTERPARTYIDLimitsBody1 } from './counterpartyidlimits-body1';
import { Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings } from './obpv310managementbanks-bankidaccounts-accountidaccount-routings';
import { Obpv500banksBankRoutings } from './obpv500banks-bank-routings';
import { Obpv510consumervrpconsentrequestsFromAccountBranchRouting } from './obpv510consumervrpconsentrequests-from-account-branch-routing';
 /**
 * 
 *
 * @export
 * @interface Obpv510consumervrpconsentrequestsToAccount
 */
export interface Obpv510consumervrpconsentrequestsToAccount {

    /**
     * @type {string}
     * @memberof Obpv510consumervrpconsentrequestsToAccount
     * @example John Smith Ltd.
     */
    counterparty_name: string;

    /**
     * @type {Obpv500banksBankRoutings}
     * @memberof Obpv510consumervrpconsentrequestsToAccount
     */
    bank_routing: Obpv500banksBankRoutings;

    /**
     * @type {Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings}
     * @memberof Obpv510consumervrpconsentrequestsToAccount
     */
    account_routing: Obpv310managementbanksBANKIDaccountsACCOUNTIDAccountRoutings;

    /**
     * @type {Obpv510consumervrpconsentrequestsFromAccountBranchRouting}
     * @memberof Obpv510consumervrpconsentrequestsToAccount
     */
    branch_routing: Obpv510consumervrpconsentrequestsFromAccountBranchRouting;

    /**
     * @type {COUNTERPARTYIDLimitsBody1}
     * @memberof Obpv510consumervrpconsentrequestsToAccount
     */
    limit: COUNTERPARTYIDLimitsBody1;
}
