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

import { InlineResponse201DetailsToSandboxTan } from './inline-response201-details-to-sandbox-tan';
import { InlineResponse201DetailsToSepa } from './inline-response201-details-to-sepa';
import { InlineResponse201DetailsToSepaCreditTransfers } from './inline-response201-details-to-sepa-credit-transfers';
import { InlineResponse201DetailsToSimple } from './inline-response201-details-to-simple';
import { InlineResponse201DetailsToTransferToAccount } from './inline-response201-details-to-transfer-to-account';
import { InlineResponse201DetailsToTransferToAtm } from './inline-response201-details-to-transfer-to-atm';
import { InlineResponse201DetailsToTransferToPhone } from './inline-response201-details-to-transfer-to-phone';
import { InlineResponse201DetailsValue } from './inline-response201-details-value';
import { Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo } from './obpv400banks-bankidaccounts-accountidviewidtransactionrequesttypes-counterpartytransactionrequests-to';
 /**
 * 
 *
 * @export
 * @interface InlineResponse201Details
 */
export interface InlineResponse201Details {

    /**
     * @type {InlineResponse201DetailsToSandboxTan}
     * @memberof InlineResponse201Details
     */
    to_sandbox_tan: InlineResponse201DetailsToSandboxTan;

    /**
     * @type {InlineResponse201DetailsToSepa}
     * @memberof InlineResponse201Details
     */
    to_sepa: InlineResponse201DetailsToSepa;

    /**
     * @type {Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo}
     * @memberof InlineResponse201Details
     */
    to_counterparty: Obpv400banksBANKIDaccountsACCOUNTIDVIEWIDtransactionrequesttypesCOUNTERPARTYtransactionrequestsTo;

    /**
     * @type {InlineResponse201DetailsToSimple}
     * @memberof InlineResponse201Details
     */
    to_simple: InlineResponse201DetailsToSimple;

    /**
     * @type {InlineResponse201DetailsToTransferToPhone}
     * @memberof InlineResponse201Details
     */
    to_transfer_to_phone: InlineResponse201DetailsToTransferToPhone;

    /**
     * @type {InlineResponse201DetailsToTransferToAtm}
     * @memberof InlineResponse201Details
     */
    to_transfer_to_atm: InlineResponse201DetailsToTransferToAtm;

    /**
     * @type {InlineResponse201DetailsToTransferToAccount}
     * @memberof InlineResponse201Details
     */
    to_transfer_to_account: InlineResponse201DetailsToTransferToAccount;

    /**
     * @type {InlineResponse201DetailsToSepaCreditTransfers}
     * @memberof InlineResponse201Details
     */
    to_sepa_credit_transfers: InlineResponse201DetailsToSepaCreditTransfers;

    /**
     * @type {InlineResponse201DetailsValue}
     * @memberof InlineResponse201Details
     */
    value: InlineResponse201DetailsValue;

    /**
     * @type {string}
     * @memberof InlineResponse201Details
     * @example Description of the object. Maximum length is 2000. It can be any characters here.
     */
    description: string;
}
