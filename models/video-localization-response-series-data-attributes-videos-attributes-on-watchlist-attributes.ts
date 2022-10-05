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
import { VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRole } from './video-localization-response-series-data-attributes-videos-attributes-on-watchlist-attributes-role';
/**
 * 
 * @export
 * @interface VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
 */
export interface VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes {
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRole}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    role?: VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    watchlist?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesUsers;
    /**
     * 
     * @type {boolean}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    admin?: boolean;
    /**
     * 
     * @type {ContributorListResponseAttributesImage}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    image?: ContributorListResponseAttributesImage;
    /**
     * 
     * @type {Date}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    createdBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole}
     * @memberof VideoLocalizationResponseSeriesDataAttributesVideosAttributesOnWatchlistAttributes
     */
    updatedBy?: AboutLocalizationResponseCreatedByDataAttributesRolesAttributesPermissionsAttributesRole;
}
