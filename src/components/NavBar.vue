<template >
    <nav id="navbar-phone" class="">
        <div class="flex flex-wrap items-center h-16 mx-auto justify-evenly nav-bar">
            <router-link to="/" >
                <svg stroke class="w-2/3 mt-2" version="1.1" viewBox="0 10 450 50">
                    <title>SpaceX Logo</title>
                    <g class="letter_s">
                    <path fill="#fff" class="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                    c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
                    </g>
                    <g class="letter_p">
                    <path fill="#fff" class="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                    c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
                    </g>
                    <g fill="#fff" class="letter_a">
                    <polygon class="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
                    </g>
                    <g class="letter_c">
                    <path fill="#fff" class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                    c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
                    </g>
                    <g fill="#fff" class="letter_e">
                    <polygon class="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
                    <rect class="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
                    </g>
                    <g fill="#fff" class="letter_x">
                    <path class="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
                    </g>
                    <g fill="#fff" class="letter_swoosh">
                    <path class="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
                    </g>
                </svg>          
            </router-link >

          <button data-collapse-toggle="mobile-menu" type="button" class="hamburguer md:hidden" aria-controls="mobile-menu-2" aria-expanded="false">


            <div class="hamburger">
                <a class="main-nav-toggle" href="#main-nav"><i>Menu</i></a>
              </div>



          </button>
          <div class="hidden w-full bg-white md:bg-transparent md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <router-link to="/news" class="font-poppins block py-2 pl-3 pr-4 border-b border-gray-100 link md:text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                  APOD
                </router-link>
              </li>
              <li>
                <router-link to="/news" class="font-poppins block py-2 pl-3 pr-4 border-b border-gray-100 link md:text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0">Today News</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>