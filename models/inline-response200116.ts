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

import { InlineResponse200105JsonSchema } from './inline-response200105-json-schema';
 /**
 * 
 *
 * @export
 * @interface InlineResponse200116
 */
export interface InlineResponse200116 {

    /**
     * @type {string}
     * @memberof InlineResponse200116
     * @example OBPv4.0.0-createXxx
     */
    operation_id: string;

    /**
     * @type {InlineResponse200105JsonSchema}
     * @memberof InlineResponse200116
     */
    json_schema: InlineResponse200105JsonSchema;
}
