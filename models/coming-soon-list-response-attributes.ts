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
 * @interface ComingSoonListResponseAttributes
 */
export interface ComingSoonListResponseAttributes {
    /**
     * 
     * @type {string}
     * @memberof ComingSoonListResponseAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ComingSoonListResponseAttributes
     */
    text?: string;
    /**
     * 
     * @type {Date}
     * @memberof ComingSoonListResponseAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ComingSoonListResponseAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ComingSoonListResponseAttributes
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedBy}
     * @memberof ComingSoonListResponseAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedBy;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ComingSoonListResponseAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Array<any>}
     * @memberof ComingSoonListResponseAttributes
     */
    localizations?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof ComingSoonListResponseAttributes
     */
    locale?: string;
}
