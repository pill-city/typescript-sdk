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
/**
 * 
 * @export
 * @interface MediaUrlV2
 */
export interface MediaUrlV2 {
    /**
     * Original URL to the media
     * @type {string}
     * @memberof MediaUrlV2
     */
    originalUrl: string;
    /**
     * Whether the media has been processed/optimized
     * @type {boolean}
     * @memberof MediaUrlV2
     */
    processed: boolean;
    /**
     * Processed media width
     * @type {number}
     * @memberof MediaUrlV2
     */
    width?: number;
    /**
     * Processed media height
     * @type {number}
     * @memberof MediaUrlV2
     */
    height?: number;
    /**
     * Processed media dominant color in hex
     * @type {string}
     * @memberof MediaUrlV2
     */
    dominantColorHex?: string;
}