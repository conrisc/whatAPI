/*
 * What API
 * This is what-api
 *
 * OpenAPI spec version: 1.2.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The YtVideoItem model module.
 * @module model/YtVideoItem
 * @version 1.2.1
 */
export class YtVideoItem {
  /**
   * Constructs a new <code>YtVideoItem</code>.
   * @alias module:model/YtVideoItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>YtVideoItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/YtVideoItem} obj Optional instance to populate.
   * @return {module:model/YtVideoItem} The populated <code>YtVideoItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new YtVideoItem();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('videoId'))
        obj.videoId = ApiClient.convertToType(data['videoId'], 'String');
      if (data.hasOwnProperty('thumbnailUrl'))
        obj.thumbnailUrl = ApiClient.convertToType(data['thumbnailUrl'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
YtVideoItem.prototype.title = undefined;

/**
 * @member {String} videoId
 */
YtVideoItem.prototype.videoId = undefined;

/**
 * @member {String} thumbnailUrl
 */
YtVideoItem.prototype.thumbnailUrl = undefined;


