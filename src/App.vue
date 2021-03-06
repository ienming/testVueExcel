<template>
  <div id="app">
    <h1>Hello App!</h1>
    <hello-world msg="Oh My God..."></hello-world>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/page1">Go to Page1</router-link>
      <router-link to="/page2">Go to Page2</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

const routes = [
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
];

const router = new VueRouter({
  routes,
});

export default {
  name: "App",
  router,
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
