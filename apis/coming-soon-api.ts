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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ComingSoonListResponse } from '../models';
import { ComingSoonLocalizationRequest } from '../models';
import { ComingSoonLocalizationResponse } from '../models';
import { ComingSoonRequest } from '../models';
import { ComingSoonResponse } from '../models';
/**
 * ComingSoonApi - axios parameter creator
 * @export
 */
export const ComingSoonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletecomingSoon: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/coming-soon`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Retun page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getcomingSoon: async (sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/coming-soon`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (paginationWithCount !== undefined) {
                localVarQueryParameter['pagination[withCount]'] = paginationWithCount;
            }

            if (paginationPage !== undefined) {
                localVarQueryParameter['pagination[page]'] = paginationPage;
            }

            if (paginationPageSize !== undefined) {
                localVarQueryParameter['pagination[pageSize]'] = paginationPageSize;
            }

            if (paginationStart !== undefined) {
                localVarQueryParameter['pagination[start]'] = paginationStart;
            }

            if (paginationLimit !== undefined) {
                localVarQueryParameter['pagination[limit]'] = paginationLimit;
            }

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (populate !== undefined) {
                localVarQueryParameter['populate'] = populate;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ComingSoonLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postcomingSoonlocalizations: async (body: ComingSoonLocalizationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postcomingSoonlocalizations.');
            }
            const localVarPath = `/coming-soon/localizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ComingSoonRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putcomingSoon: async (body: ComingSoonRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putcomingSoon.');
            }
            const localVarPath = `/coming-soon`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ComingSoonApi - functional programming interface
 * @export
 */
export const ComingSoonApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletecomingSoon(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await ComingSoonApiAxiosParamCreator(configuration).deletecomingSoon(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Retun page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getcomingSoon(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ComingSoonListResponse>>> {
            const localVarAxiosArgs = await ComingSoonApiAxiosParamCreator(configuration).getcomingSoon(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ComingSoonLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postcomingSoonlocalizations(body: ComingSoonLocalizationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ComingSoonLocalizationResponse>>> {
            const localVarAxiosArgs = await ComingSoonApiAxiosParamCreator(configuration).postcomingSoonlocalizations(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ComingSoonRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putcomingSoon(body: ComingSoonRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ComingSoonResponse>>> {
            const localVarAxiosArgs = await ComingSoonApiAxiosParamCreator(configuration).putcomingSoon(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ComingSoonApi - factory interface
 * @export
 */
export const ComingSoonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletecomingSoon(options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return ComingSoonApiFp(configuration).deletecomingSoon(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Retun page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getcomingSoon(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ComingSoonListResponse>> {
            return ComingSoonApiFp(configuration).getcomingSoon(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ComingSoonLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postcomingSoonlocalizations(body: ComingSoonLocalizationRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<ComingSoonLocalizationResponse>> {
            return ComingSoonApiFp(configuration).postcomingSoonlocalizations(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ComingSoonRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putcomingSoon(body: ComingSoonRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<ComingSoonResponse>> {
            return ComingSoonApiFp(configuration).putcomingSoon(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ComingSoonApi - object-oriented interface
 * @export
 * @class ComingSoonApi
 * @extends {BaseAPI}
 */
export class ComingSoonApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComingSoonApi
     */
    public async deletecomingSoon(options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return ComingSoonApiFp(this.configuration).deletecomingSoon(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
     * @param {boolean} [paginationWithCount] Retun page/pageSize (default: true)
     * @param {number} [paginationPage] Page number (default: 0)
     * @param {number} [paginationPageSize] Page size (default: 25)
     * @param {number} [paginationStart] Offset value (default: 0)
     * @param {number} [paginationLimit] Number of entities to return (default: 25)
     * @param {string} [fields] Fields to return (ex: title,author)
     * @param {string} [populate] Relations to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComingSoonApi
     */
    public async getcomingSoon(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ComingSoonListResponse>> {
        return ComingSoonApiFp(this.configuration).getcomingSoon(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ComingSoonLocalizationRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComingSoonApi
     */
    public async postcomingSoonlocalizations(body: ComingSoonLocalizationRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<ComingSoonLocalizationResponse>> {
        return ComingSoonApiFp(this.configuration).postcomingSoonlocalizations(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ComingSoonRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComingSoonApi
     */
    public async putcomingSoon(body: ComingSoonRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<ComingSoonResponse>> {
        return ComingSoonApiFp(this.configuration).putcomingSoon(body, options).then((request) => request(this.axios, this.basePath));
    }
}
