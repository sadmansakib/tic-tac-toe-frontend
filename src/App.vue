<template>
  <router-view />
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

#app {
  font-family: "Russo One", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(31 41 55);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
