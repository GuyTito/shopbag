//vanilla indexedDb

const DB_NAME = 'shopbagDb';
const DB_VERSION = 1;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("bags", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async removeBag(bag) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['bags'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('bags');
            // let b = JSON.parse(JSON.stringify(bag))
			store.delete(bag);
		});	
	},
	async getBags() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['bags'],'readonly');
			trans.oncomplete = () => {
				resolve(bags);
			};
			
			let store = trans.objectStore('bags');
			let bags = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					bags.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async addBag(bag) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['bags'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('bags');
			store.add(JSON.parse(JSON.stringify(bag)));

		});
	
	},

	async updateBag(bag) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['bags'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('bags');
			store.put(JSON.parse(JSON.stringify(bag)));

		});
	
	}

}