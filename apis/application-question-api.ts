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
import { ApplicationQuestionListResponse } from '../models';
import { ApplicationQuestionRequest } from '../models';
import { ApplicationQuestionResponse } from '../models';
/**
 * ApplicationQuestionApi - axios parameter creator
 * @export
 */
export const ApplicationQuestionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteapplicationQuestionsid: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteapplicationQuestionsid.');
            }
            const localVarPath = `/application-questions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        getapplicationQuestions: async (sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/application-questions`;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getapplicationQuestionsid: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getapplicationQuestionsid.');
            }
            const localVarPath = `/application-questions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {ApplicationQuestionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postapplicationQuestions: async (body: ApplicationQuestionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postapplicationQuestions.');
            }
            const localVarPath = `/application-questions`;
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
         * @param {ApplicationQuestionRequest} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putapplicationQuestionsid: async (body: ApplicationQuestionRequest, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putapplicationQuestionsid.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling putapplicationQuestionsid.');
            }
            const localVarPath = `/application-questions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
 * ApplicationQuestionApi - functional programming interface
 * @export
 */
export const ApplicationQuestionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteapplicationQuestionsid(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await ApplicationQuestionApiAxiosParamCreator(configuration).deleteapplicationQuestionsid(id, options);
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
        async getapplicationQuestions(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApplicationQuestionListResponse>>> {
            const localVarAxiosArgs = await ApplicationQuestionApiAxiosParamCreator(configuration).getapplicationQuestions(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getapplicationQuestionsid(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApplicationQuestionResponse>>> {
            const localVarAxiosArgs = await ApplicationQuestionApiAxiosParamCreator(configuration).getapplicationQuestionsid(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ApplicationQuestionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postapplicationQuestions(body: ApplicationQuestionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApplicationQuestionResponse>>> {
            const localVarAxiosArgs = await ApplicationQuestionApiAxiosParamCreator(configuration).postapplicationQuestions(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ApplicationQuestionRequest} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putapplicationQuestionsid(body: ApplicationQuestionRequest, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApplicationQuestionResponse>>> {
            const localVarAxiosArgs = await ApplicationQuestionApiAxiosParamCreator(configuration).putapplicationQuestionsid(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ApplicationQuestionApi - factory interface
 * @export
 */
export const ApplicationQuestionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteapplicationQuestionsid(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return ApplicationQuestionApiFp(configuration).deleteapplicationQuestionsid(id, options).then((request) => request(axios, basePath));
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
        async getapplicationQuestions(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ApplicationQuestionListResponse>> {
            return ApplicationQuestionApiFp(configuration).getapplicationQuestions(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getapplicationQuestionsid(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ApplicationQuestionResponse>> {
            return ApplicationQuestionApiFp(configuration).getapplicationQuestionsid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ApplicationQuestionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postapplicationQuestions(body: ApplicationQuestionRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<ApplicationQuestionResponse>> {
            return ApplicationQuestionApiFp(configuration).postapplicationQuestions(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ApplicationQuestionRequest} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putapplicationQuestionsid(body: ApplicationQuestionRequest, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ApplicationQuestionResponse>> {
            return ApplicationQuestionApiFp(configuration).putapplicationQuestionsid(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApplicationQuestionApi - object-oriented interface
 * @export
 * @class ApplicationQuestionApi
 * @extends {BaseAPI}
 */
export class ApplicationQuestionApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationQuestionApi
     */
    public async deleteapplicationQuestionsid(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return ApplicationQuestionApiFp(this.configuration).deleteapplicationQuestionsid(id, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof ApplicationQuestionApi
     */
    public async getapplicationQuestions(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ApplicationQuestionListResponse>> {
        return ApplicationQuestionApiFp(this.configuration).getapplicationQuestions(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationQuestionApi
     */
    public async getapplicationQuestionsid(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ApplicationQuestionResponse>> {
        return ApplicationQuestionApiFp(this.configuration).getapplicationQuestionsid(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ApplicationQuestionRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationQuestionApi
     */
    public async postapplicationQuestions(body: ApplicationQuestionRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<ApplicationQuestionResponse>> {
        return ApplicationQuestionApiFp(this.configuration).postapplicationQuestions(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ApplicationQuestionRequest} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationQuestionApi
     */
    public async putapplicationQuestionsid(body: ApplicationQuestionRequest, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ApplicationQuestionResponse>> {
        return ApplicationQuestionApiFp(this.configuration).putapplicationQuestionsid(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}