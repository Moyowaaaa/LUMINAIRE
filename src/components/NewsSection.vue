<template>
    <div class="newsSection">
        <div class="newsSection__title-container">
            <p>News</p>
            <h1>Stories Behind The Wheel</h1>
</div>
<div class="newsSection__news-container">


    <div class="newsSection__news-container--container" v-for="article in news">
    <div class="newsSection__news-container--container__ImageContainer">
        <div class="image-container">
            <img :src=article.image :alt="article.title"/>
         </div>
        
        </div>

        <div class="flexer">
            <div>Lifestyle</div>

            <div>{{ article.min }}</div>
        </div>

      
        <h1>{{ article.title }}</h1>
        <p>{{article.desc}}</p>


        <div class="newsSection__news-container--container__discover">
                <p>Discover</p>
                <img src="../assets/images/greenRightArrow.svg" alt=""/>
</div>

    </div>

</div>
    </div>
</template>

<script setup lang="ts">
import image1 from '../assets/images/polestarphoto2.webp'
import image2 from '../assets/images/polestarphoto16.webp'
import image3 from '../assets/images/polestarphoto6.webp'


const news = [
    {image:image1,title:'The pinnacle of electric performance', desc:'Introducing our new ultra-high-performance brand — the world’s first fully electric luxury super-sports car.', min:'10 min read'},
    {image:image2,title:'Beyond charging vehicles', desc:'Hear about the new ways electric vehicles are powering up  offices and transforming remote businesses', min:'7 min read'},
    {image:image3,title:'Never-ending road trip', desc:'How the expanding electric network is changing the way  families plan for vacations', min:'5 min read'},


]

</script>

<style scoped lang="scss">
.newsSection{
    min-height: 100vh;
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;
    
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

    &__news-container{
        color:  #DBFF00;;
        width: 100%;
     
        display: flex;
        gap:2.5rem
        ;
        

        &--container{
            display: flex;
            flex-direction:column;
            gap:1rem;
            position: relative;
            height: 30rem;
     
        width: 35%;

            h1{
                color: #DBFF00;
font-size: 1.5rem;
font-family: "grotesk-bold";
font-weight: 700;
            }

            p{
                font-size: 1rem;
font-family: "marope-regular";
            }


            &__ImageContainer{
            width: 100%;
            height: 12rem;
            border-radius: 10px;
background: #DBFF00;
            
            img{
                height: 100%;
                width:100%;
                object-fit: cover;
                border-radius: 10px;
            }

          
         

            .image-container{
                position: relative;
                z-index: 30;
                left:5px;
                width: 100%;
                height: 100%;
                top:-2px;
             
                
            }
            
            }




        }
    }



}

.newsSection__news-container--container__discover{
  
    display: flex;
    gap:1rem;
    align-items: center;
    position: absolute;
    bottom: 0;

    img{
        width: 2.5rem;
    }
}

.flexer{
                height: 30px;
                width: 100%;
               
                display: flex;
                align-items: center;
                gap:1.5rem;

                div{
                    &:nth-child(1){
                        border: 1px solid #DBFF00;
                        border-radius: 3px;
                        padding: 0.25rem 0.5rem;
                    }
                }
            }


            @media screen and (max-width:485px) {
                .newsSection{
                    max-width: 100%;
                    padding:0;
                    margin-top: 15vh;

                    &__title-container{
                        padding: 0 1rem;
                        
                        h1{
                            font-size: 2rem;
                            text-align: center;
                            padding: 2rem 0;
                        }
                    }

                    &__news-container{
                        flex-direction: column;

                        &--container{
                            width: 95%;
                            margin: auto
                        }
                    }
                };
            }


            @media screen and (min-width:500px) and (max-width:900px) {
                .newsSection{
                    max-width: 100%;

                    &__title-container{
                        padding: 2rem 0;
                    }

                    &__news-container{
                 flex-wrap: wrap;
                margin: 0;
                gap:4rem;

                        &--container{
                            width: 100%;
                            margin: 0;
                            &__ImageContainer{
                                height: 15rem;
                            }

                        }
                    }
                }

            }


</style>