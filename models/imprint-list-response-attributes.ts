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
import { AboutLocalizationResponseCreatedBy } from './about-localization-response-created-by';
import { AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole } from './about-localization-response-created-by-data-attributes-roles-attributes-permissions-attributes-role';
/**
 * 
 * @export
 * @interface ImprintListResponseAttributes
 */
export interface ImprintListResponseAttributes {
    /**
     * 
     * @type {string}
     * @memberof ImprintListResponseAttributes
     */
    impressum?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprintListResponseAttributes
     */
    privacy?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprintListResponseAttributes
     */
    terms?: string;
    /**
     * 
     * @type {Date}
     * @memberof ImprintListResponseAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ImprintListResponseAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ImprintListResponseAttributes
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedBy}
     * @memberof ImprintListResponseAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedBy;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ImprintListResponseAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
