<template class="">
      <router-view />

    <div class="flex flex-col p-5 space-y-10 bg-black">
        <div class="block md:flex md:justify-center md:items-center">
            <div class="flex-none space-y-4 md:w-1/2">
                <h1 class="text-3xl font-bold text-white font-poppins">"{{apod.title}}"</h1>
                <h1 class="font-bold text-white font-poppins">Author: {{apod.copyright}}</h1>
                <p class="text-justify text-white font-ibm">{{apod.explanation}}</p>
            </div>
            <div class="grow md:w-1/2">
                <img :src="apod.url" class="p-4 mx-auto" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "APOD",
    data(){
        return{
            apod: {},
        }
    },
    methods:{
        async getLaunches(){
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=VdRJDtCOwCkmwx4pnyXApD34Q94lQaCOXWJys97t');
            this.apod = await response.data;
            console.log(this.apod);
            }
    },
    mounted() {
        this.getLaunches();
    },

})
</script>
