<template>
  <div class="d-flex justify-content-between mb-2">
      <div class="mx-2">{{heading}}</div>
      <router-link class="mx-3" to="`/${where}`">
        <img
          src="`@/assets/icons/${icon}.svg`"
          alt={{icon}}
          height="25"
          width="25"
        />
      </router-link>
    </div>
</template>

<script>
export default {
    props: ["<h2>heading</h2>", "where", "icon"]
}
</script>

<style>

</style>