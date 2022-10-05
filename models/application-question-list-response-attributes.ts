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
 * @interface ApplicationQuestionListResponseAttributes
 */
export interface ApplicationQuestionListResponseAttributes {
    /**
     * 
     * @type {string}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    description?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    items?: Array<any>;
    /**
     * 
     * @type {ApplicationQuestionListResponseAttributesField}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    field?: ApplicationQuestionListResponseAttributesField;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationQuestionListResponseAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
