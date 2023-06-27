<template>
    <div class="showcase-section">

    <div class="showcase-section__container">
<h1>Pick your Dream Car</h1>

<div class="showcase-section__container--stats-container">
<div class="showcase-section__container--stats-container__stat-container">
<img src="../assets/images/statLine.svg" alt=""/>
<p>EPA gas range</p>
<p>32 mpg</p>
    </div>  

    <div class="showcase-section__container--stats-container__stat-container">
<img src="../assets/images/statLine.svg" alt=""/>
<p>Drivetrain</p>
<p>All-wheel drive</p>
    </div>  


    <div class="showcase-section__container--stats-container__stat-container">
<img src="../assets/images/statLine.svg" alt=""/>
<p>Max power</p>
<p>1,200 hp</p>
    </div>  


    </div>  



        </div>  




        <div class="showcase-section__cars-container">
            <img src="../assets/images/rivian12md.png" alt=""/>
            <img src="../assets/images/rivian5md.png" alt=""/>

            <h1 class="large-number">
                2
            </h1>
            <img src="../assets/images/rivian10md.png" alt=""/>


        </div>


        <div class="showcase-section__cars-container-mobile">
            <img src="../assets/images/rivian5md.png" alt=""/>


            </div>

        <div class="discover">Discover <img src="../assets/images/greenRightArrow.svg" alt=""/></div>




    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.showcase-section{
    min-height: max-content;
    width: 100%;
    padding-top:2rem;
   
    font-family: "grotesk-regular";
    box-sizing: border-box;

    &__container{
        max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;

    &--stats-container{
        padding-left: 10rem;
       padding-top: 2rem;
        display: flex;
        flex-direction: column;

        &__stat-container{
            
            width:10rem;
            color:  #DBFF00;
        

            
        }
    }
   
    }


    &__cars-container{
        position: relative;
        height: 30rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
       
        
        gap:5rem;

        h1{
            position: absolute;
        }

        img{
            height: 90%;
            object-fit: contain;
            z-index: 20;
        }

        .large-number{
            color: #DBFF00;
font-size: 50rem;
font-family: "grotesk-bold";
font-weight: 700;
letter-spacing: -0.50825rem;
opacity: 0.4000000059604645;
right:12rem;
position: absolute;
top:-30rem;
z-index: 10;
        }
    }

    &__cars-container-mobile{
        display: none;
    }
}

.discover{
    width: 10rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #DBFF00;
font-size: 1.25rem;
padding-left: 15rem;

    img{
        width: 2.5rem;
    }
}


@media screen and (max-width:900px) {
    .showcase-section{
        padding:0;
        padding: 4rem 0;
        

        &__container{
            padding: 0 2rem;
            
            h1{
                text-align: center;
            }


            max-width: 100%;
            &--stats-container{
        padding-left: 0;

        &__stat-container{
            width: 100%;
        }

            }

        }
        

        &__cars-container{
            display: none;
        }

        &__cars-container-mobile{
            display: flex;
            padding: 2rem 0;
        }
    }

    .discover{
        padding-top: 0rem;
        padding-left: 2rem;
    }
}
</style>