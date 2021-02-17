<template>
  <div id="app">
      <!-- link to open add bag page -->
      <router-link to="/add">+</router-link>

      <!-- list of bag links -->
      <BagList :bags="bags" />
  </div>
</template>

<script>
import BagList from '../components/BagList'


export default {
    name: 'Bag',
    components: {BagList },
    computed: {
      bags() {
        return this.$store.getters.getBags
      }
    }
}
</script>

<style>
  
</style>