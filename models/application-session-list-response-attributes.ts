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
import { ApplicationQuestionListResponseAttributesField } from './application-question-list-response-attributes-field';
/**
 * 
 * @export
 * @interface ApplicationSessionListResponseAttributes
 */
export interface ApplicationSessionListResponseAttributes {
    /**
     * 
     * @type {string}
     * @memberof ApplicationSessionListResponseAttributes
     */
    identifier?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationSessionListResponseAttributes
     */
    completed?: boolean;
    /**
     * 
     * @type {any}
     * @memberof ApplicationSessionListResponseAttributes
     */
    response?: any;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSessionListResponseAttributes
     */
    name?: string;
    /**
     * 
     * @type {ApplicationQuestionListResponseAttributesField}
     * @memberof ApplicationSessionListResponseAttributes
     */
    field?: ApplicationQuestionListResponseAttributesField;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationSessionListResponseAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationSessionListResponseAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationSessionListResponseAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationSessionListResponseAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
