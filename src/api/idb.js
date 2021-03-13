import Localbase from "localbase";

let db = new Localbase("shopbagDb");
db.config.debug = true;

export default {

  async getBags() {
    return await db.collection("bags").get();
  },

  async updateBag(bag, msg='updated') {
    await db.collection("bags").doc({bag_id: bag.bag_id}).update(JSON.parse(JSON.stringify(bag)));
    console.log(msg);
  },

  async addBag(bag) {
    try {
      await db.collection("bags").add(JSON.parse(JSON.stringify(bag)));
      console.log("added");
    } catch (e) {
      console.log(e)
    }
    
  },

  async removeBag(bagId) {
    await db.collection("bags").doc({bag_id: bagId}).delete();
    console.log("deleted");
  },

  async removeItem(IDs){
    await db.collection('bags').doc({bag_id: IDs.bagId}).get().then(bag => {
        bag.items = bag.items.filter(item => item.item_id !== IDs.itemId)
        this.updateBag(bag, 'removed item')
    })
  },
  
};
