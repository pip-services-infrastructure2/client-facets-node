import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { FacetsMemoryPersistence } from 'service-facets-node';
import { FacetsController } from 'service-facets-node';
import { FacetsHttpServiceV1 } from 'service-facets-node';
import { FacetsHttpClientV1 } from '../../src/version1/FacetsHttpClientV1';
import { FacetsClientFixtureV1 } from './FacetsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('FacetsHttpClientV1', ()=> {
    let persistence: FacetsMemoryPersistence;
    let service: FacetsHttpServiceV1;
    let client: FacetsHttpClientV1;
    let fixture: FacetsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new FacetsMemoryPersistence();
        let controller = new FacetsController();

        service = new FacetsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-facets', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-facets', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-facets', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new FacetsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new FacetsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    setup(async () => {
        await persistence.clear(null);
    });

    test('Add and Remove Facets', async () => {
        await fixture.testAddAndRemoveFacets();
    });

});
