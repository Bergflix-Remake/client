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
import { AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole } from './about-localization-response-created-by-data-attributes-roles-attributes-permissions-attributes-role';
/**
 * 
 * @export
 * @interface AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
 */
export interface AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes {
    /**
     * 
     * @type {string}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    subject?: string;
    /**
     * 
     * @type {any}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    properties?: any;
    /**
     * 
     * @type {any}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    conditions?: any;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    role?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Date}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
