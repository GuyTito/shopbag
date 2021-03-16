<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: { Header },
  // methods: {
  //   darkMode() {
  //     document.body.classList.toggle("dark-mode");
  //     let isDark = document.body.classList.contains("dark-mode");
  //     localStorage.setItem("dark", JSON.stringify(isDark));
  //   },
  //   checkThemeOnLoad() {
  //     let isDark = JSON.parse(localStorage.getItem("dark"));
  //     if (isDark) {
  //       document.body.classList.add("dark-mode");
  //     } else {
  //       document.body.classList.remove("dark-mode");
  //     }
  //   },
  // },
  // mounted() {
  //   this.checkThemeOnLoad();
  // },
};
</script>

<style>

/* body.dark-mode,
body.dark-mode input[type="text"],
body.dark-mode .todo-item {
  color: #eee;
  background: #121212;
} */
</style>
