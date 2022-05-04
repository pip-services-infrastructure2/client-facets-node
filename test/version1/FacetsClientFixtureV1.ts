const assert = require('chai').assert;

import { IFacetsClientV1 } from '../../src/version1/IFacetsClientV1';

export class FacetsClientFixtureV1 {
    private _client: IFacetsClientV1;
    
    constructor(client: IFacetsClientV1) {
        this._client = client;
    }

    public async testAddAndRemoveFacets() {
        // Add facet 1
        let facet = await this._client.addFacet(null, "test", "group1");

        assert.equal(facet.group, "test");
        assert.equal(facet.name, "group1");
        assert.equal(facet.count, 1);

        // Remove facet 1
        facet = await this._client.removeFacet(null, "test", "group2");

        assert.equal(facet.group, "test");
        assert.equal(facet.name, "group2");
        assert.equal(facet.count, 0);

        // Read facets
        let page = await this._client.getFacetsByGroup(null, 'test', null);

        assert.lengthOf(page.data, 1);

        // Delete facets
        await this._client.deleteFacetsByGroup(null, 'test');

        // Read facets
        page = await this._client.getFacetsByGroup(null, 'test', null);

        assert.lengthOf(page.data, 0);
    }
}
