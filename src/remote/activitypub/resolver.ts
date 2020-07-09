import { getJson } from '../../misc/fetch';
import { IObject, isCollection, isOrderedCollection, isCollectionPage, isOrderedCollectionPage } from './type';

export default class Resolver {
	private history: Set<string>;

	constructor() {
		this.history = new Set();
	}

	public getHistory(): string[] {
		return Array.from(this.history);
	}

	public async resolveCollection(value: string | IObject) {
		const collection = typeof value === 'string'
			? await this.resolve(value)
			: value;

		if (isCollection(collection) || isOrderedCollection(collection) || isCollectionPage(collection) || isOrderedCollectionPage(collection)) {
			return collection;
		} else {
			throw new Error(`unknown collection type: ${collection.type}`);
		}
	}

	public async resolve(value: string | IObject): Promise<IObject> {
		if (value == null) {
			throw new Error('resolvee is null (or undefined)');
		}

		if (typeof value !== 'string') {
			return value;
		}

		if (this.history.has(value)) {
			throw new Error('cannot resolve already resolved one');
		}

		this.history.add(value);

		const object = await getJson(value, 'application/activity+json, application/ld+json');

		if (object == null || (
			Array.isArray(object['@context']) ?
				!object['@context'].includes('https://www.w3.org/ns/activitystreams') :
				object['@context'] !== 'https://www.w3.org/ns/activitystreams'
		)) {
			throw new Error('invalid response');
		}

		return object;
	}
}
