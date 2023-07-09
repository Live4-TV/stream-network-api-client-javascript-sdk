/**
 * Live4.tv - Stream Targets
 * Omnichannel for live streaming on social networks  We're glad that you chose to use Live4.tv's API for managing your connection with social networks.   Here in this documentation, you will find a step-by-step for integrating our API.  Feel free to contact us in case you need any help.  The login flow:  ![login flow image](https://api-stream-network.live4.tv/mermaid-diagram-login-flow.png \"Login flow image\") 
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
 * The SocialNetworkAccount model module.
 * @module StreamNetworkApi/model/SocialNetworkAccount
 * @version 1.0
 */
class SocialNetworkAccount {
    /**
     * Constructs a new <code>SocialNetworkAccount</code>.
     * @alias module:StreamNetworkApi/model/SocialNetworkAccount
     * @param uuid {String} The unique identifier for the account
     * @param name {String} The displayable integration for the account
     * @param type {String} The social network of the account
     */
    constructor(uuid, name, type) { 
        
        SocialNetworkAccount.initialize(this, uuid, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, name, type) { 
        obj['uuid'] = uuid;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>SocialNetworkAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/SocialNetworkAccount} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/SocialNetworkAccount} The populated <code>SocialNetworkAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialNetworkAccount();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SocialNetworkAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SocialNetworkAccount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SocialNetworkAccount.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

SocialNetworkAccount.RequiredProperties = ["uuid", "name", "type"];

/**
 * The unique identifier for the account
 * @member {String} uuid
 */
SocialNetworkAccount.prototype['uuid'] = undefined;

/**
 * The displayable integration for the account
 * @member {String} name
 */
SocialNetworkAccount.prototype['name'] = undefined;

/**
 * The social network of the account
 * @member {String} type
 */
SocialNetworkAccount.prototype['type'] = undefined;






export default SocialNetworkAccount;
