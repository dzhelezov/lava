// source: lavanet/lava/pairing/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var lavanet_lava_pairing_params_pb = require('../../../lavanet/lava/pairing/params_pb.js');
goog.object.extend(proto, lavanet_lava_pairing_params_pb);
var lavanet_lava_pairing_epoch_payments_pb = require('../../../lavanet/lava/pairing/epoch_payments_pb.js');
goog.object.extend(proto, lavanet_lava_pairing_epoch_payments_pb);
var lavanet_lava_spec_spec_pb = require('../../../lavanet/lava/spec/spec_pb.js');
goog.object.extend(proto, lavanet_lava_spec_spec_pb);
var lavanet_lava_plans_policy_pb = require('../../../lavanet/lava/plans/policy_pb.js');
goog.object.extend(proto, lavanet_lava_plans_policy_pb);
var lavanet_lava_pairing_provider_payment_storage_pb = require('../../../lavanet/lava/pairing/provider_payment_storage_pb.js');
goog.object.extend(proto, lavanet_lava_pairing_provider_payment_storage_pb);
var lavanet_lava_pairing_unique_payment_storage_client_provider_pb = require('../../../lavanet/lava/pairing/unique_payment_storage_client_provider_pb.js');
goog.object.extend(proto, lavanet_lava_pairing_unique_payment_storage_client_provider_pb);
var lavanet_lava_epochstorage_stake_entry_pb = require('../../../lavanet/lava/epochstorage/stake_entry_pb.js');
goog.object.extend(proto, lavanet_lava_epochstorage_stake_entry_pb);
var lavanet_lava_subscription_subscription_pb = require('../../../lavanet/lava/subscription/subscription_pb.js');
goog.object.extend(proto, lavanet_lava_subscription_subscription_pb);
var lavanet_lava_projects_project_pb = require('../../../lavanet/lava/projects/project_pb.js');
goog.object.extend(proto, lavanet_lava_projects_project_pb);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAccountInfoResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryEffectivePolicyRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryEffectivePolicyResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetPairingRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetPairingResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryParamsRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryParamsResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryProvidersRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryProvidersResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QuerySdkPairingResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryStaticProvidersListRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryStaticProvidersListResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryUserEntryRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryUserEntryResponse', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryVerifyPairingRequest', null, global);
goog.exportSymbol('proto.lavanet.lava.pairing.QueryVerifyPairingResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryParamsRequest.displayName = 'proto.lavanet.lava.pairing.QueryParamsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryParamsResponse.displayName = 'proto.lavanet.lava.pairing.QueryParamsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryProvidersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryProvidersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryProvidersRequest.displayName = 'proto.lavanet.lava.pairing.QueryProvidersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryProvidersResponse.displayName = 'proto.lavanet.lava.pairing.QueryProvidersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetPairingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetPairingRequest.displayName = 'proto.lavanet.lava.pairing.QueryGetPairingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryGetPairingResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetPairingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetPairingResponse.displayName = 'proto.lavanet.lava.pairing.QueryGetPairingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryVerifyPairingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryVerifyPairingRequest.displayName = 'proto.lavanet.lava.pairing.QueryVerifyPairingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryVerifyPairingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryVerifyPairingResponse.displayName = 'proto.lavanet.lava.pairing.QueryVerifyPairingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.displayName = 'proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.displayName = 'proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.displayName = 'proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.displayName = 'proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.displayName = 'proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.displayName = 'proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.displayName = 'proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.displayName = 'proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.displayName = 'proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.displayName = 'proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.displayName = 'proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.displayName = 'proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryUserEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryUserEntryRequest.displayName = 'proto.lavanet.lava.pairing.QueryUserEntryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryUserEntryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryUserEntryResponse.displayName = 'proto.lavanet.lava.pairing.QueryUserEntryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryStaticProvidersListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.displayName = 'proto.lavanet.lava.pairing.QueryStaticProvidersListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryStaticProvidersListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.displayName = 'proto.lavanet.lava.pairing.QueryStaticProvidersListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lavanet.lava.pairing.QueryAccountInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryAccountInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryAccountInfoResponse.displayName = 'proto.lavanet.lava.pairing.QueryAccountInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryEffectivePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.displayName = 'proto.lavanet.lava.pairing.QueryEffectivePolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QueryEffectivePolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.displayName = 'proto.lavanet.lava.pairing.QueryEffectivePolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lavanet.lava.pairing.QuerySdkPairingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lavanet.lava.pairing.QuerySdkPairingResponse.displayName = 'proto.lavanet.lava.pairing.QuerySdkPairingResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryParamsRequest}
 */
proto.lavanet.lava.pairing.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryParamsRequest;
  return proto.lavanet.lava.pairing.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryParamsRequest}
 */
