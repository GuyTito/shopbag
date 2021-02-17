<template>
    <div>
        <!-- list of bags -->
        <div v-for="bag in bags" :key="bag.id">
            <BagListItem :bag="bag" />
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