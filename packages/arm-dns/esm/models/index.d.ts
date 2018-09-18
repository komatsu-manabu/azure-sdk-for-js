import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing ARecord.
 * An A record.
 *
 */
export interface ARecord {
    /**
     * @member {string} [ipv4Address] The IPv4 address of this A record.
     */
    ipv4Address?: string;
}
/**
 * @interface
 * An interface representing AaaaRecord.
 * An AAAA record.
 *
 */
export interface AaaaRecord {
    /**
     * @member {string} [ipv6Address] The IPv6 address of this AAAA record.
     */
    ipv6Address?: string;
}
/**
 * @interface
 * An interface representing MxRecord.
 * An MX record.
 *
 */
export interface MxRecord {
    /**
     * @member {number} [preference] The preference value for this MX record.
     */
    preference?: number;
    /**
     * @member {string} [exchange] The domain name of the mail host for this MX
     * record.
     */
    exchange?: string;
}
/**
 * @interface
 * An interface representing NsRecord.
 * An NS record.
 *
 */
export interface NsRecord {
    /**
     * @member {string} [nsdname] The name server name for this NS record.
     */
    nsdname?: string;
}
/**
 * @interface
 * An interface representing PtrRecord.
 * A PTR record.
 *
 */
export interface PtrRecord {
    /**
     * @member {string} [ptrdname] The PTR target domain name for this PTR
     * record.
     */
    ptrdname?: string;
}
/**
 * @interface
 * An interface representing SrvRecord.
 * An SRV record.
 *
 */
export interface SrvRecord {
    /**
     * @member {number} [priority] The priority value for this SRV record.
     */
    priority?: number;
    /**
     * @member {number} [weight] The weight value for this SRV record.
     */
    weight?: number;
    /**
     * @member {number} [port] The port value for this SRV record.
     */
    port?: number;
    /**
     * @member {string} [target] The target domain name for this SRV record.
     */
    target?: string;
}
/**
 * @interface
 * An interface representing TxtRecord.
 * A TXT record.
 *
 */
export interface TxtRecord {
    /**
     * @member {string[]} [value] The text value of this TXT record.
     */
    value?: string[];
}
/**
 * @interface
 * An interface representing CnameRecord.
 * A CNAME record.
 *
 */
export interface CnameRecord {
    /**
     * @member {string} [cname] The canonical name for this CNAME record.
     */
    cname?: string;
}
/**
 * @interface
 * An interface representing SoaRecord.
 * An SOA record.
 *
 */
export interface SoaRecord {
    /**
     * @member {string} [host] The domain name of the authoritative name server
     * for this SOA record.
     */
    host?: string;
    /**
     * @member {string} [email] The email contact for this SOA record.
     */
    email?: string;
    /**
     * @member {number} [serialNumber] The serial number for this SOA record.
     */
    serialNumber?: number;
    /**
     * @member {number} [refreshTime] The refresh value for this SOA record.
     */
    refreshTime?: number;
    /**
     * @member {number} [retryTime] The retry time for this SOA record.
     */
    retryTime?: number;
    /**
     * @member {number} [expireTime] The expire time for this SOA record.
     */
    expireTime?: number;
    /**
     * @member {number} [minimumTtl] The minimum value for this SOA record. By
     * convention this is used to determine the negative caching duration.
     */
    minimumTtl?: number;
}
/**
 * @interface
 * An interface representing CaaRecord.
 * A CAA record.
 *
 */
