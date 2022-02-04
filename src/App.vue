<template>
  <Home />
  <div class="container my-3">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'
export default defineComponent({
  components: { Home }
})
</script>