<!-- App.vue -->
<template>
  <div id="app">
    <router-link id="bg-link" class="link" :to="{ path: '/' }"
      >Profile</router-link
    >
    <router-link id="bg-link" class="link" :to="{ path: '/contact' }"
      >Contact</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#bg-link {
  background-color: palevioletred;
  margin-right: 5px;
  color: white;
}
#app {
  margin: 0px;
  text-align: start;
  margin-right: 5px;
}
.link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
}
.router-link-exact-active {
  color: blue;
}
body {
  background-color: rgb(43, 40, 40);
}
</style>