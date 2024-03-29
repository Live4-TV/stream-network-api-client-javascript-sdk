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
 * The StartListeningToCommentsAccountDetailsResponse model module.
 * @module StreamNetworkApi/model/StartListeningToCommentsAccountDetailsResponse
 * @version 1.0.0
 */
class StartListeningToCommentsAccountDetailsResponse {
    /**
     * Constructs a new <code>StartListeningToCommentsAccountDetailsResponse</code>.
     * @alias module:StreamNetworkApi/model/StartListeningToCommentsAccountDetailsResponse
     * @param uuid {String} The unique identifier for the specific social network account stream
     * @param code {Number} The code of response, 200 for success, 401 for authentication error
     * @param message {String} The string message of the error
     */
    constructor(uuid, code, message) { 
        
        StartListeningToCommentsAccountDetailsResponse.initialize(this, uuid, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, code, message) { 
        obj['uuid'] = uuid;
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>StartListeningToCommentsAccountDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/StartListeningToCommentsAccountDetailsResponse} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/StartListeningToCommentsAccountDetailsResponse} The populated <code>StartListeningToCommentsAccountDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartListeningToCommentsAccountDetailsResponse();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartListeningToCommentsAccountDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartListeningToCommentsAccountDetailsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StartListeningToCommentsAccountDetailsResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

StartListeningToCommentsAccountDetailsResponse.RequiredProperties = ["uuid", "code", "message"];

/**
 * The unique identifier for the specific social network account stream
 * @member {String} uuid
 */
StartListeningToCommentsAccountDetailsResponse.prototype['uuid'] = undefined;

/**
 * The code of response, 200 for success, 401 for authentication error
 * @member {Number} code
 */
StartListeningToCommentsAccountDetailsResponse.prototype['code'] = undefined;

/**
 * The string message of the error
 * @member {String} message
 */
StartListeningToCommentsAccountDetailsResponse.prototype['message'] = undefined;






export default StartListeningToCommentsAccountDetailsResponse;

