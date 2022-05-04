import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { FacetsMemoryPersistence } from 'service-facets-node';
import { FacetsController } from 'service-facets-node';
import { FacetsDirectClientV1 } from '../../src/version1/FacetsDirectClientV1';
import { FacetsClientFixtureV1 } from './FacetsClientFixtureV1';

suite('FacetsDirectClientV1', ()=> {
    let persistence: FacetsMemoryPersistence;
    let client: FacetsDirectClientV1;
    let fixture: FacetsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new FacetsMemoryPersistence();
        let controller = new FacetsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-facets', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-facets', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new FacetsDirectClientV1();
        client.setReferences(references);

        fixture = new FacetsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    setup(async () => {
        await persistence.clear(null);
    });

    test('Add and Remove Facets', async () => {
        await fixture.testAddAndRemoveFacets();
    });

});
