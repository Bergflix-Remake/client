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
import { FeaturedListResponseAttributesVideoDataAttributesContributors } from './featured-list-response-attributes-video-data-attributes-contributors';
import { UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributesSeries } from './users-permissions-permission-list-response-attributes-role-data-attributes-users-attributes-watchlist-attributes-series';
/**
 * 
 * @export
 * @interface UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
 */
export interface UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    title?: string;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    titleImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    backgroundImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    youtubeUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    rating?: number;
    /**
     * 
     * @type {UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributesSeries}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    series?: UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributesSeries;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    onWatchlist?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    year?: string;
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    age?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    genre?: UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributesGenreEnum;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    thumbnail?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    original?: boolean;
    /**
     * 
     * @type {Array<FeaturedListResponseAttributesVideoDataAttributesContributors>}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    contributors?: Array<FeaturedListResponseAttributesVideoDataAttributesContributors>;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Array<any>}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    localizations?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    locale?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UsersPermissionsPermissionListResponseAttributesRoleDataAttributesUsersAttributesWatchlistAttributesGenreEnum {
    Action = 'Action',
    Adventure = 'Adventure',
    Animation = 'Animation',
    Comedy = 'Comedy',
    Crime = 'Crime',
    Documentary = 'Documentary',
    Drama = 'Drama',
    Family = 'Family',
    Fantasy = 'Fantasy',
    History = 'History',
    Horror = 'Horror',
    Music = 'Music',
    Mystery = 'Mystery',
    Romance = 'Romance',
    SciFi = 'SciFi',
    Thriller = 'Thriller',
    War = 'War'
}
