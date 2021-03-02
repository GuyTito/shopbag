<template>
  <div id="app">
    <header>
      <h1><router-link to="/">ShopBag</router-link></h1>
      <router-link to="/bags">Bags</router-link> |
      <button class="btn" id="dark" @click="darkMode"><i class="fa fa-adjust"></i></button>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    darkMode() {
      document.body.classList.toggle("dark-mode")
      let isDark = document.body.classList.contains("dark-mode")
      localStorage.setItem("dark", JSON.stringify(isDark))
    },
    checkThemeOnLoad(){
      let isDark = JSON.parse(localStorage.getItem("dark"))
      let curTime = parseFloat(new Date().getHours() + "." + new Date().getMinutes())
      if (isDark || (curTime <= 7.45 && curTime >= 18)) {
        document.body.classList.add("dark-mode")
      } else {
        document.body.classList.remove("dark-mode")
      }
    }
  },
  mounted(){
    this.checkThemeOnLoad()
  }
}
</script>

<style>
/* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */
  

body.dark-mode, body.dark-mode input[type="text"], body.dark-mode .todo-item {
  color: #eee;
  background: #121212;
}


/* @media (prefers-color-scheme: dark) {
  body {
    color: #eee;
    background: #121212;
  }
} */
</style>
