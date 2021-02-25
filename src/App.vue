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
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
  font-family: Helvetica, sans-serif;
  line-height: 1.4;
}
body.dark-mode, body.dark-mode input[type="text"], body.dark-mode .todo-item {
  color: #eee;
  background: #121212;
}

header{
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
header a {
  color: #fff;
  text-decoration: none;
}
header a.router-link-exact-active {
  color: #42b983;
}

.btn{
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  outline:none
}
.btn:hover{
  background: #666;
}

/* @media (prefers-color-scheme: dark) {
  body {
    color: #eee;
    background: #121212;
  }
} */
</style>
