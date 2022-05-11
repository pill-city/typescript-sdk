/* tslint:disable */
/* eslint-disable */
/**
 * Pill.City
 * API for an one-of-a-kind social network
 *
 * OpenAPI spec version: 0.0.1
 * Contact: feedback@pill.city
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
import { InlineResponse200 } from '../models';
import { Message } from '../models';
import { Post } from '../models';
import { User } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get or poll latest home posts
         * @param {string} [toId] To which post ID should the server poll latest posts on home. If both to_id and from_id are present, to_id will take precedence.
         * @param {string} [fromId] From which post ID should the server fetch posts on home. If empty, the server will fetch the latest posts.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHome: async (toId?: string, fromId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/home`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

            if (toId !== undefined) {
                localVarQueryParameter['to_id'] = toId;
            }

            if (fromId !== undefined) {
                localVarQueryParameter['from_id'] = fromId;
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
         * @summary Get the loggined in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMe: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

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
         * @summary Sign in
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signIn`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get or poll latest home posts
         * @param {string} [toId] To which post ID should the server poll latest posts on home. If both to_id and from_id are present, to_id will take precedence.
         * @param {string} [fromId] From which post ID should the server fetch posts on home. If empty, the server will fetch the latest posts.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHome(toId?: string, fromId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Post>>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getHome(toId, fromId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the loggined in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMe(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMe(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Sign in
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signIn(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).signIn(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get or poll latest home posts
         * @param {string} [toId] To which post ID should the server poll latest posts on home. If both to_id and from_id are present, to_id will take precedence.
         * @param {string} [fromId] From which post ID should the server fetch posts on home. If empty, the server will fetch the latest posts.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHome(toId?: string, fromId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Post>>> {
            return DefaultApiFp(configuration).getHome(toId, fromId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the loggined in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMe(options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return DefaultApiFp(configuration).getMe(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sign in
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signIn(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return DefaultApiFp(configuration).signIn(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get or poll latest home posts
     * @param {string} [toId] To which post ID should the server poll latest posts on home. If both to_id and from_id are present, to_id will take precedence.
     * @param {string} [fromId] From which post ID should the server fetch posts on home. If empty, the server will fetch the latest posts.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getHome(toId?: string, fromId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Post>>> {
        return DefaultApiFp(this.configuration).getHome(toId, fromId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get the loggined in user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getMe(options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return DefaultApiFp(this.configuration).getMe(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Sign in
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async signIn(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return DefaultApiFp(this.configuration).signIn(body, options).then((request) => request(this.axios, this.basePath));
    }
}