proto.lavanet.lava.pairing.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && lavanet_lava_pairing_params_pb.Params.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryParamsResponse}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryParamsResponse;
  return proto.lavanet.lava.pairing.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryParamsResponse}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_params_pb.Params;
      reader.readMessage(value,lavanet_lava_pairing_params_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_pairing_params_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.lavanet.lava.pairing.Params}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.lavanet.lava.pairing.Params} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_pairing_params_pb.Params, 1));
};


/**
 * @param {?proto.lavanet.lava.pairing.Params|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryParamsResponse} returns this
*/
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryParamsResponse} returns this
 */
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryProvidersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryProvidersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    showfrozen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryProvidersRequest}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryProvidersRequest;
  return proto.lavanet.lava.pairing.QueryProvidersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryProvidersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryProvidersRequest}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowfrozen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryProvidersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryProvidersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShowfrozen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string chainID = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryProvidersRequest} returns this
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool showFrozen = 2;
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.getShowfrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lavanet.lava.pairing.QueryProvidersRequest} returns this
 */
proto.lavanet.lava.pairing.QueryProvidersRequest.prototype.setShowfrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stakeentryList: jspb.Message.toObjectList(msg.getStakeentryList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    output: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryProvidersResponse}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryProvidersResponse;
  return proto.lavanet.lava.pairing.QueryProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryProvidersResponse}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addStakeentry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStakeentryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry stakeEntry = 1;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.getStakeentryList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryProvidersResponse} returns this
*/
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.setStakeentryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.addStakeentry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryProvidersResponse} returns this
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.clearStakeentryList = function() {
  return this.setStakeentryList([]);
};


/**
 * optional string output = 2;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryProvidersResponse} returns this
 */
