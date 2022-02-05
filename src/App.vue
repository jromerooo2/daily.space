<template>
  <Navbar class="fixed w-full" />
	<router-view class="mt-5" />
  <Footer />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }

}
</script>