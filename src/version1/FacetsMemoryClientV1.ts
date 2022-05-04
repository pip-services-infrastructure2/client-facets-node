import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IFacetsClientV1 } from './IFacetsClientV1';

import { FacetV1 } from './FacetV1';

export class FacetsMemoryClientV1 implements IFacetsClientV1 {
    protected _maxPageSize: number = 100;
    private _items: FacetV1[] = [];

    public async getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>> {
        let items = this._items.filter((item) => item.group == group && item.count > 0);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = items.length;
        
        if (skip > 0)
            items = items.slice(skip);
        items = items.slice(0, take);
                
        let page = new DataPage<FacetV1>(items, total);
        return page;
    }

    public async addFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        let item = this._items.find((item) => item.group == group && item.name == name);
        if (item != null) {
            item.count++;
        } else {
            item = new FacetV1(group, name, 1);
            this._items.push(item);
        }
        return item;
    }

    public async removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        let item = this._items.find((item) => item.group == group && item.name == name);
        if (item != null) {
            item.count = item.count > 0 ? item.count - 1 : 0;
        } else {
            item = new FacetV1(group, name, 0);
            this._items.push(item);
        }
        return item;
    }

    public async deleteFacetsByGroup(correlationId: string, group: string): Promise<void> {
        this._items = this._items.filter((item) => item.group != group);
    }

    public async clear(correlationId: string): Promise<void> {
        this._items = [];
    }

}