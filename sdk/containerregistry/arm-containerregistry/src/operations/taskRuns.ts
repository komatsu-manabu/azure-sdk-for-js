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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/taskRunsMappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClientContext } from "../containerRegistryManagementClientContext";

/** Class representing a TaskRuns. */
export class TaskRuns {
  private readonly client: ContainerRegistryManagementClientContext;

  /**
   * Create a TaskRuns.
   * @param {ContainerRegistryManagementClientContext} client Reference to the service client.
   */
  constructor(client: ContainerRegistryManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the detailed information for a given task run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsGetResponse>
   */
  get(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param callback The callback
   */
  get(resourceGroupName: string, registryName: string, taskRunName: string, callback: msRest.ServiceCallback<Models.TaskRun>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, registryName: string, taskRunName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TaskRun>): void;
  get(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TaskRun>, callback?: msRest.ServiceCallback<Models.TaskRun>): Promise<Models.TaskRunsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        taskRunName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TaskRunsGetResponse>;
  }

  /**
   * Creates a task run for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The name of task run.
   * @param taskRun The parameters of a run that needs to scheduled.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsCreateResponse>
   */
  create(resourceGroupName: string, registryName: string, taskRunName: string, taskRun: Models.TaskRun, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsCreateResponse> {
    return this.beginCreate(resourceGroupName,registryName,taskRunName,taskRun,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TaskRunsCreateResponse>;
  }

  /**
   * Deletes a specified task run resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The task run name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,registryName,taskRunName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates a task run with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The task run name.
   * @param updateParameters The parameters for updating a task run.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsUpdateResponse>
   */
  update(resourceGroupName: string, registryName: string, taskRunName: string, updateParameters: Models.TaskRunUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,registryName,taskRunName,updateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TaskRunsUpdateResponse>;
  }

  /**
   * Gets the detailed information for a given task run that includes all secrets.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsGetDetailsResponse>
   */
  getDetails(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsGetDetailsResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param callback The callback
   */
  getDetails(resourceGroupName: string, registryName: string, taskRunName: string, callback: msRest.ServiceCallback<Models.TaskRun>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The run request name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDetails(resourceGroupName: string, registryName: string, taskRunName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TaskRun>): void;
  getDetails(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TaskRun>, callback?: msRest.ServiceCallback<Models.TaskRun>): Promise<Models.TaskRunsGetDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        taskRunName,
        options
      },
      getDetailsOperationSpec,
      callback) as Promise<Models.TaskRunsGetDetailsResponse>;
  }

  /**
   * Lists all the task runs for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsListResponse>
   */
  list(resourceGroupName: string, registryName: string, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param callback The callback
   */
  list(resourceGroupName: string, registryName: string, callback: msRest.ServiceCallback<Models.TaskRunListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, registryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TaskRunListResult>): void;
  list(resourceGroupName: string, registryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TaskRunListResult>, callback?: msRest.ServiceCallback<Models.TaskRunListResult>): Promise<Models.TaskRunsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.TaskRunsListResponse>;
  }

  /**
   * Creates a task run for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The name of task run.
   * @param taskRun The parameters of a run that needs to scheduled.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, registryName: string, taskRunName: string, taskRun: Models.TaskRun, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        taskRunName,
        taskRun,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a specified task run resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The task run name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, registryName: string, taskRunName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        taskRunName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates a task run with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskRunName The task run name.
   * @param updateParameters The parameters for updating a task run.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, registryName: string, taskRunName: string, updateParameters: Models.TaskRunUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        taskRunName,
        updateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists all the task runs for a specified container registry.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskRunsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TaskRunsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TaskRunListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TaskRunListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TaskRunListResult>, callback?: msRest.ServiceCallback<Models.TaskRunListResult>): Promise<Models.TaskRunsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.TaskRunsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.taskRunName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getDetailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}/listDetails",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.taskRunName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskRunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.taskRunName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "taskRun",
    mapper: {
      ...Mappers.TaskRun,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TaskRun
    },
    201: {
      bodyMapper: Mappers.TaskRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.taskRunName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.taskRunName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateParameters",
    mapper: {
      ...Mappers.TaskRunUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TaskRun
    },
    201: {
      bodyMapper: Mappers.TaskRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.TaskRunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
