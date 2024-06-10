<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" active-class="active-class">Home</RouterLink>
        <RouterLink to="/about" active-class="active-class">About</RouterLink>
        <RouterLink to="/demo" active-class="active-class">Demo</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
<style>
  .active-class {
    color: red;
  }
</style>