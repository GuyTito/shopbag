<template>
    <!-- display item after adding -->
    <div v-for="item in items" :key="item.item_id">
        <span>{{item.item_name}} </span>
        <span>{{item.budget_price}} </span>
        <span>{{item.market_price}} </span>
        <span>{{item.bought_price}} </span>
        <span>{{item.quantity}}</span>
        <button @click="removeItem(item.item_id)" class="del">x</button>
    </div>
</template>

<script>
export default {
    props:['items']
}
</script>

<style>

</style>