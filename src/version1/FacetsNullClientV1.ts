import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IFacetsClientV1 } from './IFacetsClientV1';
import { FacetV1 } from './FacetV1';

export class FacetsNullClientV1 implements IFacetsClientV1 {

    public async getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>> {
        return new DataPage<FacetV1>();
    }

    public async addFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        return new FacetV1(group, name, 1);
    }

    public async removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        return new FacetV1(group, name, 0);
    }

    public async deleteFacetsByGroup(correlationId: string, group: string): Promise<void> {
        return;
    }

    public async clear(correlationId: string): Promise<void> {
        return;
    }

}