<template>
    <div>
        <form @submit.prevent="addItem" >
            <input type="text" v-model="item_name" name="item_name" required placeholder="shopping item">
            <input type="number" min="0.00" step="0.01" v-model="budget_price" name="budget_price" placeholder="budget price">
            <input type="number" min="0.00" step="0.01" v-model="market_price" name="market_price" placeholder="market price?">
            <input type="number" min="0" step="1" pattern="\d+" v-model="quantity" name="quantity" placeholder="quantity">
            <input type="number" min="0.00" step="0.01" v-model="bought_price" name="bought_price" placeholder="price you  bought">
            <input type="submit" id="add_item" value="Add Item" />
        </form>
    </div>
</template>

<script>

export default {
    name: "AddItem",
    data() {
        return {
            item_name: '',
            budget_price: null,
            market_price: null,
            bought_price: null,
            quantity: null
        }
    },
    methods: {
        addItem(){
            const newItem = {
                item_id : new Date().toISOString(),
                item_name: this.item_name,
                budget_price: this.budget_price,
                market_price: this.market_price,
                purchased: false,
                bought_price: this.bought_price,
                quantity: this.quantity
            }
            this.$emit("add-item", newItem)

            this.item_name = ''
            this.budget_price = null
            this.market_price = null
            this.bought_price = null
            this.quantity = null
        }
    }
}
</script>

<style scoped>


</style>