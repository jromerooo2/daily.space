<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from '../components/NavBar.vue'
import What from '../components/Main/What.vue'
import How from '../components/Main/How.vue'
import Goals from '../components/Main/Goals.vue'
import Footer from '../components/Footer.vue'
import News from '..selection:/views/News.vue'
</script>

<template>
  <NavBar />
<div class="">
      <What />
      <How />
      <Goals />
    </div>
  <Footer />
  </template>
