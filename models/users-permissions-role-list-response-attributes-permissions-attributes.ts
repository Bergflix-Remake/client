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
import { UsersPermissionsRoleListResponseAttributesPermissionsAttributesRole } from './users-permissions-role-list-response-attributes-permissions-attributes-role';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseAttributesPermissionsAttributes
 */
export interface UsersPermissionsRoleListResponseAttributesPermissionsAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    action?: string;
    /**
     * 
     * @type {UsersPermissionsRoleListResponseAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    role?: UsersPermissionsRoleListResponseAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}