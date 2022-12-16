import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { FacetV1 } from './FacetV1';
import { IFacetsClientV1 } from './IFacetsClientV1';
export declare class FacetsCommandableHttpClientV1 extends CommandableHttpClient implements IFacetsClientV1 {
    constructor(config?: any);
    getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>>;
    addFacet(correlationId: string, group: string, name: string): Promise<FacetV1>;
    removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1>;
    deleteFacetsByGroup(correlationId: string, group: string): Promise<void>;
    clear(correlationId: string): Promise<void>;
}