proto.lavanet.lava.pairing.QueryProvidersResponse.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetPairingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    client: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingRequest}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetPairingRequest;
  return proto.lavanet.lava.pairing.QueryGetPairingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingRequest}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetPairingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClient();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string chainID = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client = 2;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.getClient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingRequest.prototype.setClient = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetPairingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    currentEpoch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeLeftToNextPairing: jspb.Message.getFieldWithDefault(msg, 3, 0),
    specLastUpdatedBlock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockOfNextPairing: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetPairingResponse;
  return proto.lavanet.lava.pairing.QueryGetPairingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addProviders(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentEpoch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeLeftToNextPairing(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSpecLastUpdatedBlock(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockOfNextPairing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetPairingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetPairingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getCurrentEpoch();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTimeLeftToNextPairing();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSpecLastUpdatedBlock();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBlockOfNextPairing();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry providers = 1;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
*/
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.setProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.clearProvidersList = function() {
  return this.setProvidersList([]);
};


/**
 * optional uint64 current_epoch = 2;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.getCurrentEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.setCurrentEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 time_left_to_next_pairing = 3;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.getTimeLeftToNextPairing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.setTimeLeftToNextPairing = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 spec_last_updated_block = 4;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.getSpecLastUpdatedBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.setSpecLastUpdatedBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 block_of_next_pairing = 5;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.getBlockOfNextPairing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryGetPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetPairingResponse.prototype.setBlockOfNextPairing = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryVerifyPairingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    client: jspb.Message.getFieldWithDefault(msg, 2, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 3, ""),
    block: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryVerifyPairingRequest;
  return proto.lavanet.lava.pairing.QueryVerifyPairingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClient(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryVerifyPairingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClient();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string chainID = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client = 2;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.getClient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.setClient = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string provider = 3;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.setProvider = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 block = 4;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.getBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingRequest} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingRequest.prototype.setBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryVerifyPairingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valid: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    pairedProviders: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cuPerEpoch: jspb.Message.getFieldWithDefault(msg, 4, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryVerifyPairingResponse;
  return proto.lavanet.lava.pairing.QueryVerifyPairingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPairedProviders(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCuPerEpoch(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryVerifyPairingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPairedProviders();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCuPerEpoch();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool valid = 1;
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.setValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 paired_providers = 3;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.getPairedProviders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.setPairedProviders = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 cu_per_epoch = 4;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.getCuPerEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.setCuPerEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string project_id = 5;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryVerifyPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QueryVerifyPairingResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest;
  return proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string index = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest} returns this
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniquepaymentstorageclientprovider: (f = msg.getUniquepaymentstorageclientprovider()) && lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse;
  return proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider;
      reader.readMessage(value,lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.deserializeBinaryFromReader);
      msg.setUniquepaymentstorageclientprovider(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniquepaymentstorageclientprovider();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional UniquePaymentStorageClientProvider uniquePaymentStorageClientProvider = 1;
 * @return {?proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.getUniquepaymentstorageclientprovider = function() {
  return /** @type{?proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider, 1));
};


/**
 * @param {?proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse} returns this
*/
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.setUniquepaymentstorageclientprovider = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.clearUniquepaymentstorageclientprovider = function() {
  return this.setUniquepaymentstorageclientprovider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse.prototype.hasUniquepaymentstorageclientprovider = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest;
  return proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest} returns this
*/
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest} returns this
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniquepaymentstorageclientproviderList: jspb.Message.toObjectList(msg.getUniquepaymentstorageclientproviderList(),
    lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse;
  return proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider;
      reader.readMessage(value,lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.deserializeBinaryFromReader);
      msg.addUniquepaymentstorageclientprovider(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniquepaymentstorageclientproviderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UniquePaymentStorageClientProvider uniquePaymentStorageClientProvider = 1;
 * @return {!Array<!proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider>}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.getUniquepaymentstorageclientproviderList = function() {
  return /** @type{!Array<!proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_pairing_unique_payment_storage_client_provider_pb.UniquePaymentStorageClientProvider, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider>} value
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.setUniquepaymentstorageclientproviderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.addUniquepaymentstorageclientprovider = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.pairing.UniquePaymentStorageClientProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.clearUniquepaymentstorageclientproviderList = function() {
  return this.setUniquepaymentstorageclientproviderList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest;
  return proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string index = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest} returns this
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerpaymentstorage: (f = msg.getProviderpaymentstorage()) && lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse;
  return proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage;
      reader.readMessage(value,lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.deserializeBinaryFromReader);
      msg.setProviderpaymentstorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderpaymentstorage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProviderPaymentStorage providerPaymentStorage = 1;
 * @return {?proto.lavanet.lava.pairing.ProviderPaymentStorage}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.getProviderpaymentstorage = function() {
  return /** @type{?proto.lavanet.lava.pairing.ProviderPaymentStorage} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage, 1));
};


/**
 * @param {?proto.lavanet.lava.pairing.ProviderPaymentStorage|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse} returns this
*/
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.setProviderpaymentstorage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.clearProviderpaymentstorage = function() {
  return this.setProviderpaymentstorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse.prototype.hasProviderpaymentstorage = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest;
  return proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest} returns this
*/
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest} returns this
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerpaymentstorageList: jspb.Message.toObjectList(msg.getProviderpaymentstorageList(),
    lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse;
  return proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage;
      reader.readMessage(value,lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.deserializeBinaryFromReader);
      msg.addProviderpaymentstorage(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderpaymentstorageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProviderPaymentStorage providerPaymentStorage = 1;
 * @return {!Array<!proto.lavanet.lava.pairing.ProviderPaymentStorage>}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.getProviderpaymentstorageList = function() {
  return /** @type{!Array<!proto.lavanet.lava.pairing.ProviderPaymentStorage>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_pairing_provider_payment_storage_pb.ProviderPaymentStorage, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.pairing.ProviderPaymentStorage>} value
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.setProviderpaymentstorageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.pairing.ProviderPaymentStorage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.pairing.ProviderPaymentStorage}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.addProviderpaymentstorage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.pairing.ProviderPaymentStorage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.clearProviderpaymentstorageList = function() {
  return this.setProviderpaymentstorageList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest;
  return proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string index = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest} returns this
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochpayments: (f = msg.getEpochpayments()) && lavanet_lava_pairing_epoch_payments_pb.EpochPayments.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse;
  return proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_epoch_payments_pb.EpochPayments;
      reader.readMessage(value,lavanet_lava_pairing_epoch_payments_pb.EpochPayments.deserializeBinaryFromReader);
      msg.setEpochpayments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochpayments();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_pairing_epoch_payments_pb.EpochPayments.serializeBinaryToWriter
    );
  }
};


/**
 * optional EpochPayments epochPayments = 1;
 * @return {?proto.lavanet.lava.pairing.EpochPayments}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.getEpochpayments = function() {
  return /** @type{?proto.lavanet.lava.pairing.EpochPayments} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_pairing_epoch_payments_pb.EpochPayments, 1));
};


/**
 * @param {?proto.lavanet.lava.pairing.EpochPayments|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse} returns this
*/
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.setEpochpayments = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse} returns this
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.clearEpochpayments = function() {
  return this.setEpochpayments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryGetEpochPaymentsResponse.prototype.hasEpochpayments = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest;
  return proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest} returns this
*/
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest} returns this
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochpaymentsList: jspb.Message.toObjectList(msg.getEpochpaymentsList(),
    lavanet_lava_pairing_epoch_payments_pb.EpochPayments.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse;
  return proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_pairing_epoch_payments_pb.EpochPayments;
      reader.readMessage(value,lavanet_lava_pairing_epoch_payments_pb.EpochPayments.deserializeBinaryFromReader);
      msg.addEpochpayments(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochpaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_pairing_epoch_payments_pb.EpochPayments.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EpochPayments epochPayments = 1;
 * @return {!Array<!proto.lavanet.lava.pairing.EpochPayments>}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.getEpochpaymentsList = function() {
  return /** @type{!Array<!proto.lavanet.lava.pairing.EpochPayments>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_pairing_epoch_payments_pb.EpochPayments, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.pairing.EpochPayments>} value
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.setEpochpaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.pairing.EpochPayments=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.pairing.EpochPayments}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.addEpochpayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.pairing.EpochPayments, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.clearEpochpaymentsList = function() {
  return this.setEpochpaymentsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAllEpochPaymentsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryUserEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chainid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    block: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryRequest}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryUserEntryRequest;
  return proto.lavanet.lava.pairing.QueryUserEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryRequest}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryUserEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryRequest} returns this
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chainID = 2;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryRequest} returns this
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 block = 3;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.getBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryRequest} returns this
 */
proto.lavanet.lava.pairing.QueryUserEntryRequest.prototype.setBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryUserEntryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: (f = msg.getConsumer()) && lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject(includeInstance, f),
    maxcu: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryResponse}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryUserEntryResponse;
  return proto.lavanet.lava.pairing.QueryUserEntryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryResponse}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.setConsumer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxcu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryUserEntryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryUserEntryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsumer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getMaxcu();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional lavanet.lava.epochstorage.StakeEntry consumer = 1;
 * @return {?proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.getConsumer = function() {
  return /** @type{?proto.lavanet.lava.epochstorage.StakeEntry} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 1));
};


/**
 * @param {?proto.lavanet.lava.epochstorage.StakeEntry|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryResponse} returns this
*/
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.setConsumer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryResponse} returns this
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.clearConsumer = function() {
  return this.setConsumer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.hasConsumer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 maxCU = 2;
 * @return {number}
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.getMaxcu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QueryUserEntryResponse} returns this
 */
proto.lavanet.lava.pairing.QueryUserEntryResponse.prototype.setMaxcu = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryStaticProvidersListRequest;
  return proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chainID = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListRequest} returns this
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListRequest.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryStaticProvidersListResponse;
  return proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addProviders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry providers = 1;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse} returns this
*/
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.setProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryStaticProvidersListResponse} returns this
 */
proto.lavanet.lava.pairing.QueryStaticProvidersListResponse.prototype.clearProvidersList = function() {
  return this.setProvidersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryAccountInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerList: jspb.Message.toObjectList(msg.getProviderList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    frozenList: jspb.Message.toObjectList(msg.getFrozenList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    consumerList: jspb.Message.toObjectList(msg.getConsumerList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    unstakedList: jspb.Message.toObjectList(msg.getUnstakedList(),
    lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.toObject, includeInstance),
    subscription: (f = msg.getSubscription()) && lavanet_lava_subscription_subscription_pb.Subscription.toObject(includeInstance, f),
    project: (f = msg.getProject()) && lavanet_lava_projects_project_pb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryAccountInfoResponse;
  return proto.lavanet.lava.pairing.QueryAccountInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addProvider(value);
      break;
    case 2:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addFrozen(value);
      break;
    case 3:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addConsumer(value);
      break;
    case 4:
      var value = new lavanet_lava_epochstorage_stake_entry_pb.StakeEntry;
      reader.readMessage(value,lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.deserializeBinaryFromReader);
      msg.addUnstaked(value);
      break;
    case 5:
      var value = new lavanet_lava_subscription_subscription_pb.Subscription;
      reader.readMessage(value,lavanet_lava_subscription_subscription_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 6:
      var value = new lavanet_lava_projects_project_pb.Project;
      reader.readMessage(value,lavanet_lava_projects_project_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryAccountInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getFrozenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getConsumerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getUnstakedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      lavanet_lava_epochstorage_stake_entry_pb.StakeEntry.serializeBinaryToWriter
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      lavanet_lava_subscription_subscription_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      lavanet_lava_projects_project_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry provider = 1;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getProviderList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 1));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setProviderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.addProvider = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearProviderList = function() {
  return this.setProviderList([]);
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry frozen = 2;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getFrozenList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 2));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setFrozenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.addFrozen = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearFrozenList = function() {
  return this.setFrozenList([]);
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry consumer = 3;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getConsumerList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 3));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setConsumerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.addConsumer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearConsumerList = function() {
  return this.setConsumerList([]);
};


/**
 * repeated lavanet.lava.epochstorage.StakeEntry unstaked = 4;
 * @return {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getUnstakedList = function() {
  return /** @type{!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, lavanet_lava_epochstorage_stake_entry_pb.StakeEntry, 4));
};


/**
 * @param {!Array<!proto.lavanet.lava.epochstorage.StakeEntry>} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setUnstakedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.lavanet.lava.epochstorage.StakeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lavanet.lava.epochstorage.StakeEntry}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.addUnstaked = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.lavanet.lava.epochstorage.StakeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearUnstakedList = function() {
  return this.setUnstakedList([]);
};


/**
 * optional lavanet.lava.subscription.Subscription subscription = 5;
 * @return {?proto.lavanet.lava.subscription.Subscription}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getSubscription = function() {
  return /** @type{?proto.lavanet.lava.subscription.Subscription} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_subscription_subscription_pb.Subscription, 5));
};


/**
 * @param {?proto.lavanet.lava.subscription.Subscription|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional lavanet.lava.projects.Project project = 6;
 * @return {?proto.lavanet.lava.projects.Project}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.getProject = function() {
  return /** @type{?proto.lavanet.lava.projects.Project} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_projects_project_pb.Project, 6));
};


/**
 * @param {?proto.lavanet.lava.projects.Project|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
*/
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryAccountInfoResponse} returns this
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryAccountInfoResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    specid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryEffectivePolicyRequest;
  return proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsumer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpecid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string consumer = 1;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.getConsumer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest} returns this
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.setConsumer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string specID = 2;
 * @return {string}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.getSpecid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyRequest} returns this
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyRequest.prototype.setSpecid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: (f = msg.getPolicy()) && lavanet_lava_plans_policy_pb.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QueryEffectivePolicyResponse;
  return proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new lavanet_lava_plans_policy_pb.Policy;
      reader.readMessage(value,lavanet_lava_plans_policy_pb.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      lavanet_lava_plans_policy_pb.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional lavanet.lava.plans.Policy policy = 1;
 * @return {?proto.lavanet.lava.plans.Policy}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.lavanet.lava.plans.Policy} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_plans_policy_pb.Policy, 1));
};


