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
import { FeaturedListResponseAttributesVideoDataAttributesSeries } from './featured-list-response-attributes-video-data-attributes-series';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
 */
export interface UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    title?: string;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    titleImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    backgroundImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    youtubeUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    rating?: number;
    /**
     * 
     * @type {FeaturedListResponseAttributesVideoDataAttributesSeries}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    series?: FeaturedListResponseAttributesVideoDataAttributesSeries;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    onWatchlist?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    year?: string;
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    age?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    genre?: UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributesGenreEnum;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    thumbnail?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    original?: boolean;
    /**
     * 
     * @type {Array<FeaturedListResponseAttributesVideoDataAttributesContributors>}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    contributors?: Array<FeaturedListResponseAttributesVideoDataAttributesContributors>;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Array<any>}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    localizations?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributes
     */
    locale?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UsersPermissionsRoleListResponseAttributesPermissionsAttributesRoleDataAttributesUsersAttributesWatchlistAttributesGenreEnum {
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
