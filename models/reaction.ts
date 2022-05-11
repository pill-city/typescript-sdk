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
import { User } from './user';
/**
 * 
 * @export
 * @interface Reaction
 */
export interface Reaction {
    /**
     * Permanent ID for the reaction
     * @type {string}
     * @memberof Reaction
     */
    id: string;
    /**
     * Emoji for the reaction
     * @type {string}
     * @memberof Reaction
     */
    emoji: string;
    /**
     * 
     * @type {User}
     * @memberof Reaction
     */
    author: User;
}
