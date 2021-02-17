<template>
    <router-link :to="`/bags/${bag.id}`">
        <p>{{bag.bag_name}}</p>
        <span v-for="item in bag.items" :key="item.id">
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