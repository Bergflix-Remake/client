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
import { HomepageListResponse } from '../models';
import { HomepageLocalizationRequest } from '../models';
import { HomepageLocalizationResponse } from '../models';
import { HomepageRequest } from '../models';
import { HomepageResponse } from '../models';
/**
 * HomepageApi - axios parameter creator
 * @export
 */
export const HomepageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletehomepage: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/homepage`;
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
        gethomepage: async (sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/homepage`;
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
         * @param {HomepageLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        posthomepagelocalizations: async (body: HomepageLocalizationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling posthomepagelocalizations.');
            }
            const localVarPath = `/homepage/localizations`;
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
         * @param {HomepageRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        puthomepage: async (body: HomepageRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling puthomepage.');
            }
            const localVarPath = `/homepage`;
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
 * HomepageApi - functional programming interface
 * @export
 */
export const HomepageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletehomepage(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await HomepageApiAxiosParamCreator(configuration).deletehomepage(options);
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
        async gethomepage(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HomepageListResponse>>> {
            const localVarAxiosArgs = await HomepageApiAxiosParamCreator(configuration).gethomepage(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {HomepageLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async posthomepagelocalizations(body: HomepageLocalizationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HomepageLocalizationResponse>>> {
            const localVarAxiosArgs = await HomepageApiAxiosParamCreator(configuration).posthomepagelocalizations(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {HomepageRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async puthomepage(body: HomepageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HomepageResponse>>> {
            const localVarAxiosArgs = await HomepageApiAxiosParamCreator(configuration).puthomepage(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HomepageApi - factory interface
 * @export
 */
export const HomepageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletehomepage(options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return HomepageApiFp(configuration).deletehomepage(options).then((request) => request(axios, basePath));
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
        async gethomepage(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<HomepageListResponse>> {
            return HomepageApiFp(configuration).gethomepage(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {HomepageLocalizationRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async posthomepagelocalizations(body: HomepageLocalizationRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<HomepageLocalizationResponse>> {
            return HomepageApiFp(configuration).posthomepagelocalizations(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {HomepageRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async puthomepage(body: HomepageRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<HomepageResponse>> {
            return HomepageApiFp(configuration).puthomepage(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HomepageApi - object-oriented interface
 * @export
 * @class HomepageApi
 * @extends {BaseAPI}
 */
export class HomepageApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomepageApi
     */
    public async deletehomepage(options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return HomepageApiFp(this.configuration).deletehomepage(options).then((request) => request(this.axios, this.basePath));
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
     * @memberof HomepageApi
     */
    public async gethomepage(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<HomepageListResponse>> {
        return HomepageApiFp(this.configuration).gethomepage(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {HomepageLocalizationRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomepageApi
     */
    public async posthomepagelocalizations(body: HomepageLocalizationRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<HomepageLocalizationResponse>> {
        return HomepageApiFp(this.configuration).posthomepagelocalizations(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {HomepageRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomepageApi
     */
    public async puthomepage(body: HomepageRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<HomepageResponse>> {
        return HomepageApiFp(this.configuration).puthomepage(body, options).then((request) => request(this.axios, this.basePath));
    }
}
