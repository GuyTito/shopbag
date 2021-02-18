<template>
    <router-link :to="`/bags/${bag.bag_id}`">
        <p>{{bag.bag_name}}</p>
        <span v-for="item in bag.items" :key="item.item_id">
            {{item.item_name}}...
        </span>
    </router-link>
</template>

<script>
export default {
    props: ['bag']
}
</script>

<style scoped>

</style>