/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/defaultSecurityRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a DefaultSecurityRules. */
export class DefaultSecurityRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a DefaultSecurityRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all default security rules in a network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param [options] The optional parameters
   * @returns Promise<Models.DefaultSecurityRulesListResponse>
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DefaultSecurityRulesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param callback The callback
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  list(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityRuleListResult>, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): Promise<Models.DefaultSecurityRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DefaultSecurityRulesListResponse>;
  }

  /**
   * Get the specified default network security rule.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param defaultSecurityRuleName The name of the default security rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.DefaultSecurityRulesGetResponse>
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.DefaultSecurityRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param defaultSecurityRuleName The name of the default security rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param defaultSecurityRuleName The name of the default security rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
  get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityRule>, callback?: msRest.ServiceCallback<Models.SecurityRule>): Promise<Models.DefaultSecurityRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        defaultSecurityRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DefaultSecurityRulesGetResponse>;
  }

  /**
   * Gets all default security rules in a network security group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DefaultSecurityRulesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DefaultSecurityRulesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityRuleListResult>, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): Promise<Models.DefaultSecurityRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DefaultSecurityRulesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/defaultSecurityRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
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
      bodyMapper: Mappers.SecurityRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/defaultSecurityRules/{defaultSecurityRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
    Parameters.defaultSecurityRuleName,
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
      bodyMapper: Mappers.SecurityRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SecurityRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
