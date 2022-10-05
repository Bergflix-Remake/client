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
import { UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsers } from './users-permissions-permission-list-response-attributes-role-data-attributes-users';
import { VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRoleDataAttributesPermissions } from './video-localization-response-series-data-attributes-videos-attributes-on-watchlist-attributes-role-data-attributes-permissions';
/**
 * 
 * @export
 * @interface UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
 */
export interface UsersPermissionsPermissionListResponseAttributesRoleDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    type?: string;
    /**
     * 
     * @type {VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRoleDataAttributesPermissions}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    permissions?: VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRoleDataAttributesPermissions;
    /**
     * 
     * @type {UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsers}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    users?: UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsers;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}