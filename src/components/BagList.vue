<template>
    <div>
        <!-- list of bags -->
        <div v-for="bag in bags" :key="bag.bag_id">
            <BagListItem :bag="bag" />
            <button @click="$emit('remove-bag', bag.bag_id)" class="del">x</button>
        </div>
    </div>
</template>

<script>
import BagListItem from "../components/BagListItem.vue"

export default {
    name: 'BagList',
    components: {BagListItem},
    props: ['bags']
}
</script>