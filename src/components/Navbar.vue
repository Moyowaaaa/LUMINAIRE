<template>
    <div class="navbar">

        <div class="navbar__container">
            <div>
                <img src="../assets/images/logo.svg" alt="" />
            </div>


            <div class="navbar__container--right-container">
                <button>Reserve your own</button>


                <div class="close-btn"   ref="closebtnRef" @click="openMenu">
      
      <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
          <path d="M10,2 L2,2" class="bar-1" id="bar-1"></path>
          <path d="M2,5 L10,5" class="bar-2"></path>
          <path d="M10,8 L2,8" class="bar-3"></path>

      </svg>
  </div>


 


            </div>
            

        </div>
   
    </div>  
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
var menuTl = gsap.timeline()



onMounted(() => {
    menuTl.to('.bar-1', {
        duration:0.5,
        attr:{d: "M8,2 L2,8"},
	x:1,
	ease: "power3.inOut"
    }, 'start')

    menuTl.to('.bar-2',{
	autoAlpha: 0,
    duration:0.5
}, 'start')

    menuTl.to('.bar-3',{
	attr:{d: "M8,8 L2,2"},
    duration:0.5,
	x:1,
	ease: "power3.inOut",
    stroke:'#DBFF00'
    
}, 'start')

menuTl.to('.nav-button', {
    display:"none",
    // delay:0.6,
})

menuTl.reverse()

})

const openMenu = () => {
    menuTl.reversed(!menuTl.reversed())

}

</script>

<style scoped lang="scss">
.navbar{
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;
  

    box-sizing: border-box;

    &__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        ;

        &--right-container{
            display: flex;
            align-items: center;
            gap:2rem
        }

    }

    button{
        background: transparent;
        color:#ffffff;
        border-radius: 5px;
        padding: 0.5rem;
        font-family: "grotesk-regular";
        border: 1px solid #DBFF00;
        font-size: 1.125rem;
    }
    .hamburger{
        cursor: pointer;

        #bar-1 {
            fill: none;
    stroke: #DBFF00;
    stroke-linecap: round;
        }

         path{
    fill: none;
    stroke: white;
    stroke-linecap: round;
}
    }
}


@media screen and (max-width:485px) {
    .navbar{
        padding:1rem;
        &__container{
           
            width:100%;

            div{
                img{
                    width: 7rem;
                }
            }


            &--right-container{
                display: none;
            }
        }
    }
}
</style>