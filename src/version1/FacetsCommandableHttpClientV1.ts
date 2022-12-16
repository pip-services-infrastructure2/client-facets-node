import { ConfigParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { FacetV1 } from './FacetV1';
import { IFacetsClientV1 } from './IFacetsClientV1';

export class FacetsCommandableHttpClientV1 extends CommandableHttpClient implements IFacetsClientV1 {

    constructor(config?: any) {
        super('v1/facets');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>> {
        return await this.callCommand(
            'get_facets_by_group',
            correlationId,
            {
                group: group,
                paging: paging
            }
        );
    }

    public async addFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        return await this.callCommand(
            'add_facet',
            correlationId,
            {
                group: group,
                name: name
            }
        );
    }

    public async removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        return await this.callCommand(
            'remove_facet',
            correlationId,
            {
                group: group,
                name: name
            }
        );
    }

    public async deleteFacetsByGroup(correlationId: string, group: string): Promise<void> {
        await this.callCommand(
            'delete_facets_by_group',
            correlationId,
            {
                group: group
            }
        );
    }

    public async clear(correlationId: string): Promise<void> {
        await this.callCommand(
            'clear',
            correlationId,
            {}
        );
    }

}
