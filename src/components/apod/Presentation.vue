<template>
    <div class="flex flex-col items-end justify-center h-screen bg-center bg-no-repeat bg-cover" style="background-image:url(moon2.jpg)">
        <div class="flex flex-col items-center justify-center md:w-1/2">
            <div class="mx-auto presentation">
                <p class="font-bold text-left text-white font-ibm">APOD</p>
                <h1 class="text-4xl font-bold text-center text-white font-ibm">
                    Astronomy Picture Of the Day
                </h1>
                <button @click="smoothScroll"  class="px-4 py-2 mt-4 font-semibold text-center text-white bg-transparent border border-white hover:bg-white hover:text-black hover:border-transparent">
                    Watch APOD
                </button>
            </div>
        </div>
    </div>
</template> 
<script>
import gsap from 'gsap'
export default {
    name: 'Presentation',
    mounted() {
        this.move()
    },
    methods: {
        move() {
            gsap.from('.presentation', {
                duration: 2,
                opacity: 0,
                x: -300,
                ease: 'power3.out'
            })
        },
        smoothScroll() {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: '#apod',
                    offsetY: -100
                }
            })
        }
    },
                        
}
</script>
