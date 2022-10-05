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
import { AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers } from './about-localization-response-created-by-data-attributes-roles-attributes-users';
import { ContributorListResponseAttributesImage } from './contributor-list-response-attributes-image';
import { UsersPermissionsPermissionListResponseAttributesRole } from './users-permissions-permission-list-response-attributes-role';
/**
 * 
 * @export
 * @interface UsersPermissionsUserListResponseAttributes
 */
export interface UsersPermissionsUserListResponseAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {UsersPermissionsPermissionListResponseAttributesRole}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    role?: UsersPermissionsPermissionListResponseAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    watchlist?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    admin?: boolean;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    image?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsUserListResponseAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}