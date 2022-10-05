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
 * @interface SerieRequestData
 */
export interface SerieRequestData {
    /**
     * 
     * @type {string}
     * @memberof SerieRequestData
     */
    title: string;
    /**
     * 
     * @type {number | string}
     * @memberof SerieRequestData
     */
    titleImage?: number | string;
    /**
     * 
     * @type {number | string}
     * @memberof SerieRequestData
     */
    backgroundImage?: number | string;
    /**
     * 
     * @type {number}
     * @memberof SerieRequestData
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof SerieRequestData
     */
    description: string;
    /**
     * 
     * @type {Array<number | string>}
     * @memberof SerieRequestData
     */
    videos?: Array<number | string>;
    /**
     * 
     * @type {number | string}
     * @memberof SerieRequestData
     */
    thumbnail: number | string;
    /**
     * 
     * @type {boolean}
     * @memberof SerieRequestData
     */
    original?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SerieRequestData
     */
    year: string;
    /**
     * 
     * @type {string}
     * @memberof SerieRequestData
     */
    genre: SerieRequestDataGenreEnum;
    /**
     * 
     * @type {number}
     * @memberof SerieRequestData
     */
    age: number;
    /**
     * 
     * @type {Array<SerieLocalizationRequestContributors>}
     * @memberof SerieRequestData
     */
    contributors?: Array<SerieLocalizationRequestContributors>;
    /**
     * 
     * @type {string}
     * @memberof SerieRequestData
     */
    locale?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SerieRequestDataGenreEnum {
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