export interface CaaRecord {
    /**
     * @member {number} [flags] The flags for this CAA record as an integer
     * between 0 and 255.
     */
    flags?: number;
    /**
     * @member {string} [tag] The tag for this CAA record.
     */
    tag?: string;
    /**
     * @member {string} [value] The value for this CAA record.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing SubResource.
 * A reference to a another resource
 *
 */
export interface SubResource {
    /**
     * @member {string} [id] Resource Id.
     */
    id?: string;
}
/**
 * @interface
 * An interface representing RecordSet.
 * Describes a DNS record set (a collection of DNS records with the same name
 * and type).
 *
 * @extends BaseResource
 */
export interface RecordSet extends BaseResource {
    /**
     * @member {string} [id] The ID of the record set.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly id?: string;
    /**
     * @member {string} [name] The name of the record set.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly name?: string;
    /**
     * @member {string} [type] The type of the record set.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly type?: string;
    /**
     * @member {string} [etag] The etag of the record set.
     */
    etag?: string;
    /**
     * @member {{ [propertyName: string]: string }} [metadata] The metadata
     * attached to the record set.
     */
    metadata?: {
        [propertyName: string]: string;
    };
    /**
     * @member {number} [tTL] The TTL (time-to-live) of the records in the record
     * set.
     */
    tTL?: number;
    /**
     * @member {string} [fqdn] Fully qualified domain name of the record set.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly fqdn?: string;
    /**
     * @member {string} [provisioningState] provisioning State of the record set.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly provisioningState?: string;
    /**
     * @member {SubResource} [targetResource] A reference to an azure resource
     * from where the dns resource value is taken.
     */
    targetResource?: SubResource;
    /**
     * @member {ARecord[]} [aRecords] The list of A records in the record set.
     */
    aRecords?: ARecord[];
    /**
     * @member {AaaaRecord[]} [aaaaRecords] The list of AAAA records in the
     * record set.
     */
    aaaaRecords?: AaaaRecord[];
    /**
     * @member {MxRecord[]} [mxRecords] The list of MX records in the record set.
     */
    mxRecords?: MxRecord[];
    /**
     * @member {NsRecord[]} [nsRecords] The list of NS records in the record set.
     */
    nsRecords?: NsRecord[];
    /**
     * @member {PtrRecord[]} [ptrRecords] The list of PTR records in the record
     * set.
     */
    ptrRecords?: PtrRecord[];
    /**
     * @member {SrvRecord[]} [srvRecords] The list of SRV records in the record
     * set.
     */
    srvRecords?: SrvRecord[];
    /**
     * @member {TxtRecord[]} [txtRecords] The list of TXT records in the record
     * set.
     */
    txtRecords?: TxtRecord[];
    /**
     * @member {CnameRecord} [cnameRecord] The CNAME record in the  record set.
     */
    cnameRecord?: CnameRecord;
    /**
     * @member {SoaRecord} [soaRecord] The SOA record in the record set.
     */
    soaRecord?: SoaRecord;
    /**
     * @member {CaaRecord[]} [caaRecords] The list of CAA records in the record
     * set.
     */
    caaRecords?: CaaRecord[];
}
/**
 * @interface
 * An interface representing RecordSetUpdateParameters.
 * Parameters supplied to update a record set.
 *
 */
export interface RecordSetUpdateParameters {
    /**
     * @member {RecordSet} [recordSet] Specifies information about the record set
     * being updated.
     */
    recordSet?: RecordSet;
}
/**
 * @interface
 * An interface representing Resource.
 * Common properties of an Azure Resource Manager resource
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] Resource ID.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly id?: string;
    /**
     * @member {string} [name] Resource name.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly name?: string;
    /**
     * @member {string} [type] Resource type.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly type?: string;
    /**
     * @member {string} location Resource location.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing Zone.
 * Describes a DNS zone.
 *
 * @extends Resource
 */
export interface Zone extends Resource {
    /**
     * @member {string} [etag] The etag of the zone.
     */
    etag?: string;
    /**
     * @member {number} [maxNumberOfRecordSets] The maximum number of record sets
     * that can be created in this DNS zone.  This is a read-only property and
     * any attempt to set this value will be ignored.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly maxNumberOfRecordSets?: number;
    /**
     * @member {number} [numberOfRecordSets] The current number of record sets in
     * this DNS zone.  This is a read-only property and any attempt to set this
     * value will be ignored.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly numberOfRecordSets?: number;
    /**
     * @member {string[]} [nameServers] The name servers for this DNS zone. This
     * is a read-only property and any attempt to set this value will be ignored.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly nameServers?: string[];
    /**
     * @member {ZoneType} [zoneType] The type of this DNS zone (Public or
     * Private). Possible values include: 'Public', 'Private'. Default value:
     * 'Public' .
     */
    zoneType?: ZoneType;
    /**
     * @member {SubResource[]} [registrationVirtualNetworks] A list of references
     * to virtual networks that register hostnames in this DNS zone. This is a
     * only when ZoneType is Private.
     */
    registrationVirtualNetworks?: SubResource[];
    /**
     * @member {SubResource[]} [resolutionVirtualNetworks] A list of references
     * to virtual networks that resolve records in this DNS zone. This is a only
     * when ZoneType is Private.
     */
    resolutionVirtualNetworks?: SubResource[];
}
/**
 * @interface
 * An interface representing ZoneUpdate.
 * Describes a request to update a DNS zone.
 *
 */
export interface ZoneUpdate {
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing DnsResourceReferenceRequest.
 * Represents the properties of the Dns Resource Reference Request.
 *
 */
export interface DnsResourceReferenceRequest {
    /**
     * @member {SubResource[]} [targetResources] A list of references to azure
     * resources for which referencing dns records need to be queried.
     */
    targetResources?: SubResource[];
}
/**
 * @interface
 * An interface representing DnsResourceReference.
 * Represents a single Azure resource and its referencing DNS records.
 *
 */
export interface DnsResourceReference {
    /**
     * @member {SubResource[]} [dnsResources] A list of dns Records
     */
    dnsResources?: SubResource[];
    /**
     * @member {SubResource} [targetResource] A reference to an azure resource
     * from where the dns resource value is taken.
     */
    targetResource?: SubResource;
}
/**
 * @interface
 * An interface representing DnsResourceReferenceResult.
 * Represents the properties of the Dns Resource Reference Result.
 *
 */
export interface DnsResourceReferenceResult {
    /**
     * @member {DnsResourceReference[]} [dnsResourceReferences] The result of dns
     * resource reference request. A list of dns resource references for each of
     * the azure resource in the request
     */
    dnsResourceReferences?: DnsResourceReference[];
}
/**
 * @interface
 * An interface representing RecordSetsUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always overwrite the current record set. Specify the last-seen etag value
     * to prevent accidentally overwritting concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always overwrite the current record set. Specify the last-seen etag value
     * to prevent accidentally overwritting any concurrent changes.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] Set to '*' to allow a new record set to be
     * created, but to prevent updating an existing record set. Other values will
     * be ignored.
     */
    ifNoneMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always delete the current record set. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsListByTypeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsListByTypeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
    /**
     * @member {string} [recordsetnamesuffix] The suffix label of the record set
     * name that has to be used to filter the record set enumerations. If this
     * parameter is specified, Enumeration will return only records that end with
     * .<recordSetNameSuffix>
     */
    recordsetnamesuffix?: string;
}
/**
 * @interface
 * An interface representing RecordSetsListByDnsZoneOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsListByDnsZoneOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
    /**
     * @member {string} [recordsetnamesuffix] The suffix label of the record set
     * name that has to be used to filter the record set enumerations. If this
     * parameter is specified, Enumeration will return only records that end with
     * .<recordSetNameSuffix>
     */
    recordsetnamesuffix?: string;
}
/**
 * @interface
 * An interface representing RecordSetsListAllByDnsZoneOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsListAllByDnsZoneOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
    /**
     * @member {string} [recordSetNameSuffix] The suffix label of the record set
     * name that has to be used to filter the record set enumerations. If this
     * parameter is specified, Enumeration will return only records that end with
     * .<recordSetNameSuffix>
     */
    recordSetNameSuffix?: string;
}
/**
 * @interface
 * An interface representing ZonesCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always overwrite the current zone. Specify the last-seen etag value to
     * prevent accidentally overwritting any concurrent changes.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] Set to '*' to allow a new DNS zone to be
     * created, but to prevent updating an existing zone. Other values will be
     * ignored.
     */
    ifNoneMatch?: string;
}
/**
 * @interface
 * An interface representing ZonesDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always delete the current zone. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing ZonesUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always overwrite the current zone. Specify the last-seen etag value to
     * prevent accidentally overwritting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing ZonesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing ZonesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of DNS zones to return. If not
     * specified, returns up to 100 zones.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing ZonesBeginDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always delete the current zone. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing the RecordSetListResult.
 * The response to a record set List operation.
 *
 * @extends Array<RecordSet>
 */
