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
exports.FacetsMockClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const FacetV1_1 = require("./FacetV1");
class FacetsMockClientV1 {
    constructor() {
        this._maxPageSize = 100;
        this._items = [];
    }
    getFacetsByGroup(correlationId, group, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = this._items.filter((item) => item.group == group && item.count > 0);
            // Extract a page
            paging = paging != null ? paging : new pip_services3_commons_nodex_1.PagingParams();
            let skip = paging.getSkip(-1);
            let take = paging.getTake(this._maxPageSize);
            let total = null;
            if (paging.total)
                total = items.length;
            if (skip > 0)
                items = items.slice(skip);
            items = items.slice(0, take);
            let page = new pip_services3_commons_nodex_2.DataPage(items, total);
            return page;
        });
    }
    addFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = this._items.find((item) => item.group == group && item.name == name);
            if (item != null) {
                item.count++;
            }
            else {
                item = new FacetV1_1.FacetV1(group, name, 1);
                this._items.push(item);
            }
            return item;
        });
    }
    removeFacet(correlationId, group, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = this._items.find((item) => item.group == group && item.name == name);
            if (item != null) {
                item.count = item.count > 0 ? item.count - 1 : 0;
            }
            else {
                item = new FacetV1_1.FacetV1(group, name, 0);
                this._items.push(item);
            }
            return item;
        });
    }
    deleteFacetsByGroup(correlationId, group) {
        return __awaiter(this, void 0, void 0, function* () {
            this._items = this._items.filter((item) => item.group != group);
        });
    }
    clear(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._items = [];
        });
    }
}
exports.FacetsMockClientV1 = FacetsMockClientV1;
//# sourceMappingURL=FacetsMockClientV1.js.map