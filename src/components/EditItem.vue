<template>
    <div>
        <form @submit.prevent="updateItems" >
            <input type="text" v-model="item_name" name="item_name" required placeholder="shopping item">
            <input type="number" min="0.00" step="0.01" v-model="budget_price" name="budget_price" placeholder="budget price">
            <input type="number" min="0.00" step="0.01" v-model="market_price" name="market_price" placeholder="market price?">
            <input type="number" min="0" step="1" pattern="\d+" v-model="quantity" name="quantity" placeholder="quantity">
            <input type="number" min="0.00" step="0.01" v-model="bought_price" name="bought_price" placeholder="price you  bought">
            <input type="submit" id="add_item" value="Update" />
        </form>

        <!-- display item after adding -->
        <div v-for="item in items" :key="item.item_id">
            <span @click="populateIItemFields(item)" >{{item.item_name}} </span>
            <span>{{item.budget_price}} </span>
            <span>{{item.market_price}} </span>
            <span>{{item.quantity}}</span>
            <span>{{item.bought_price}} </span>
            <button @click="$emit('remove-item',item.item_id)" class="del">x</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "EdiItem",
    props: ['items'],
    data() {
        return {
            item_id: null,
            item_name: '',
            budget_price: null,
            market_price: null,
            purchased: null,
            bought_price: null,
            quantity: null
        }
    },
    methods: {
        resetFields(){
            this.item_id = null,
            this.item_name = ''
            this.budget_price = null
            this.market_price = null
            this.purchased = null
            this.bought_price = null
            this.quantity = null
        },
        updateItems(){
            if (this.item_id !== null) {
                const oldItem = {
                    item_id : this.item_id,
                    item_name: this.item_name,
                    budget_price: this.budget_price,
                    market_price: this.market_price,
                    purchased: this.purchased,
                    bought_price: this.bought_price,
                    quantity: this.quantity,
                }
                this.$emit("update-items", oldItem)
            } else {
                this.addItem()
            }

            this.resetFields()
        },
        addItem(){
            const newItem = {
                item_id : new Date().toISOString(),
                item_name: this.item_name,
                budget_price: this.budget_price,
                market_price: this.market_price,
                purchased: false,
                bought_price: this.bought_price,
                quantity: this.quantity,
            }
            this.$emit("add-item", newItem)
            this.resetFields()
        },
        populateIItemFields(item){
            this.item_id = item.item_id
            this.item_name = item.item_name
            this.budget_price = item.budget_price
            this.market_price = item.market_price
            this.purchased = item.purchased
            this.bought_price = item.bought_price
            this.quantity = item.quantity
        },
        
    }
}
</script>

<style scoped>


</style>