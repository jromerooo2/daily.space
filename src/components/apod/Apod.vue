<template id="apod" class="">
    <div class="flex flex-col p-5 space-y-10 bg-black">
        <div class="flex flex-col-reverse md:flex-row md:justify-center md:items-center">
            <div class="flex-none space-y-4 md:w-1/2">
                <h1 class="text-3xl font-bold text-white font-poppins">"{{apod.title}}"</h1>
                <h1 class="font-bold text-white font-poppins">Author: 
                {{apod.copyright === "" ? 
                        "Anonymus": apod.copyright
                }}</h1>
                <p class="text-justify text-white font-ibm">{{apod.explanation}}</p>
            </div>
            <div class="md:w-1/2 src_container">
                <!-- if image -->                
                <img v-if="media_type === img" :src="apod.url" class="p-4 mx-auto" />
                
                <!-- if video -->
                <iframe v-else class="block w-full mx-auto h-96" :src="apod.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                          
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
            media_type: '',
            apod: {},
        }
    },
    methods:{
        async getLaunches(){
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=VdRJDtCOwCkmwx4pnyXApD34Q94lQaCOXWJys97t');
            this.apod = await response.data;
            this.media_type = this.apod.media_type;
            console.log(this.apod);
            console.log(this.media_type);
            }
    },
    mounted() {
        this.getLaunches();
    },

})
</script>
