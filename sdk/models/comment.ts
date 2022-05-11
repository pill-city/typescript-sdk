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
import { NestedComment } from './nested-comment';
import { User } from './user';
/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * Permanent ID for the comment
     * @type {string}
     * @memberof Comment
     */
    id: string;
    /**
     * In epoch seconds, when the comment was created
     * @type {number}
     * @memberof Comment
     */
    createdAtSeconds: number;
    /**
     * 
     * @type {User}
     * @memberof Comment
     */
    author: User;
    /**
     * Text content for the comment
     * @type {string}
     * @memberof Comment
     */
    content?: string;
    /**
     * URLs for the comment's media
     * @type {Array<string>}
     * @memberof Comment
     */
    mediaUrls?: Array<string>;
    /**
     * Whether the comment is deleted
     * @type {boolean}
     * @memberof Comment
     */
    deleted?: boolean;
    /**
     * Nested comments for the comment
     * @type {Array<NestedComment>}
     * @memberof Comment
     */
    comments?: Array<NestedComment>;
}