export interface RecordSetListResult extends Array<RecordSet> {
    /**
     * @member {string} [nextLink] The continuation token for the next page of
     * results.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the ZoneListResult.
 * The response to a Zone List or ListAll operation.
 *
 * @extends Array<Zone>
 */
export interface ZoneListResult extends Array<Zone> {
    /**
     * @member {string} [nextLink] The continuation token for the next page of
     * results.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly nextLink?: string;
}
/**
 * Defines values for ZoneType.
 * Possible values include: 'Public', 'Private'
 * @readonly
 * @enum {string}
 */
export declare enum ZoneType {
    Public = "Public",
    Private = "Private"
}
/**
 * Defines values for RecordType.
 * Possible values include: 'A', 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR',
 * 'SOA', 'SRV', 'TXT'
 * @readonly
 * @enum {string}
 */
export declare enum RecordType {
    A = "A",
    AAAA = "AAAA",
    CAA = "CAA",
    CNAME = "CNAME",
    MX = "MX",
    NS = "NS",
    PTR = "PTR",
    SOA = "SOA",
    SRV = "SRV",
    TXT = "TXT"
}
/**
 * Contains response data for the update operation.
 */
export declare type RecordSetsUpdateResponse = RecordSet & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSet;
    };
};
/**
 * Contains response data for the createOrUpdate operation.
 */
