<template>
    <div class="navbar">

        <div class="navbar__container">
            <div>
                <img src="../assets/images/logo.svg" alt="" />
            </div>


            <div class="navbar__container--right-container">
                <button>Reserve your own</button>


                <div class="close-btn"   ref="closebtnRef">
      
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

</script>

<style scoped lang="scss">
.navbar{
    width: 100%;
  

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
        &__container{
            display: none;
        }
    }
}
</style>