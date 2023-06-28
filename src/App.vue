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