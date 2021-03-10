import Localbase from "localbase";

let db = new Localbase("shopbagDb");
db.config.debug = false;

export default {

  async getBags() {
    return await db.collection("bags").get();
  },

  async updateBag(bag) {
    await db.collection("bags").doc({id: bag.id}).set(bag);
    console.log("updated");
  },

  async addBag(bag) {
    await db.collection("bags").add(bag);
    console.log("added");
  },

  async removeBag(bag) {
    await db.collection("bags").doc({id: bag.id}).delete();
    console.log("deleted");
  },

  async removeItem(IDs){
    await db.collection('bags').doc({ id: IDs.bagId }).get().then(bag => {
        bag.items = bag.items.filter(item => item.item_id !== IDs.itemId)
        this.updateBag(bag)
        console.log('removed item')
    })
  },
  
};
