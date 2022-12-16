"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const FacetsNullClientV1_1 = require("../version1/FacetsNullClientV1");
const FacetsDirectClientV1_1 = require("../version1/FacetsDirectClientV1");
const FacetsCommandableHttpClientV1_1 = require("../version1/FacetsCommandableHttpClientV1");
class FacetsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(FacetsClientFactory.NullClientV1Descriptor, FacetsNullClientV1_1.FacetsNullClientV1);
        this.registerAsType(FacetsClientFactory.DirectClientV1Descriptor, FacetsDirectClientV1_1.FacetsDirectClientV1);
        this.registerAsType(FacetsClientFactory.HttpClientV1Descriptor, FacetsCommandableHttpClientV1_1.FacetsCommandableHttpClientV1);
    }
}
exports.FacetsClientFactory = FacetsClientFactory;
FacetsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-facets', 'factory', 'default', 'default', '1.0');
FacetsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-facets', 'client', 'null', 'default', '1.0');
FacetsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-facets', 'client', 'direct', 'default', '1.0');
FacetsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-facets', 'client', 'commandable-http', 'default', '1.0');
//# sourceMappingURL=FacetsClientFactory.js.map