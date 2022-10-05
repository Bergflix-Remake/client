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
import { SerieLocalizationRequestContributors } from './serie-localization-request-contributors';
/**
 * 
 * @export
 * @interface SerieLocalizationRequest
 */
export interface SerieLocalizationRequest {
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationRequest
     */
    title: string;
    /**
     * 
     * @type {number | string}
     * @memberof SerieLocalizationRequest
     */
    titleImage?: number | string;
    /**
     * 
     * @type {number | string}
     * @memberof SerieLocalizationRequest
     */
    backgroundImage?: number | string;
    /**
     * 
     * @type {number}
     * @memberof SerieLocalizationRequest
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationRequest
     */
    description: string;
    /**
     * 
     * @type {Array<number | string>}
     * @memberof SerieLocalizationRequest
     */
    videos?: Array<number | string>;
    /**
     * 
     * @type {number | string}
     * @memberof SerieLocalizationRequest
     */
    thumbnail: number | string;
    /**
     * 
     * @type {boolean}
     * @memberof SerieLocalizationRequest
     */
    original?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationRequest
     */
    year: string;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationRequest
     */
    genre: SerieLocalizationRequestGenreEnum;
    /**
     * 
     * @type {number}
     * @memberof SerieLocalizationRequest
     */
    age: number;
    /**
     * 
     * @type {Array<SerieLocalizationRequestContributors>}
     * @memberof SerieLocalizationRequest
     */
    contributors?: Array<SerieLocalizationRequestContributors>;
    /**
     * 
     * @type {string}
     * @memberof SerieLocalizationRequest
     */
    locale: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SerieLocalizationRequestGenreEnum {
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
