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
import { ContributorListResponseAttributesImage } from './contributor-list-response-attributes-image';
import { UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlist } from './users-permissions-role-list-response-attributes-permissions-attributes-role-data-attributes-users-attributes-watchlist';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
 */
export interface UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    role?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlist}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    watchlist?: UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlist;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    admin?: boolean;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    image?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
