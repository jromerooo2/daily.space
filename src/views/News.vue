<template>
    <div class="bg-black h-screen p-5 flex flex-col space-y-10">
        <h1 class="text-center text-4xl font-bold text-white underline bg-black md:text-5xl section-title">
            Nasa's APOD
        </h1>
        <div class="md:flex block md:justify-center md:items-center">
            <div class="md:w-1/2 flex-none space-y-4">
                <h1 class="text-white font-bold text-3xl font-poppins">"{{apod.title}}"</h1>
                <h1 class="text-white font-bold font-poppins">Author: {{apod.copyright}}</h1>
                <p class="text-white text-justify font-ibm">{{apod.explanation}}</p>
            </div>
            <div class="grow md:w-1/2">
                <img :src="apod.url" class="p-4 mx-auto" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "News",
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

}
</script>
