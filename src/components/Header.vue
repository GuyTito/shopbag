<template>
  <nav class="navbar navbar-expand navbar-light bg-primary sticky-top shadow ">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/logo_shopbag.svg" height="40" width="130" />
      </router-link>

      <div class="navbar-nav">
        <router-link to="/bags" class="nav-link active mt-2 mx-4" aria-current="page">
          <img
            src="@/assets/icons/shopbags.svg"
            alt="bags"
            height="25"
            width="25"
          />
        </router-link>

        <div class="nav-link mt-2">
          <img
            id="dark"
            @click="darkMode"
            src="@/assets/icons/moon-fill.svg"
            alt="darkmode"
            height="20"
            width="20"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
