<template>
    <div class="featuresSection">
        <div class="featuresSection__title-container">
            <p>Features</p>
            <h1>Our Promise To The Future</h1>
</div>

<div class="featuresSection__showcase-container">
<div class="featuresSection__showcase-container--top-section">
<div class="featuresSection__showcase-container--top-section__left-box">

    </div>
    <div class="featuresSection__showcase-container--top-section__right-box">

        <div class="text-container">
        <div class="text-container__text-box">
<h1>Finding <br/>
Optimal Balance</h1>

<p>Feel the road beneath you. See the sky above. Hear the music around you.</p>
            </div>

            <div class="text-container__discover">
                <p>Discover</p>
                <img src="../assets/images/blackRightArrow.svg" alt=""/>
</div>

        </div>
        <img src="../assets/images/polestarPhoto11md.png" />
</div>
    

    </div>  


    <div class="featuresSection__showcase-container--bottom-section">


</div>  


</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.featuresSection{
    min-height: 100vh;
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 10rem;
 
    margin-top: 10rem;
    font-family: "grotesk-regular";


    &__title-container{
        padding-top:   2rem  ;
        padding-bottom:2rem ;
        padding-left: 10rem;

        p{color: #DBFF00;}

        h1{
            font-size: 3.5rem;
            font-weight: 500;
        }
    }


    &__showcase-container{
        display: flex;
        flex-direction: column;
        gap:2rem;
       
        

        &--top-section{
            display: flex;
            
            gap:2rem;
        height: 30rem;


            &__left-box{
                width: 30%;
               
                background-color: #DBFF00;
                border-radius: 10px;
            }


            &__right-box{
                width: 70%;
               
                position: relative;
                color:black;

                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    z-index: 10;
                    border-radius: 10px;
                    position: absolute;
                    top:0
                }


                .text-container{
                    position: absolute;
                    z-index: 40;
                    width: 100%;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin: 0 auto;
                    padding: 1.5rem auto;
                    position: relative;
                    top:0;
                
                    &__text-box{
                        h1{
                            font-family: "grotesk-bold";
                          
                            font-size: 2.5rem;
                        }

                        p{
                            font-family: "marope-regular";
                            width: 35rem;
                            font-size: 1.25rem;
                        }
                    }


                    &__discover{

                        display: flex;
                        align-items: center;
                        gap:1rem;
                        font-size: 1.25rem;
                    

                        img{
                            width: 2.68669rem;
                            position: relative;
height: 0.99919rem;
                    
                        }
                    }
                }
                
            }

        }


        &--bottom-section{
            border: 2px solid blue;
        }
    }


}
</style>