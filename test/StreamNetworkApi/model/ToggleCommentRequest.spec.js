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
    instance = new Live4TvStreamTargets.ToggleCommentRequest();
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

  describe('ToggleCommentRequest', function() {
    it('should create an instance of ToggleCommentRequest', function() {
      // uncomment below and update the code to test ToggleCommentRequest
      //var instance = new Live4TvStreamTargets.ToggleCommentRequest();
      //expect(instance).to.be.a(Live4TvStreamTargets.ToggleCommentRequest);
    });

    it('should have the property accounts (base name: "accounts")', function() {
      // uncomment below and update the code to test the property accounts
      //var instance = new Live4TvStreamTargets.ToggleCommentRequest();
      //expect(instance).to.be();
    });

  });

}));