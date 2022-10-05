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
import { UsersPermissionsPermissionResponse } from '../models';
/**
 * UsersPermissionsPermissionApi - axios parameter creator
 * @export
 */
export const UsersPermissionsPermissionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getusersPermissionspermissions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users-permissions/permissions`;
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
    }
};

/**
 * UsersPermissionsPermissionApi - functional programming interface
 * @export
 */
export const UsersPermissionsPermissionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getusersPermissionspermissions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersPermissionsPermissionResponse>>> {
            const localVarAxiosArgs = await UsersPermissionsPermissionApiAxiosParamCreator(configuration).getusersPermissionspermissions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersPermissionsPermissionApi - factory interface
 * @export
 */
export const UsersPermissionsPermissionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getusersPermissionspermissions(options?: AxiosRequestConfig): Promise<AxiosResponse<UsersPermissionsPermissionResponse>> {
            return UsersPermissionsPermissionApiFp(configuration).getusersPermissionspermissions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersPermissionsPermissionApi - object-oriented interface
 * @export
 * @class UsersPermissionsPermissionApi
 * @extends {BaseAPI}
 */
export class UsersPermissionsPermissionApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPermissionsPermissionApi
     */
    public async getusersPermissionspermissions(options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersPermissionsPermissionResponse>> {
        return UsersPermissionsPermissionApiFp(this.configuration).getusersPermissionspermissions(options).then((request) => request(this.axios, this.basePath));
    }
}
