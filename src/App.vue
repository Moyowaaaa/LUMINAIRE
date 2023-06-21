<template>
  <div class="page">
    
      <Navbar />
<TitleSection />
<HeroSection />
  


 

  </div>
</template>

<script setup lang="ts">
import TitleSection from './components/TitleSection.vue';
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';


</script>

<style scoped lang="scss">


.page{
  max-width: 100rem;
    margin: 0 auto;
   
    width:100%;
    background-color: #1b1b1b;
    padding: 1rem 5rem;
    color:white;
    position: relative;
  

}


@media screen and (max-width:485px) {
  .page{
    width: 100%;
    max-widthh: 100%;
  padding: 0;
}

}
</style>