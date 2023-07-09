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
 * The CreateAndStartLiveAccountDetailsResponse model module.
 * @module StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse
 * @version 1.0.0
 */
class CreateAndStartLiveAccountDetailsResponse {
    /**
     * Constructs a new <code>CreateAndStartLiveAccountDetailsResponse</code>.
     * @alias module:StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse
     * @param uuid {String} The unique identifier for the specific social network account stream
     * @param streamUrl {String} The stream url to use in the OBS
     * @param streamKey {String} The stream key to use in the OBS
     * @param code {Number} The code of response, 200 for success, 401 for authentication error
     * @param message {String} The string message of the error
     */
    constructor(uuid, streamUrl, streamKey, code, message) { 
        
        CreateAndStartLiveAccountDetailsResponse.initialize(this, uuid, streamUrl, streamKey, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, streamUrl, streamKey, code, message) { 
        obj['uuid'] = uuid;
        obj['streamUrl'] = streamUrl;
        obj['streamKey'] = streamKey;
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>CreateAndStartLiveAccountDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse} The populated <code>CreateAndStartLiveAccountDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAndStartLiveAccountDetailsResponse();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('streamUrl')) {
                obj['streamUrl'] = ApiClient.convertToType(data['streamUrl'], 'String');
            }
            if (data.hasOwnProperty('streamKey')) {
                obj['streamKey'] = ApiClient.convertToType(data['streamKey'], 'String');
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
     * Validates the JSON data with respect to <code>CreateAndStartLiveAccountDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAndStartLiveAccountDetailsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAndStartLiveAccountDetailsResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['streamUrl'] && !(typeof data['streamUrl'] === 'string' || data['streamUrl'] instanceof String)) {
            throw new Error("Expected the field `streamUrl` to be a primitive type in the JSON string but got " + data['streamUrl']);
        }
        // ensure the json data is a string
        if (data['streamKey'] && !(typeof data['streamKey'] === 'string' || data['streamKey'] instanceof String)) {
            throw new Error("Expected the field `streamKey` to be a primitive type in the JSON string but got " + data['streamKey']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

CreateAndStartLiveAccountDetailsResponse.RequiredProperties = ["uuid", "streamUrl", "streamKey", "code", "message"];

/**
 * The unique identifier for the specific social network account stream
 * @member {String} uuid
 */
CreateAndStartLiveAccountDetailsResponse.prototype['uuid'] = undefined;

/**
 * The stream url to use in the OBS
 * @member {String} streamUrl
 */
CreateAndStartLiveAccountDetailsResponse.prototype['streamUrl'] = undefined;

/**
 * The stream key to use in the OBS
 * @member {String} streamKey
 */
CreateAndStartLiveAccountDetailsResponse.prototype['streamKey'] = undefined;

/**
 * The code of response, 200 for success, 401 for authentication error
 * @member {Number} code
 */
CreateAndStartLiveAccountDetailsResponse.prototype['code'] = undefined;

/**
 * The string message of the error
 * @member {String} message
 */
CreateAndStartLiveAccountDetailsResponse.prototype['message'] = undefined;






export default CreateAndStartLiveAccountDetailsResponse;

