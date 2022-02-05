<template>
      <router-view />
    
    <div class="bg-black p-5 flex flex-col space-y-10">
        <Presentation />
        <Apod />
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import Apod from '../components/apod/Apod.vue'
import Presentation from '../components/apod/Presentation.vue'

export default {
    name: "News",
    components: {
        Presentation,
        Apod        
    },
}
</script>
