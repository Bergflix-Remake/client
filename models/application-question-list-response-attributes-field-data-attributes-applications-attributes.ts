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
 * @interface ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
 */
export interface ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes {
    /**
     * 
     * @type {string}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    identifier?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    completed?: boolean;
    /**
     * 
     * @type {any}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    response?: any;
    /**
     * 
     * @type {string}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    name?: string;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    field?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedBy}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedBy;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof ApplicationQuestionListResponseAttributesFieldDataAttributesApplicationsAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
