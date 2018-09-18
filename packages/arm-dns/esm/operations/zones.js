/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as msRest from "ms-rest-js";
import * as Mappers from "../models/zonesMappers";
import * as Parameters from "../models/parameters";
/** Class representing a Zones. */
var Zones = /** @class */ (function () {
    /**
     * Create a Zones.
     * @param {DnsManagementClientContext} client Reference to the service client.
     */
    function Zones(client) {
        this.client = client;
    }
    Zones.prototype.createOrUpdate = function (resourceGroupName, zoneName, parameters, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            zoneName: zoneName,
            parameters: parameters,
            options: options
        }, createOrUpdateOperationSpec, callback);
    };
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    Zones.prototype.deleteMethod = function (resourceGroupName, zoneName, options) {
        return this.beginDeleteMethod(resourceGroupName, zoneName, options)
            .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
    };
    Zones.prototype.get = function (resourceGroupName, zoneName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            zoneName: zoneName,
            options: options
        }, getOperationSpec, callback);
    };
    Zones.prototype.update = function (resourceGroupName, zoneName, parameters, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            zoneName: zoneName,
            parameters: parameters,
            options: options
        }, updateOperationSpec, callback);
    };
    Zones.prototype.listByResourceGroup = function (resourceGroupName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            options: options
        }, listByResourceGroupOperationSpec, callback);
    };
    Zones.prototype.list = function (options, callback) {
        return this.client.sendOperationRequest({
            options: options
        }, listOperationSpec, callback);
    };
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesBeginDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    Zones.prototype.beginDeleteMethod = function (resourceGroupName, zoneName, options) {
        return this.client.sendLRORequest({
            resourceGroupName: resourceGroupName,
            zoneName: zoneName,
            options: options
        }, beginDeleteMethodOperationSpec, options);
    };
    Zones.prototype.listByResourceGroupNext = function (nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink: nextPageLink,
            options: options
        }, listByResourceGroupNextOperationSpec, callback);
    };
    Zones.prototype.listNext = function (nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink: nextPageLink,
            options: options
        }, listNextOperationSpec, callback);
    };
    return Zones;
}());
export { Zones };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var createOrUpdateOperationSpec = {
    httpMethod: "PUT",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.zoneName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.ifMatch,
        Parameters.ifNoneMatch,
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "parameters",
        mapper: __assign({}, Mappers.Zone, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Zone
        },
        201: {
            bodyMapper: Mappers.Zone
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.zoneName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.Zone
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var updateOperationSpec = {
    httpMethod: "PATCH",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.zoneName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.ifMatch,
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "parameters",
        mapper: __assign({}, Mappers.ZoneUpdate, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Zone
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listByResourceGroupOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.top,
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ZoneListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",
    urlParameters: [
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.top,
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ZoneListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var beginDeleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.zoneName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.ifMatch,
        Parameters.acceptLanguage
    ],
    responses: {
        200: {},
        202: {},
        204: {},
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listByResourceGroupNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ZoneListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ZoneListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
//# sourceMappingURL=zones.js.map