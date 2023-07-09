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
 * The Redirect model module.
 * @module StreamNetworkApi/model/Redirect
 * @version 1.0.0
 */
class Redirect {
    /**
     * Constructs a new <code>Redirect</code>.
     * @alias module:StreamNetworkApi/model/Redirect
     * @param url {String} The URL to redirect the user to
     * @param method {String} The HTTP method to use
     * @param params {String} The parameters to send in the request to the \"URL\"
     */
    constructor(url, method, params) { 
        
        Redirect.initialize(this, url, method, params);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, method, params) { 
        obj['url'] = url;
        obj['method'] = method;
        obj['params'] = params;
    }

    /**
     * Constructs a <code>Redirect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:StreamNetworkApi/model/Redirect} obj Optional instance to populate.
     * @return {module:StreamNetworkApi/model/Redirect} The populated <code>Redirect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Redirect();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Redirect</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Redirect</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Redirect.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }
        // ensure the json data is a string
        if (data['params'] && !(typeof data['params'] === 'string' || data['params'] instanceof String)) {
            throw new Error("Expected the field `params` to be a primitive type in the JSON string but got " + data['params']);
        }

        return true;
    }


}

Redirect.RequiredProperties = ["url", "method", "params"];

/**
 * The URL to redirect the user to
 * @member {String} url
 */
Redirect.prototype['url'] = undefined;

/**
 * The HTTP method to use
 * @member {String} method
 */
Redirect.prototype['method'] = undefined;

/**
 * The parameters to send in the request to the \"URL\"
 * @member {String} params
 */
Redirect.prototype['params'] = undefined;






export default Redirect;

