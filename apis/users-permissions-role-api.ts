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
import { UsersPermissionsRoleListResponse } from '../models';
import { UsersPermissionsRoleRequest } from '../models';
import { UsersPermissionsRoleResponse } from '../models';
/**
 * UsersPermissionsRoleApi - axios parameter creator
 * @export
 */
export const UsersPermissionsRoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteusersPermissionsrolesrole: async (role: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'role' is not null or undefined
            if (role === null || role === undefined) {
                throw new RequiredError('role','Required parameter role was null or undefined when calling deleteusersPermissionsrolesrole.');
            }
            const localVarPath = `/users-permissions/roles/{role}`
                .replace(`{${"role"}}`, encodeURIComponent(String(role)));
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
        getusersPermissionsroles: async (sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users-permissions/roles`;
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
        getusersPermissionsrolesid: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getusersPermissionsrolesid.');
            }
            const localVarPath = `/users-permissions/roles/{id}`
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
         * @param {UsersPermissionsRoleRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postusersPermissionsroles: async (body: UsersPermissionsRoleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postusersPermissionsroles.');
            }
            const localVarPath = `/users-permissions/roles`;
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
         * @param {UsersPermissionsRoleRequest} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putusersPermissionsrolesrole: async (body: UsersPermissionsRoleRequest, role: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putusersPermissionsrolesrole.');
            }
            // verify required parameter 'role' is not null or undefined
            if (role === null || role === undefined) {
                throw new RequiredError('role','Required parameter role was null or undefined when calling putusersPermissionsrolesrole.');
            }
            const localVarPath = `/users-permissions/roles/{role}`
                .replace(`{${"role"}}`, encodeURIComponent(String(role)));
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
 * UsersPermissionsRoleApi - functional programming interface
 * @export
 */
export const UsersPermissionsRoleApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteusersPermissionsrolesrole(role: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).deleteusersPermissionsrolesrole(role, options);
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
        async getusersPermissionsroles(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersPermissionsRoleListResponse>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).getusersPermissionsroles(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options);
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
        async getusersPermissionsrolesid(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersPermissionsRoleResponse>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).getusersPermissionsrolesid(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UsersPermissionsRoleRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postusersPermissionsroles(body: UsersPermissionsRoleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersPermissionsRoleResponse>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).postusersPermissionsroles(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UsersPermissionsRoleRequest} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putusersPermissionsrolesrole(body: UsersPermissionsRoleRequest, role: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersPermissionsRoleResponse>>> {
            const localVarAxiosArgs = await UsersPermissionsRoleApiAxiosParamCreator(configuration).putusersPermissionsrolesrole(body, role, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersPermissionsRoleApi - factory interface
 * @export
 */
export const UsersPermissionsRoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteusersPermissionsrolesrole(role: string, options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return UsersPermissionsRoleApiFp(configuration).deleteusersPermissionsrolesrole(role, options).then((request) => request(axios, basePath));
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
        async getusersPermissionsroles(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<UsersPermissionsRoleListResponse>> {
            return UsersPermissionsRoleApiFp(configuration).getusersPermissionsroles(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getusersPermissionsrolesid(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
            return UsersPermissionsRoleApiFp(configuration).getusersPermissionsrolesid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersPermissionsRoleRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postusersPermissionsroles(body: UsersPermissionsRoleRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
            return UsersPermissionsRoleApiFp(configuration).postusersPermissionsroles(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersPermissionsRoleRequest} body 
         * @param {string} role 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putusersPermissionsrolesrole(body: UsersPermissionsRoleRequest, role: string, options?: AxiosRequestConfig): Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
            return UsersPermissionsRoleApiFp(configuration).putusersPermissionsrolesrole(body, role, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersPermissionsRoleApi - object-oriented interface
 * @export
 * @class UsersPermissionsRoleApi
 * @extends {BaseAPI}
 */
export class UsersPermissionsRoleApi extends BaseAPI {
    /**
     * 
     * @param {string} role 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public async deleteusersPermissionsrolesrole(role: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return UsersPermissionsRoleApiFp(this.configuration).deleteusersPermissionsrolesrole(role, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof UsersPermissionsRoleApi
     */
    public async getusersPermissionsroles(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersPermissionsRoleListResponse>> {
        return UsersPermissionsRoleApiFp(this.configuration).getusersPermissionsroles(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public async getusersPermissionsrolesid(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
        return UsersPermissionsRoleApiFp(this.configuration).getusersPermissionsrolesid(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UsersPermissionsRoleRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public async postusersPermissionsroles(body: UsersPermissionsRoleRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
        return UsersPermissionsRoleApiFp(this.configuration).postusersPermissionsroles(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UsersPermissionsRoleRequest} body 
     * @param {string} role 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsRoleApi
     */
    public async putusersPermissionsrolesrole(body: UsersPermissionsRoleRequest, role: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersPermissionsRoleResponse>> {
        return UsersPermissionsRoleApiFp(this.configuration).putusersPermissionsrolesrole(body, role, options).then((request) => request(this.axios, this.basePath));
    }
}
