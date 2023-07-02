<template>
  <div class="page">
    
      <Navbar />
<TitleSection />
<ShowcaseSection/>
<FeaturesSection />
<NewsSection/>
<SubscribeSection /> 
<Footer />

  


 

  </div>
</template>

<script setup lang="ts">
import TitleSection from './components/TitleSection.vue';
import ShowcaseSection from './components/ShowcaseSection.vue';
import Navbar from './components/Navbar.vue'

import FeaturesSection from './components/FeaturesSection.vue';
import Footer from './components/Footer.vue';
import SubscribeSection from './components/SubscribeSection.vue';
import NewsSection from './components/NewsSection.vue';
import LocomotiveScroll from "locomotive-scroll";
import { onMounted } from 'vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import { split } from './animation/text'


onMounted(() => {
  split();

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLDivElement,
        smooth: true,
        lerp: 0.07,
    });

    setTimeout(() => {
        scroll.update();
    }, 1000);
});


// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger)
//   const locoScroll:any = new LocomotiveScroll({
//         el: document.querySelector("[data-scroll-container]") as HTMLDivElement,
//         smooth: true,
//         lerp: 0.07,
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }
// });



// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();


    
// })

// const smoothScroll = ()=>{
//   const lenis = new Lenis({
//   duration: 0.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//   direction: 'vertical', // vertical, horizontal
//   gestureDirection: 'vertical', // vertical, horizontal, both
//   smooth: true,
//   mouseMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// })

// function raf(time:any) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
// }

// onMounted(() => {
//   smoothScroll()
// })


</script>

<style scoped lang="scss">


.page{

   
    width:100%;
    background-color: #1b1b1b;
    
    color:white;
    position: relative;
  

}


@media screen and (max-width:485px) {
  .page{
    width: 100%;
    max-width: 100%;
  padding: 0;
}

}
</style>