import { FacetsMockClientV1 } from '../../src/version1/FacetsMockClientV1';
import { FacetsClientFixtureV1 } from './FacetsClientFixtureV1';

suite('FacetsMockClientV1', ()=> {
    let client: FacetsMockClientV1;
    let fixture: FacetsClientFixtureV1;

    suiteSetup(() => {
        client = new FacetsMockClientV1();
        fixture = new FacetsClientFixtureV1(client);
    });
    
    setup(async () => {
        await client.clear(null);
    });

    test('Add and Remove Facets', async () => {
        await fixture.testAddAndRemoveFacets();
    });

});
