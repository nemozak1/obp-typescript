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

import { InlineResponse20045Account } from './inline-response20045-account';
import { InlineResponse20045CardAttributes } from './inline-response20045-card-attributes';
import { Obpv310managementbanksBANKIDcardsCARDIDPinReset } from './obpv310managementbanks-bankidcards-cardidpin-reset';
import { Obpv310managementbanksBANKIDcardsCARDIDReplacement } from './obpv310managementbanks-bankidcards-cardidreplacement';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20045
 */
export interface InlineResponse20045 {

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 36f8a9e6-c2b1-407a-8bd0-421b7119307e 
     */
    card_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example gh.29.uk
     */
    bank_id: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 364435172576215
     */
    card_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example Credit
     */
    card_type: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example SusanSmith
     */
    name_on_card: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1
     */
    issue_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1324234
     */
    serial_number: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1100-01-01T00:00:00Z
     */
    valid_from_date: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1100-01-01T00:00:00Z
     */
    expires_date: string;

    /**
     * @type {boolean}
     * @memberof InlineResponse20045
     * @example true
     */
    enabled: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse20045
     * @example true
     */
    cancelled: boolean;

    /**
     * @type {boolean}
     * @memberof InlineResponse20045
     * @example true
     */
    on_hot_list: boolean;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example technologyString1
     */
    technology: string;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse20045
     */
    networks: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof InlineResponse20045
     */
    allows: Array<string>;

    /**
     * @type {InlineResponse20045Account}
     * @memberof InlineResponse20045
     */
    account: InlineResponse20045Account;

    /**
     * @type {Obpv310managementbanksBANKIDcardsCARDIDReplacement}
     * @memberof InlineResponse20045
     */
    replacement: Obpv310managementbanksBANKIDcardsCARDIDReplacement;

    /**
     * @type {Array<Obpv310managementbanksBANKIDcardsCARDIDPinReset>}
     * @memberof InlineResponse20045
     */
    pin_reset: Array<Obpv310managementbanksBANKIDcardsCARDIDPinReset>;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1100-01-01T00:00:00Z
     */
    collected: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 1100-01-01T00:00:00Z
     */
    posted: string;

    /**
     * @type {string}
     * @memberof InlineResponse20045
     * @example 7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh
     */
    customer_id: string;

    /**
     * @type {Array<InlineResponse20045CardAttributes>}
     * @memberof InlineResponse20045
     */
    card_attributes: Array<InlineResponse20045CardAttributes>;
}