/**
 * @param {?proto.lavanet.lava.plans.Policy|undefined} value
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse} returns this
*/
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QueryEffectivePolicyResponse} returns this
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QueryEffectivePolicyResponse.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lavanet.lava.pairing.QuerySdkPairingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairing: (f = msg.getPairing()) && proto.lavanet.lava.pairing.QueryGetPairingResponse.toObject(includeInstance, f),
    maxCu: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spec: (f = msg.getSpec()) && lavanet_lava_spec_spec_pb.Spec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lavanet.lava.pairing.QuerySdkPairingResponse;
  return proto.lavanet.lava.pairing.QuerySdkPairingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lavanet.lava.pairing.QueryGetPairingResponse;
      reader.readMessage(value,proto.lavanet.lava.pairing.QueryGetPairingResponse.deserializeBinaryFromReader);
      msg.setPairing(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxCu(value);
      break;
    case 3:
      var value = new lavanet_lava_spec_spec_pb.Spec;
      reader.readMessage(value,lavanet_lava_spec_spec_pb.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lavanet.lava.pairing.QuerySdkPairingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lavanet.lava.pairing.QueryGetPairingResponse.serializeBinaryToWriter
    );
  }
  f = message.getMaxCu();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      lavanet_lava_spec_spec_pb.Spec.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryGetPairingResponse pairing = 1;
 * @return {?proto.lavanet.lava.pairing.QueryGetPairingResponse}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.getPairing = function() {
  return /** @type{?proto.lavanet.lava.pairing.QueryGetPairingResponse} */ (
    jspb.Message.getWrapperField(this, proto.lavanet.lava.pairing.QueryGetPairingResponse, 1));
};


/**
 * @param {?proto.lavanet.lava.pairing.QueryGetPairingResponse|undefined} value
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} returns this
*/
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.setPairing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.clearPairing = function() {
  return this.setPairing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.hasPairing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 max_cu = 2;
 * @return {number}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.getMaxCu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.setMaxCu = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional lavanet.lava.spec.Spec spec = 3;
 * @return {?proto.lavanet.lava.spec.Spec}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.getSpec = function() {
  return /** @type{?proto.lavanet.lava.spec.Spec} */ (
    jspb.Message.getWrapperField(this, lavanet_lava_spec_spec_pb.Spec, 3));
};


/**
 * @param {?proto.lavanet.lava.spec.Spec|undefined} value
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} returns this
*/
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lavanet.lava.pairing.QuerySdkPairingResponse} returns this
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lavanet.lava.pairing.QuerySdkPairingResponse.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.lavanet.lava.pairing);
