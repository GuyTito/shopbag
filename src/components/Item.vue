<template>
    <div :class="{'is-purchased': item.purchased}" class="item">
        <input type="checkbox" @change="markPurchased">
        <span>{{item.item_name}} </span>
        <div>
            <span>{{item.budget_price}} </span>
            <span>{{item.market_price}} </span>
            <span>{{item.bought_price}} </span>
            <span>{{item.quantity}}</span>
            <button @click="$emit('del-item', item.item_id)" class="del">x</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["item"],
    methods:{
        markPurchased(){
            this.item.purchased = !this.item.purchased
        }
    }
}
</script>

<style scoped>
    .item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-purchased {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    /* @media (prefers-color-scheme: dark) {
        .item {
            color: #eee;
            background: #121212;
        }
    } */
</style>