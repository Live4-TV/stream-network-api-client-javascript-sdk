/**
 * Live4.tv - Stream Networks API
 * Omnichannel for live streaming on social networks  We're glad that you chose to use Live4.tv's API for managing your connection with social networks (currently Instagram).            We understand that Instagram currently restricts users from conducting live broadcasts without their official app.           However, our innovative API empowers users to go live on Instagram without relying on the app itself.        By leveraging our API, users gain access to a stream key, enabling them to seamlessly transmit their live broadcasts using popular software like OBS (Open Broadcaster Software).        This breakthrough feature provides users with the freedom to connect with their audience and share captivating live content on Instagram, all without the constraints of the official app.  The login flow:  ![login flow image](https://api-stream-network.live4.tv/mermaid-diagram-login-flow.png \"Login flow image\") 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contato@live4.tv
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HttpExceptionResponse model module.
 * @module StreamNetworkApi/model/HttpExceptionResponse
 * @version 1.0.0
 */
class HttpExceptionResponse {
    /**
     * Constructs a new <code>HttpExceptionResponse</code>.
     * @alias module:StreamNetworkApi/model/HttpExceptionResponse
     * @param statusCode {Number} 
     * @param message {String} 
     * @param timestamp {String} 
     * @param endpoint {String} 
     */
    constructor(statusCode, message, timestamp, endpoint) { 
        
        HttpExceptionResponse.initialize(this, statusCode, message, timestamp, endpoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, statusCode, message, timestamp, endpoint) { 
        obj['statusCode'] = statusCode;
        obj['message'] = message;
        obj['timestamp'] = timestamp;
        obj['endpoint'] = endpoint;
    }

    /**
     * Constructs a <code>HttpExceptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/HttpExceptionResponse} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/HttpExceptionResponse} The populated <code>HttpExceptionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpExceptionResponse();

            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HttpExceptionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HttpExceptionResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of HttpExceptionResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['timestamp'] && !(typeof data['timestamp'] === 'string' || data['timestamp'] instanceof String)) {
            throw new Error("Expected the field `timestamp` to be a primitive type in the JSON string but got " + data['timestamp']);
        }
        // ensure the json data is a string
        if (data['endpoint'] && !(typeof data['endpoint'] === 'string' || data['endpoint'] instanceof String)) {
            throw new Error("Expected the field `endpoint` to be a primitive type in the JSON string but got " + data['endpoint']);
        }

        return true;
    }


}

HttpExceptionResponse.RequiredProperties = ["statusCode", "message", "timestamp", "endpoint"];

/**
 * @member {Number} statusCode
 */
HttpExceptionResponse.prototype['statusCode'] = undefined;

/**
 * @member {String} message
 */
HttpExceptionResponse.prototype['message'] = undefined;

/**
 * @member {String} timestamp
 */
HttpExceptionResponse.prototype['timestamp'] = undefined;

/**
 * @member {String} endpoint
 */
HttpExceptionResponse.prototype['endpoint'] = undefined;






export default HttpExceptionResponse;

