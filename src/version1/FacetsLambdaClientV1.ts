import { ConfigParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { FacetV1 } from './FacetV1';
import { IFacetsClientV1 } from './IFacetsClientV1';

export class FacetsLambdaClientV1 extends CommandableLambdaClient implements IFacetsClientV1 {

    constructor(config?: any) {
        super('facets');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>> {
        let timing = this.instrument(correlationId, 'facets.get_facets_by_group');

        try {
            return await this.callCommand(
                'get_facets_by_group',
                correlationId,
                {
                    group: group,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async addFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        let timing = this.instrument(correlationId, 'facets.add_facet');

        try {
            return await this.callCommand(
                'add_facet',
                correlationId,
                {
                    group: group,
                    name: name
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1> {
        let timing = this.instrument(correlationId, 'facets.remove_facet');

        try {
            return await this.callCommand(
                'remove_facet',
                correlationId,
                {
                    group: group,
                    name: name
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteFacetsByGroup(correlationId: string, group: string): Promise<void> {
        let timing = this.instrument(correlationId, 'facets.delete_facets_by_group');

        try {
            await this.callCommand(
                'delete_facets_by_group',
                correlationId,
                {
                    group: group
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async clear(correlationId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'facets.clear');

        try {
            await this.callCommand(
                'clear',
                correlationId,
                {}
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
