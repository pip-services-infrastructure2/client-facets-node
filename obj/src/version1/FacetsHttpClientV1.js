"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class FacetsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/facets');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getFacetsByGroup(correlationId, group, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.get_facets_by_group');
            try {
                return yield this.callCommand('get_facets_by_group', correlationId, {
                    group: group,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    addFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.add_facet');
            try {
                return yield this.callCommand('add_facet', correlationId, {
                    group: group,
                    name: name
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    removeFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.remove_facet');
            try {
                return yield this.callCommand('remove_facet', correlationId, {
                    group: group,
                    name: name
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteFacetsByGroup(correlationId, group) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.delete_facets_by_group');
            try {
                yield this.callCommand('delete_facets_by_group', correlationId, {
                    group: group
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    clear(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.clear');
            try {
                yield this.callCommand('clear', correlationId, {});
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.FacetsHttpClientV1 = FacetsHttpClientV1;
//# sourceMappingURL=FacetsHttpClientV1.js.map