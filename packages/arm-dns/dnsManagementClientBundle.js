var dnsManagementClient=function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(r){return e[r]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){e.exports=msRest},function(e,r){e.exports=msRestAzure},function(e,r,t){"use strict";t.r(r);var a={};t.r(a),t.d(a,"ZoneType",function(){return i}),t.d(a,"RecordType",function(){return p});var n={};t.r(n),t.d(n,"CloudError",function(){return c}),t.d(n,"BaseResource",function(){return l}),t.d(n,"ARecord",function(){return y}),t.d(n,"AaaaRecord",function(){return N}),t.d(n,"MxRecord",function(){return f}),t.d(n,"NsRecord",function(){return R}),t.d(n,"PtrRecord",function(){return h}),t.d(n,"SrvRecord",function(){return z}),t.d(n,"TxtRecord",function(){return S}),t.d(n,"CnameRecord",function(){return b}),t.d(n,"SoaRecord",function(){return P}),t.d(n,"CaaRecord",function(){return g}),t.d(n,"SubResource",function(){return M}),t.d(n,"RecordSet",function(){return v}),t.d(n,"RecordSetUpdateParameters",function(){return O}),t.d(n,"Resource",function(){return T}),t.d(n,"Zone",function(){return q}),t.d(n,"ZoneUpdate",function(){return C}),t.d(n,"DnsResourceReferenceRequest",function(){return A}),t.d(n,"DnsResourceReference",function(){return x}),t.d(n,"DnsResourceReferenceResult",function(){return G}),t.d(n,"RecordSetListResult",function(){return w}),t.d(n,"ZoneListResult",function(){return k});var o={};t.r(o),t.d(o,"RecordSet",function(){return v}),t.d(o,"BaseResource",function(){return l}),t.d(o,"SubResource",function(){return M}),t.d(o,"ARecord",function(){return y}),t.d(o,"AaaaRecord",function(){return N}),t.d(o,"MxRecord",function(){return f}),t.d(o,"NsRecord",function(){return R}),t.d(o,"PtrRecord",function(){return h}),t.d(o,"SrvRecord",function(){return z}),t.d(o,"TxtRecord",function(){return S}),t.d(o,"CnameRecord",function(){return b}),t.d(o,"SoaRecord",function(){return P}),t.d(o,"CaaRecord",function(){return g}),t.d(o,"CloudError",function(){return c}),t.d(o,"RecordSetListResult",function(){return w}),t.d(o,"Resource",function(){return T}),t.d(o,"Zone",function(){return q});var s={};t.r(s),t.d(s,"Zone",function(){return q}),t.d(s,"Resource",function(){return T}),t.d(s,"BaseResource",function(){return l}),t.d(s,"SubResource",function(){return M}),t.d(s,"CloudError",function(){return c}),t.d(s,"ZoneUpdate",function(){return C}),t.d(s,"ZoneListResult",function(){return k}),t.d(s,"RecordSet",function(){return v}),t.d(s,"ARecord",function(){return y}),t.d(s,"AaaaRecord",function(){return N}),t.d(s,"MxRecord",function(){return f}),t.d(s,"NsRecord",function(){return R}),t.d(s,"PtrRecord",function(){return h}),t.d(s,"SrvRecord",function(){return z}),t.d(s,"TxtRecord",function(){return S}),t.d(s,"CnameRecord",function(){return b}),t.d(s,"SoaRecord",function(){return P}),t.d(s,"CaaRecord",function(){return g});var i,p,u={};t.r(u),t.d(u,"DnsResourceReferenceRequest",function(){return A}),t.d(u,"SubResource",function(){return M}),t.d(u,"DnsResourceReferenceResult",function(){return G}),t.d(u,"DnsResourceReference",function(){return x}),t.d(u,"CloudError",function(){return c}),function(e){e.Public="Public",e.Private="Private"}(i||(i={})),function(e){e.A="A",e.AAAA="AAAA",e.CAA="CAA",e.CNAME="CNAME",e.MX="MX",e.NS="NS",e.PTR="PTR",e.SOA="SOA",e.SRV="SRV",e.TXT="TXT"}(p||(p={}));var m=t(1),d=function(){return(d=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},c=m.CloudErrorMapper,l=m.BaseResourceMapper,y={serializedName:"ARecord",type:{name:"Composite",className:"ARecord",modelProperties:{ipv4Address:{serializedName:"ipv4Address",type:{name:"String"}}}}},N={serializedName:"AaaaRecord",type:{name:"Composite",className:"AaaaRecord",modelProperties:{ipv6Address:{serializedName:"ipv6Address",type:{name:"String"}}}}},f={serializedName:"MxRecord",type:{name:"Composite",className:"MxRecord",modelProperties:{preference:{serializedName:"preference",type:{name:"Number"}},exchange:{serializedName:"exchange",type:{name:"String"}}}}},R={serializedName:"NsRecord",type:{name:"Composite",className:"NsRecord",modelProperties:{nsdname:{serializedName:"nsdname",type:{name:"String"}}}}},h={serializedName:"PtrRecord",type:{name:"Composite",className:"PtrRecord",modelProperties:{ptrdname:{serializedName:"ptrdname",type:{name:"String"}}}}},z={serializedName:"SrvRecord",type:{name:"Composite",className:"SrvRecord",modelProperties:{priority:{serializedName:"priority",type:{name:"Number"}},weight:{serializedName:"weight",type:{name:"Number"}},port:{serializedName:"port",type:{name:"Number"}},target:{serializedName:"target",type:{name:"String"}}}}},S={serializedName:"TxtRecord",type:{name:"Composite",className:"TxtRecord",modelProperties:{value:{serializedName:"value",type:{name:"Sequence",element:{type:{name:"String"}}}}}}},b={serializedName:"CnameRecord",type:{name:"Composite",className:"CnameRecord",modelProperties:{cname:{serializedName:"cname",type:{name:"String"}}}}},P={serializedName:"SoaRecord",type:{name:"Composite",className:"SoaRecord",modelProperties:{host:{serializedName:"host",type:{name:"String"}},email:{serializedName:"email",type:{name:"String"}},serialNumber:{serializedName:"serialNumber",type:{name:"Number"}},refreshTime:{serializedName:"refreshTime",type:{name:"Number"}},retryTime:{serializedName:"retryTime",type:{name:"Number"}},expireTime:{serializedName:"expireTime",type:{name:"Number"}},minimumTtl:{serializedName:"minimumTTL",type:{name:"Number"}}}}},g={serializedName:"CaaRecord",type:{name:"Composite",className:"CaaRecord",modelProperties:{flags:{serializedName:"flags",type:{name:"Number"}},tag:{serializedName:"tag",type:{name:"String"}},value:{serializedName:"value",type:{name:"String"}}}}},M={serializedName:"SubResource",type:{name:"Composite",className:"SubResource",modelProperties:{id:{serializedName:"id",type:{name:"String"}}}}},v={serializedName:"RecordSet",type:{name:"Composite",className:"RecordSet",modelProperties:{id:{readOnly:!0,serializedName:"id",type:{name:"String"}},name:{readOnly:!0,serializedName:"name",type:{name:"String"}},type:{readOnly:!0,serializedName:"type",type:{name:"String"}},etag:{serializedName:"etag",type:{name:"String"}},metadata:{serializedName:"properties.metadata",type:{name:"Dictionary",value:{type:{name:"String"}}}},tTL:{serializedName:"properties.TTL",type:{name:"Number"}},fqdn:{readOnly:!0,serializedName:"properties.fqdn",type:{name:"String"}},provisioningState:{readOnly:!0,serializedName:"properties.provisioningState",type:{name:"String"}},targetResource:{serializedName:"properties.targetResource",type:{name:"Composite",className:"SubResource"}},aRecords:{serializedName:"properties.ARecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"ARecord"}}}},aaaaRecords:{serializedName:"properties.AAAARecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"AaaaRecord"}}}},mxRecords:{serializedName:"properties.MXRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"MxRecord"}}}},nsRecords:{serializedName:"properties.NSRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"NsRecord"}}}},ptrRecords:{serializedName:"properties.PTRRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"PtrRecord"}}}},srvRecords:{serializedName:"properties.SRVRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"SrvRecord"}}}},txtRecords:{serializedName:"properties.TXTRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"TxtRecord"}}}},cnameRecord:{serializedName:"properties.CNAMERecord",type:{name:"Composite",className:"CnameRecord"}},soaRecord:{serializedName:"properties.SOARecord",type:{name:"Composite",className:"SoaRecord"}},caaRecords:{serializedName:"properties.caaRecords",type:{name:"Sequence",element:{type:{name:"Composite",className:"CaaRecord"}}}}}}},O={serializedName:"RecordSetUpdateParameters",type:{name:"Composite",className:"RecordSetUpdateParameters",modelProperties:{recordSet:{serializedName:"RecordSet",type:{name:"Composite",className:"RecordSet"}}}}},T={serializedName:"Resource",type:{name:"Composite",className:"Resource",modelProperties:{id:{readOnly:!0,serializedName:"id",type:{name:"String"}},name:{readOnly:!0,serializedName:"name",type:{name:"String"}},type:{readOnly:!0,serializedName:"type",type:{name:"String"}},location:{required:!0,serializedName:"location",type:{name:"String"}},tags:{serializedName:"tags",type:{name:"Dictionary",value:{type:{name:"String"}}}}}}},q={serializedName:"Zone",type:{name:"Composite",className:"Zone",modelProperties:d({},T.type.modelProperties,{etag:{serializedName:"etag",type:{name:"String"}},maxNumberOfRecordSets:{readOnly:!0,serializedName:"properties.maxNumberOfRecordSets",type:{name:"Number"}},numberOfRecordSets:{readOnly:!0,serializedName:"properties.numberOfRecordSets",type:{name:"Number"}},nameServers:{readOnly:!0,serializedName:"properties.nameServers",type:{name:"Sequence",element:{type:{name:"String"}}}},zoneType:{serializedName:"properties.zoneType",defaultValue:"Public",type:{name:"Enum",allowedValues:["Public","Private"]}},registrationVirtualNetworks:{serializedName:"properties.registrationVirtualNetworks",type:{name:"Sequence",element:{type:{name:"Composite",className:"SubResource"}}}},resolutionVirtualNetworks:{serializedName:"properties.resolutionVirtualNetworks",type:{name:"Sequence",element:{type:{name:"Composite",className:"SubResource"}}}}})}},C={serializedName:"ZoneUpdate",type:{name:"Composite",className:"ZoneUpdate",modelProperties:{tags:{serializedName:"tags",type:{name:"Dictionary",value:{type:{name:"String"}}}}}}},A={serializedName:"DnsResourceReferenceRequest",type:{name:"Composite",className:"DnsResourceReferenceRequest",modelProperties:{targetResources:{serializedName:"properties.targetResources",type:{name:"Sequence",element:{type:{name:"Composite",className:"SubResource"}}}}}}},x={serializedName:"DnsResourceReference",type:{name:"Composite",className:"DnsResourceReference",modelProperties:{dnsResources:{serializedName:"dnsResources",type:{name:"Sequence",element:{type:{name:"Composite",className:"SubResource"}}}},targetResource:{serializedName:"targetResource",type:{name:"Composite",className:"SubResource"}}}}},G={serializedName:"DnsResourceReferenceResult",type:{name:"Composite",className:"DnsResourceReferenceResult",modelProperties:{dnsResourceReferences:{serializedName:"properties.dnsResourceReferences",type:{name:"Sequence",element:{type:{name:"Composite",className:"DnsResourceReference"}}}}}}},w={serializedName:"RecordSetListResult",type:{name:"Composite",className:"RecordSetListResult",modelProperties:{value:{serializedName:"",type:{name:"Sequence",element:{type:{name:"Composite",className:"RecordSet"}}}},nextLink:{readOnly:!0,serializedName:"nextLink",type:{name:"String"}}}}},k={serializedName:"ZoneListResult",type:{name:"Composite",className:"ZoneListResult",modelProperties:{value:{serializedName:"",type:{name:"Sequence",element:{type:{name:"Composite",className:"Zone"}}}},nextLink:{readOnly:!0,serializedName:"nextLink",type:{name:"String"}}}}},L=t(0),E={parameterPath:"acceptLanguage",mapper:{serializedName:"accept-language",defaultValue:"en-US",type:{name:"String"}}},Z={parameterPath:"apiVersion",mapper:{required:!0,serializedName:"api-version",type:{name:"String"}}},D={parameterPath:["options","ifMatch"],mapper:{serializedName:"If-Match",type:{name:"String"}}},U={parameterPath:["options","ifNoneMatch"],mapper:{serializedName:"If-None-Match",type:{name:"String"}}},_={parameterPath:"nextPageLink",mapper:{required:!0,serializedName:"nextLink",type:{name:"String"}},skipEncoding:!0},I={parameterPath:["options","recordsetnamesuffix"],mapper:{serializedName:"$recordsetnamesuffix",type:{name:"String"}}},j={parameterPath:"recordType",mapper:{required:!0,serializedName:"recordType",type:{name:"Enum",allowedValues:["A","AAAA","CAA","CNAME","MX","NS","PTR","SOA","SRV","TXT"]}}},B={parameterPath:"relativeRecordSetName",mapper:{required:!0,serializedName:"relativeRecordSetName",type:{name:"String"}},skipEncoding:!0},V={parameterPath:"resourceGroupName",mapper:{required:!0,serializedName:"resourceGroupName",type:{name:"String"}}},X={parameterPath:"subscriptionId",mapper:{required:!0,serializedName:"subscriptionId",type:{name:"String"}}},$={parameterPath:["options","top"],mapper:{serializedName:"$top",type:{name:"Number"}}},H={parameterPath:"zoneName",mapper:{required:!0,serializedName:"zoneName",type:{name:"String"}}},F=function(){return(F=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},J=function(){function e(e){this.client=e}return e.prototype.update=function(e,r,t,a,n,o,s){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,relativeRecordSetName:t,recordType:a,parameters:n,options:o},Q,s)},e.prototype.createOrUpdate=function(e,r,t,a,n,o,s){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,relativeRecordSetName:t,recordType:a,parameters:n,options:o},W,s)},e.prototype.deleteMethod=function(e,r,t,a,n,o){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,relativeRecordSetName:t,recordType:a,options:n},Y,o)},e.prototype.get=function(e,r,t,a,n,o){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,relativeRecordSetName:t,recordType:a,options:n},ee,o)},e.prototype.listByType=function(e,r,t,a,n){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,recordType:t,options:a},re,n)},e.prototype.listByDnsZone=function(e,r,t,a){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,options:t},te,a)},e.prototype.listAllByDnsZone=function(e,r,t,a){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,options:t},ae,a)},e.prototype.listByTypeNext=function(e,r,t){return this.client.sendOperationRequest({nextPageLink:e,options:r},ne,t)},e.prototype.listByDnsZoneNext=function(e,r,t){return this.client.sendOperationRequest({nextPageLink:e,options:r},oe,t)},e.prototype.listAllByDnsZoneNext=function(e,r,t){return this.client.sendOperationRequest({nextPageLink:e,options:r},se,t)},e}(),K=new L.Serializer(o),Q={httpMethod:"PATCH",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",urlParameters:[V,H,B,j,X],queryParameters:[Z],headerParameters:[D,E],requestBody:{parameterPath:"parameters",mapper:F({},v,{required:!0})},responses:{200:{bodyMapper:v},default:{bodyMapper:c}},serializer:K},W={httpMethod:"PUT",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",urlParameters:[V,H,B,j,X],queryParameters:[Z],headerParameters:[D,U,E],requestBody:{parameterPath:"parameters",mapper:F({},v,{required:!0})},responses:{200:{bodyMapper:v},201:{bodyMapper:v},default:{bodyMapper:c}},serializer:K},Y={httpMethod:"DELETE",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",urlParameters:[V,H,B,j,X],queryParameters:[Z],headerParameters:[D,E],responses:{200:{},204:{},default:{bodyMapper:c}},serializer:K},ee={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",urlParameters:[V,H,B,j,X],queryParameters:[Z],headerParameters:[E],responses:{200:{bodyMapper:v},default:{bodyMapper:c}},serializer:K},re={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}",urlParameters:[V,H,j,X],queryParameters:[$,I,Z],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},te={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/recordsets",urlParameters:[V,H,X],queryParameters:[$,I,Z],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},ae={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/all",urlParameters:[V,H,X],queryParameters:[$,{parameterPath:["options","recordSetNameSuffix"],mapper:{serializedName:"$recordsetnamesuffix",type:{name:"String"}}},Z],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},ne={httpMethod:"GET",baseUrl:"https://management.azure.com",path:"{nextLink}",urlParameters:[_],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},oe={httpMethod:"GET",baseUrl:"https://management.azure.com",path:"{nextLink}",urlParameters:[_],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},se={httpMethod:"GET",baseUrl:"https://management.azure.com",path:"{nextLink}",urlParameters:[_],headerParameters:[E],responses:{200:{bodyMapper:w},default:{bodyMapper:c}},serializer:K},ie=function(){return(ie=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},pe=function(){function e(e){this.client=e}return e.prototype.createOrUpdate=function(e,r,t,a,n){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,parameters:t,options:a},me,n)},e.prototype.deleteMethod=function(e,r,t){return this.beginDeleteMethod(e,r,t).then(function(e){return e.pollUntilFinished()})},e.prototype.get=function(e,r,t,a){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,options:t},de,a)},e.prototype.update=function(e,r,t,a,n){return this.client.sendOperationRequest({resourceGroupName:e,zoneName:r,parameters:t,options:a},ce,n)},e.prototype.listByResourceGroup=function(e,r,t){return this.client.sendOperationRequest({resourceGroupName:e,options:r},le,t)},e.prototype.list=function(e,r){return this.client.sendOperationRequest({options:e},ye,r)},e.prototype.beginDeleteMethod=function(e,r,t){return this.client.sendLRORequest({resourceGroupName:e,zoneName:r,options:t},Ne,t)},e.prototype.listByResourceGroupNext=function(e,r,t){return this.client.sendOperationRequest({nextPageLink:e,options:r},fe,t)},e.prototype.listNext=function(e,r,t){return this.client.sendOperationRequest({nextPageLink:e,options:r},Re,t)},e}(),ue=new L.Serializer(s),me={httpMethod:"PUT",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",urlParameters:[V,H,X],queryParameters:[Z],headerParameters:[D,U,E],requestBody:{parameterPath:"parameters",mapper:ie({},q,{required:!0})},responses:{200:{bodyMapper:q},201:{bodyMapper:q},default:{bodyMapper:c}},serializer:ue},de={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",urlParameters:[V,H,X],queryParameters:[Z],headerParameters:[E],responses:{200:{bodyMapper:q},default:{bodyMapper:c}},serializer:ue},ce={httpMethod:"PATCH",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",urlParameters:[V,H,X],queryParameters:[Z],headerParameters:[D,E],requestBody:{parameterPath:"parameters",mapper:ie({},C,{required:!0})},responses:{200:{bodyMapper:q},default:{bodyMapper:c}},serializer:ue},le={httpMethod:"GET",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",urlParameters:[V,X],queryParameters:[$,Z],headerParameters:[E],responses:{200:{bodyMapper:k},default:{bodyMapper:c}},serializer:ue},ye={httpMethod:"GET",path:"subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",urlParameters:[X],queryParameters:[$,Z],headerParameters:[E],responses:{200:{bodyMapper:k},default:{bodyMapper:c}},serializer:ue},Ne={httpMethod:"DELETE",path:"subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",urlParameters:[V,H,X],queryParameters:[Z],headerParameters:[D,E],responses:{200:{},202:{},204:{},default:{bodyMapper:c}},serializer:ue},fe={httpMethod:"GET",baseUrl:"https://management.azure.com",path:"{nextLink}",urlParameters:[_],headerParameters:[E],responses:{200:{bodyMapper:k},default:{bodyMapper:c}},serializer:ue},Re={httpMethod:"GET",baseUrl:"https://management.azure.com",path:"{nextLink}",urlParameters:[_],headerParameters:[E],responses:{200:{bodyMapper:k},default:{bodyMapper:c}},serializer:ue},he=function(){return(he=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},ze=function(){function e(e){this.client=e}return e.prototype.getByTargetResources=function(e,r,t){return this.client.sendOperationRequest({parameters:e,options:r},be,t)},e}(),Se=new L.Serializer(u),be={httpMethod:"POST",path:"subscriptions/{subscriptionId}/providers/Microsoft.Network/getDnsResourceReference",urlParameters:[X],queryParameters:[Z],headerParameters:[E],requestBody:{parameterPath:"parameters",mapper:he({},A,{required:!0})},responses:{200:{bodyMapper:G},default:{bodyMapper:c}},serializer:Se},Pe=function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function a(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),ge="arm-dns",Me="1.0.0",ve=function(e){function r(r,t,a,n){var o=this;if(void 0==r)throw new Error("'credentials' cannot be null.");if(void 0==t)throw new Error("'subscriptionId' cannot be null.");return n||(n={}),(o=e.call(this,r,n)||this).apiVersion="2018-05-01",o.acceptLanguage="en-US",o.longRunningOperationRetryTimeout=30,o.baseUri=a,o.baseUri||(o.baseUri="https://management.azure.com"),o.requestContentType="application/json; charset=utf-8",o.credentials=r,o.subscriptionId=t,o.addUserAgentInfo(ge+"/"+Me),null!==n.acceptLanguage&&void 0!==n.acceptLanguage&&(o.acceptLanguage=n.acceptLanguage),null!==n.longRunningOperationRetryTimeout&&void 0!==n.longRunningOperationRetryTimeout&&(o.longRunningOperationRetryTimeout=n.longRunningOperationRetryTimeout),o}return Pe(r,e),r}(m.AzureServiceClient);t.d(r,"DnsManagementClient",function(){return Te}),t.d(r,"DnsManagementClientContext",function(){return ve}),t.d(r,"DnsManagementModels",function(){return a}),t.d(r,"DnsManagementMappers",function(){return n}),t.d(r,"RecordSets",function(){return J}),t.d(r,"Zones",function(){return pe}),t.d(r,"DnsResourceReferenceOperations",function(){return ze});var Oe=function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function a(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),Te=function(e){function r(r,t,a,n){var o=e.call(this,r,t,a,n)||this;return o.recordSets=new J(o),o.zones=new pe(o),o.dnsResourceReference=new ze(o),o}return Oe(r,e),r}(ve)}]);
//# sourceMappingURL=dnsManagementClientBundle.js.map