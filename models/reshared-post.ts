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
import { MediaUrlV2 } from './media-url-v2';
import { User } from './user';
/**
 * 
 * @export
 * @interface ResharedPost
 */
export interface ResharedPost {
    /**
     * Permanent ID for the reshared post
     * @type {string}
     * @memberof ResharedPost
     */
    id: string;
    /**
     * In epoch seconds, when the reshared post was created
     * @type {number}
     * @memberof ResharedPost
     */
    createdAtSeconds: number;
    /**
     * 
     * @type {User}
     * @memberof ResharedPost
     */
    author: User;
    /**
     * Text content for the reshared post
     * @type {string}
     * @memberof ResharedPost
     */
    content?: string;
    /**
     * URLs for the reshared post's media
     * @type {Array<string>}
     * @memberof ResharedPost
     */
    mediaUrls?: Array<string>;
    /**
     * v2 media URLs for the comment's media
     * @type {Array<MediaUrlV2>}
     * @memberof ResharedPost
     */
    mediaUrlsV2?: Array<MediaUrlV2>;
    /**
     * Whether the reshared post is deleted
     * @type {boolean}
     * @memberof ResharedPost
     */
    deleted?: boolean;
}