export declare type RecordSetsCreateOrUpdateResponse = RecordSet & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSet;
    };
};
/**
 * Contains response data for the get operation.
 */
export declare type RecordSetsGetResponse = RecordSet & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSet;
    };
};
/**
 * Contains response data for the listByType operation.
 */
export declare type RecordSetsListByTypeResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the listByDnsZone operation.
 */
export declare type RecordSetsListByDnsZoneResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the listAllByDnsZone operation.
 */
export declare type RecordSetsListAllByDnsZoneResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the listByTypeNext operation.
 */
export declare type RecordSetsListByTypeNextResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the listByDnsZoneNext operation.
 */
export declare type RecordSetsListByDnsZoneNextResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the listAllByDnsZoneNext operation.
 */
export declare type RecordSetsListAllByDnsZoneNextResponse = RecordSetListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RecordSetListResult;
    };
};
/**
 * Contains response data for the createOrUpdate operation.
 */
export declare type ZonesCreateOrUpdateResponse = Zone & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Zone;
    };
};
/**
 * Contains response data for the get operation.
 */
export declare type ZonesGetResponse = Zone & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Zone;
    };
};
/**
 * Contains response data for the update operation.
 */
export declare type ZonesUpdateResponse = Zone & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Zone;
    };
};
/**
 * Contains response data for the listByResourceGroup operation.
 */
export declare type ZonesListByResourceGroupResponse = ZoneListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ZoneListResult;
    };
};
/**
 * Contains response data for the list operation.
 */
export declare type ZonesListResponse = ZoneListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ZoneListResult;
    };
};
/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export declare type ZonesListByResourceGroupNextResponse = ZoneListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ZoneListResult;
    };
};
/**
 * Contains response data for the listNext operation.
 */
export declare type ZonesListNextResponse = ZoneListResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ZoneListResult;
    };
};
/**
 * Contains response data for the getByTargetResources operation.
 */
export declare type DnsResourceReferenceGetByTargetResourcesResponse = DnsResourceReferenceResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DnsResourceReferenceResult;
    };
};
//# sourceMappingURL=index.d.ts.map