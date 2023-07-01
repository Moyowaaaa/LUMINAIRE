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
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import Footer from './components/Footer.vue';
import SubscribeSection from './components/SubscribeSection.vue';
import NewsSection from './components/NewsSection.vue';
import LocomotiveScroll from "locomotive-scroll";
import { onMounted } from 'vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const locoScroll:any = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLDivElement,
        smooth: true,
        lerp: 0.07,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


    
})

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