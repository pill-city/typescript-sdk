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
import { CloudEmoticonRepo } from '../models';
import { Message } from '../models';
/**
 * PluginsApi - axios parameter creator
 * @export
 */
export const PluginsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get emoticons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmoticons: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/plugin/cloudemoticon/emoticons`;
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
    }
};

/**
 * PluginsApi - functional programming interface
 * @export
 */
export const PluginsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get emoticons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmoticons(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CloudEmoticonRepo>>> {
            const localVarAxiosArgs = await PluginsApiAxiosParamCreator(configuration).getEmoticons(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PluginsApi - factory interface
 * @export
 */
export const PluginsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get emoticons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmoticons(options?: AxiosRequestConfig): Promise<AxiosResponse<CloudEmoticonRepo>> {
            return PluginsApiFp(configuration).getEmoticons(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PluginsApi - object-oriented interface
 * @export
 * @class PluginsApi
 * @extends {BaseAPI}
 */
export class PluginsApi extends BaseAPI {
    /**
     * 
     * @summary Get emoticons
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public async getEmoticons(options?: AxiosRequestConfig) : Promise<AxiosResponse<CloudEmoticonRepo>> {
        return PluginsApiFp(this.configuration).getEmoticons(options).then((request) => request(this.axios, this.basePath));
    }
}
