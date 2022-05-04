import { ConfigParams } from 'pip-services3-commons-nodex';

import { FacetsClientFixtureV1 } from './FacetsClientFixtureV1';
import { FacetsLambdaClientV1 } from '../../src/version1/FacetsLambdaClientV1';

suite('FacetsLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        "lambda.connection.protocol", "aws",
        "lambda.connection.arn", AWS_LAMDBA_ARN,
        "lambda.credential.access_id", AWS_ACCESS_ID,
        "lambda.credential.access_key", AWS_ACCESS_KEY,
        "lambda.options.connection_timeout", 30000
    );
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: FacetsLambdaClientV1;
    let fixture: FacetsClientFixtureV1;

    setup(async () => {
        client = new FacetsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new FacetsClientFixtureV1(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
    });

    test('Add and Remove Facets', async () => {
        await fixture.testAddAndRemoveFacets();
    });

});