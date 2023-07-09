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
import CreateAndStartLiveAccountDetailsResponse from './CreateAndStartLiveAccountDetailsResponse';

/**
 * The CreateAndStartLiveResponse model module.
 * @module StreamNetworkApi/model/CreateAndStartLiveResponse
 * @version 1.0.0
 */
class CreateAndStartLiveResponse {
    /**
     * Constructs a new <code>CreateAndStartLiveResponse</code>.
     * @alias module:StreamNetworkApi/model/CreateAndStartLiveResponse
     * @param uuid {String} The unique identifier for the live stream
     * @param accounts {Array.<module:StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse>} An list of responses for each account, with the stream details
     */
    constructor(uuid, accounts) { 
        
        CreateAndStartLiveResponse.initialize(this, uuid, accounts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, accounts) { 
        obj['uuid'] = uuid;
        obj['accounts'] = accounts;
    }

    /**
     * Constructs a <code>CreateAndStartLiveResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/CreateAndStartLiveResponse} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/CreateAndStartLiveResponse} The populated <code>CreateAndStartLiveResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAndStartLiveResponse();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [CreateAndStartLiveAccountDetailsResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAndStartLiveResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAndStartLiveResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAndStartLiveResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        if (data['accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['accounts'])) {
                throw new Error("Expected the field `accounts` to be an array in the JSON data but got " + data['accounts']);
            }
            // validate the optional field `accounts` (array)
            for (const item of data['accounts']) {
                CreateAndStartLiveAccountDetailsResponse.validateJSON(item);
            };
        }

        return true;
    }


}

CreateAndStartLiveResponse.RequiredProperties = ["uuid", "accounts"];

/**
 * The unique identifier for the live stream
 * @member {String} uuid
 */
CreateAndStartLiveResponse.prototype['uuid'] = undefined;

/**
 * An list of responses for each account, with the stream details
 * @member {Array.<module:StreamNetworkApi/model/CreateAndStartLiveAccountDetailsResponse>} accounts
 */
CreateAndStartLiveResponse.prototype['accounts'] = undefined;






export default CreateAndStartLiveResponse;

