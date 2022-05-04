import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { FacetsNullClientV1 } from '../version1/FacetsNullClientV1';
import { FacetsDirectClientV1 } from '../version1/FacetsDirectClientV1';
import { FacetsHttpClientV1 } from '../version1/FacetsHttpClientV1';

export class FacetsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-facets', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-facets', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-facets', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-facets', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(FacetsClientFactory.NullClientV1Descriptor, FacetsNullClientV1);
		this.registerAsType(FacetsClientFactory.DirectClientV1Descriptor, FacetsDirectClientV1);
		this.registerAsType(FacetsClientFactory.HttpClientV1Descriptor, FacetsHttpClientV1);
	}
	
}
