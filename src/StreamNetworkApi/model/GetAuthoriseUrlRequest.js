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
 * The GetAuthoriseUrlRequest model module.
 * @module StreamNetworkApi/model/GetAuthoriseUrlRequest
 * @version 1.0.0
 */
class GetAuthoriseUrlRequest {
    /**
     * Constructs a new <code>GetAuthoriseUrlRequest</code>.
     * @alias module:StreamNetworkApi/model/GetAuthoriseUrlRequest
     * @param userExternalId {String} The user's unique identifier on your system. This is what you will use to identify the user in future requests.
     * @param accountUuid {String} The reference to the new account that you can use to identify the account in future requests
     */
    constructor(userExternalId, accountUuid) { 
        
        GetAuthoriseUrlRequest.initialize(this, userExternalId, accountUuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userExternalId, accountUuid) { 
        obj['userExternalId'] = userExternalId;
        obj['accountUuid'] = accountUuid;
    }

    /**
     * Constructs a <code>GetAuthoriseUrlRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/GetAuthoriseUrlRequest} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/GetAuthoriseUrlRequest} The populated <code>GetAuthoriseUrlRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAuthoriseUrlRequest();

            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
            if (data.hasOwnProperty('accountUuid')) {
                obj['accountUuid'] = ApiClient.convertToType(data['accountUuid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAuthoriseUrlRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAuthoriseUrlRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetAuthoriseUrlRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['userExternalId'] && !(typeof data['userExternalId'] === 'string' || data['userExternalId'] instanceof String)) {
            throw new Error("Expected the field `userExternalId` to be a primitive type in the JSON string but got " + data['userExternalId']);
        }
        // ensure the json data is a string
        if (data['accountUuid'] && !(typeof data['accountUuid'] === 'string' || data['accountUuid'] instanceof String)) {
            throw new Error("Expected the field `accountUuid` to be a primitive type in the JSON string but got " + data['accountUuid']);
        }

        return true;
    }


}

GetAuthoriseUrlRequest.RequiredProperties = ["userExternalId", "accountUuid"];

/**
 * The user's unique identifier on your system. This is what you will use to identify the user in future requests.
 * @member {String} userExternalId
 */
GetAuthoriseUrlRequest.prototype['userExternalId'] = undefined;

/**
 * The reference to the new account that you can use to identify the account in future requests
 * @member {String} accountUuid
 */
GetAuthoriseUrlRequest.prototype['accountUuid'] = undefined;






export default GetAuthoriseUrlRequest;

