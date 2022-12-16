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
exports.FacetsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class FacetsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('facets');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getFacetsByGroup(correlationId, group, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_facets_by_group', correlationId, {
                group: group,
                paging: paging
            });
        });
    }
    addFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('add_facet', correlationId, {
                group: group,
                name: name
            });
        });
    }
    removeFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('remove_facet', correlationId, {
                group: group,
                name: name
            });
        });
    }
    deleteFacetsByGroup(correlationId, group) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('delete_facets_by_group', correlationId, {
                group: group
            });
        });
    }
    clear(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('clear', correlationId, {});
        });
    }
}
exports.FacetsCommandableLambdaClientV1 = FacetsCommandableLambdaClientV1;
//# sourceMappingURL=FacetsCommandableLambdaClientV1.js.map