import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { FacetV1 } from './FacetV1';
import { IFacetsClientV1 } from './IFacetsClientV1';
export declare class FacetsCommandableLambdaClientV1 extends CommandableLambdaClient implements IFacetsClientV1 {
    constructor(config?: any);
    getFacetsByGroup(correlationId: string, group: string, paging: PagingParams): Promise<DataPage<FacetV1>>;
    addFacet(correlationId: string, group: string, name: string): Promise<FacetV1>;
    removeFacet(correlationId: string, group: string, name: string): Promise<FacetV1>;
    deleteFacetsByGroup(correlationId: string, group: string): Promise<void>;
    clear(correlationId: string): Promise<void>;
}
