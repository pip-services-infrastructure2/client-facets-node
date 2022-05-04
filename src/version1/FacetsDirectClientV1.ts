import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IFacetsClientV1 } from './IFacetsClientV1';
//import { IFacetsController } from 'service-facets-node';
import { FacetV1 } from './FacetV1';

export class FacetsDirectClientV1 extends DirectClient<any> implements IFacetsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-facets", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>> {
        let timing = this.instrument(correlationId, 'facets.get_facets_by_group');
        try {
            return await this._controller.getFacetsByGroup(correlationId, group, paging);
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
            return await this._controller.addFacet(correlationId, group, name);
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
            return await this._controller.removeFacet(correlationId, group, name);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteFacetsByGroup(correlationId: string, group: string): Promise<void> {
        let timing = this.instrument(correlationId, 'facets.delete_facats_by_group');
        
        try {
            await this._controller.deleteFacetsByGroup(correlationId, group);
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
            await this._controller.clear(correlationId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}