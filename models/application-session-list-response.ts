/* tslint:disable */
/* eslint-disable */
/**
 * Bergflix. Api Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@bergflix.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AboutListResponseMeta } from './about-list-response-meta';
import { ApplicationSessionListResponseData } from './application-session-list-response-data';
/**
 * 
 * @export
 * @interface ApplicationSessionListResponse
 */
export interface ApplicationSessionListResponse {
    /**
     * 
     * @type {Array<ApplicationSessionListResponseData>}
     * @memberof ApplicationSessionListResponse
     */
    data?: Array<ApplicationSessionListResponseData>;
    /**
     * 
     * @type {AboutListResponseMeta}
     * @memberof ApplicationSessionListResponse
     */
    meta?: AboutListResponseMeta;
}