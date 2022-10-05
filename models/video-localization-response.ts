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
import { VideoLocalizationResponseSeries } from './video-localization-response-series';
/**
 * 
 * @export
 * @interface VideoLocalizationResponse
 */
export interface VideoLocalizationResponse {
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    title?: string;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof VideoLocalizationResponse
     */
    titleImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof VideoLocalizationResponse
     */
    backgroundImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    youtubeUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof VideoLocalizationResponse
     */
    rating?: number;
    /**
     * 
     * @type {VideoLocalizationResponseSeries}
     * @memberof VideoLocalizationResponse
     */
    series?: VideoLocalizationResponseSeries;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers}
     * @memberof VideoLocalizationResponse
     */
    onWatchlist?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    year?: string;
    /**
     * 
     * @type {number}
     * @memberof VideoLocalizationResponse
     */
    age?: number;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    genre?: VideoLocalizationResponseGenreEnum;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof VideoLocalizationResponse
     */
    thumbnail?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {boolean}
     * @memberof VideoLocalizationResponse
     */
    original?: boolean;
    /**
     * 
     * @type {Array<FeaturedListResponseAttributesVideoDataAttributesContributors>}
     * @memberof VideoLocalizationResponse
     */
    contributors?: Array<FeaturedListResponseAttributesVideoDataAttributesContributors>;
    /**
     * 
     * @type {Date}
     * @memberof VideoLocalizationResponse
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VideoLocalizationResponse
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VideoLocalizationResponse
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof VideoLocalizationResponse
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof VideoLocalizationResponse
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Array<any>}
     * @memberof VideoLocalizationResponse
     */
    localizations?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponse
     */
    locale?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum VideoLocalizationResponseGenreEnum {
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

