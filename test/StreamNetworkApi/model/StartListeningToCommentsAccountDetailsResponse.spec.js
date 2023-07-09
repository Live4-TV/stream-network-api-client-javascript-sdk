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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/StreamNetworkApi/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/StreamNetworkApi/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Live4TvStreamTargets);
  }
}(this, function(expect, Live4TvStreamTargets) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StartListeningToCommentsAccountDetailsResponse', function() {
    it('should create an instance of StartListeningToCommentsAccountDetailsResponse', function() {
      // uncomment below and update the code to test StartListeningToCommentsAccountDetailsResponse
      //var instance = new Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse();
      //expect(instance).to.be.a(Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new Live4TvStreamTargets.StartListeningToCommentsAccountDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
