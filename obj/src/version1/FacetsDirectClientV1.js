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
exports.FacetsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class FacetsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-facets", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getFacetsByGroup(correlationId, group, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.get_facets_by_group');
            try {
                let res = yield this._controller.getFacetsByGroup(correlationId, group, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    addFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.add_facet');
            try {
                let res = yield this._controller.addFacet(correlationId, group, name);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    removeFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.remove_facet');
            try {
                let res = yield this._controller.removeFacet(correlationId, group, name);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteFacetsByGroup(correlationId, group) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.delete_facats_by_group');
            try {
                yield this._controller.deleteFacetsByGroup(correlationId, group);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    clear(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'facets.clear');
            try {
                yield this._controller.clear(correlationId);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.FacetsDirectClientV1 = FacetsDirectClientV1;
//# sourceMappingURL=FacetsDirectClientV1.js.map