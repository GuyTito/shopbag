<template>
  <nav class="navbar navbar-expand navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">
        <img src="@/assets/img/logo.png" height="50" width="150" />
      </router-link>

      <div class="navbar-nav d-flex">
        <router-link to="/bags" class="nav-link" href="#">
          <button class="btn btn-primary">Demo</button>
        </router-link>
        <router-link
          to="/bags"
          class="nav-link active"
          aria-current="page"
          href="#"
        >
          Bags
        </router-link>
        <router-link to="/bags" class="nav-link" href="#">
          <img
            id="dark"
            @click="darkMode"
            src="@/assets/icons/moon-fill.svg"
            alt=""
            height="15"
            width="15"
            class=""
          />
        </router-link>
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
