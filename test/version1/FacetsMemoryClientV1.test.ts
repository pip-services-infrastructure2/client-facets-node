import { FacetsMemoryClientV1 } from '../../src/version1/FacetsMemoryClientV1';
import { FacetsClientFixtureV1 } from './FacetsClientFixtureV1';

suite('FacetsMemoryClientV1', ()=> {
    let client: FacetsMemoryClientV1;
    let fixture: FacetsClientFixtureV1;

    suiteSetup(() => {
        client = new FacetsMemoryClientV1();
        fixture = new FacetsClientFixtureV1(client);
    });
    
    setup(async () => {
        await client.clear(null);
    });

    test('Add and Remove Facets', async () => {
        await fixture.testAddAndRemoveFacets();
    });

});
