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
import { CloudEmoticonCategory } from './cloud-emoticon-category';
/**
 * 
 * @export
 * @interface CloudEmoticonRepo
 */
export interface CloudEmoticonRepo {
    /**
     * Emoticon categories for the repo
     * @type {Array<CloudEmoticonCategory>}
     * @memberof CloudEmoticonRepo
     */
    categories: Array<CloudEmoticonCategory>;
    /**
     * Description for the repo
     * @type {Array<string>}
     * @memberof CloudEmoticonRepo
     */
    information: Array<string>;
}