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
import { FeaturedListResponseAttributesVideoDataAttributesContributors } from './featured-list-response-attributes-video-data-attributes-contributors';
import { SerieLocalizationResponseVideos } from './serie-localization-response-videos';
/**
 * 
 * @export
 * @interface SerieLocalizationResponse
 */
export interface SerieLocalizationResponse {
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    title?: string;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof SerieLocalizationResponse
     */
    titleImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof SerieLocalizationResponse
     */
    backgroundImage?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {number}
     * @memberof SerieLocalizationResponse
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    description?: string;
    /**
     * 
     * @type {SerieLocalizationResponseVideos}
     * @memberof SerieLocalizationResponse
     */
    videos?: SerieLocalizationResponseVideos;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof SerieLocalizationResponse
     */
    thumbnail?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {boolean}
     * @memberof SerieLocalizationResponse
     */
    original?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    year?: string;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    genre?: SerieLocalizationResponseGenreEnum;
    /**
     * 
     * @type {number}
     * @memberof SerieLocalizationResponse
     */
    age?: number;
    /**
     * 
     * @type {Array<FeaturedListResponseAttributesVideoDataAttributesContributors>}
     * @memberof SerieLocalizationResponse
     */
    contributors?: Array<FeaturedListResponseAttributesVideoDataAttributesContributors>;
    /**
     * 
     * @type {Date}
     * @memberof SerieLocalizationResponse
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SerieLocalizationResponse
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SerieLocalizationResponse
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof SerieLocalizationResponse
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof SerieLocalizationResponse
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Array<any>}
     * @memberof SerieLocalizationResponse
     */
    localizations?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationResponse
     */
    locale?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SerieLocalizationResponseGenreEnum {
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

