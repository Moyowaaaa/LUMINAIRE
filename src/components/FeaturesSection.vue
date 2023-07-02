<template>
    <div class="featuresSection">
        <div class="featuresSection__title-container" >
            <p>Features</p>
            <h1>Our Promise To The Future</h1>
</div>

<div class="featuresSection__showcase-container"  data-scroll data-scroll-speed="-1">
<div class="featuresSection__showcase-container--top-section">
<div class="featuresSection__showcase-container--top-section__left-box">

    <div class="cross">
        <img src="../assets/images/horizontalLinelong.png" />
        <img src="../assets/images/horizontalLinelong.png" />

    </div>

<div class="featuresSection__showcase-container--top-section__left-box--text-container">
  

    <h1>Functional 
Aesthetics</h1>

<p>A mission to find the optimal 
balance between cooling and performance to withstand its 
inevitably heavier weight.</p>
</div>


<img
          src="../assets/images/horizontalLineThick.png"
          alt=""
          class="thick"
        />



<div class="discover" id="discover">
                <p data-animation='paragraph'>Discover</p>
                <img src="../assets/images/blackRightArrow.svg" alt=""/>
</div>




    </div>
    <div class="featuresSection__showcase-container--top-section__right-box">

        <div class="text-container">
        <div class="text-container__text-box">
<h1>Finding <br/>
Optimal Balance</h1>

<p data-animation="paragraph">Feel the road beneath you. See the sky above. Hear the music around you.</p>
            </div>

            <div class="text-container__discover" id="discover">
                <p data-animation='paragraph'>Discover</p>
                <img src="../assets/images/blackRightArrow.svg" alt=""/>
</div>

        </div>
        <img src="../assets/images/polestarphoto11.webp" />
</div>
    

    </div>  


    <div class="featuresSection__showcase-container--bottom-section">
    <div class="featuresSection__showcase-container--bottom-section__left-box">
        <img src="../assets/images/faraday.webp" alt=""/>
        </div>

    <div class="featuresSection__showcase-container--bottom-section__right-box">
    <div class="featuresSection__showcase-container--bottom-section__right-box--text-container">
        <h1>Electrifying 
Experience</h1>

<p>Integrating high performance technology into a 
new design.</p>
        </div>


        <img
          src="../assets/images/horizontalLineThick.png"
          alt=""
          class="thick"
        />



        <div class="discover" id="discover">
                <p data-animation='paragraph'>Discover</p>
                <img src="../assets/images/blackRightArrow.svg" alt=""/>
</div>


<div class="cross">
        <img src="../assets/images/horizontalLinelong.png" />
        <img src="../assets/images/horizontalLinelong.png" />

    </div>



        </div>
        

</div>  


</div>
    </div>
</template>

<script setup lang="ts">
import { intersectionObserver } from '@/animation/useIntersectionObserver';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    const discoverBoxes = Array.from(document.querySelectorAll('#discover'))
    
    discoverBoxes.forEach((discoverBox) => {
        discoverBox.addEventListener('mouseenter',() => {
            gsap.to(discoverBox,{
                x:30,
            ease:"power3.inOut",
            duration:1,
            })
        })

        discoverBox.addEventListener('mouseleave',() => {
            gsap.to(discoverBox,{
                x:0,
            ease:"power3.inOut",
            duration:1,
            })
        })
    })

    const featuresSection = document.querySelector('.featuresSection')
    // console.log(titleSection)

    intersectionObserver(featuresSection,{threshold: 0.1 }).then(() => {
gsap.from(featuresSection,{
  opacity:0,
  ease:"power3.inOut",
  duration:1,
  y:"5rem"
})
    })

})




// onMounted(() => {
//     const tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.featuresSection__title-container',
//         start: 'top center',
//             end:'top +=150',
//             markers:true,

//         scrub:1.2
//     }
// })

// tl.from('.featuresSection__title-container',{
//     opacity:0,
//     y:100,
//     ease:"power3.inOut",
//     duration:1.2
// })
// })




</script>

<style scoped lang="scss">
.featuresSection{
    min-height: 100vh;
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;
 
    margin-top: 10rem;
    font-family: "grotesk-regular";


    &__title-container{
        padding-top:   2rem  ;
        padding-bottom:2.5rem ;
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
        margin-top: 4rem;
       
        

        &--top-section{
            display: flex;
            
            gap:2rem;
        height: 35rem;
        
            &__left-box{
                width: 30%;
                position: relative;
                background-color: #DBFF00;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                gap: 2rem;

     

                &--text-container{
                    padding-left: 2rem;
                    padding-right: 2rem;
                    color:black;
                    padding-top: 2rem;

                    h1{
                        font-family: "grotesk-bold";
                        font-size: 2.5rem;
                    }
                    p{
                        font-family: "marope-regular";
                        
                    }
                }

                .cross{
                    position: relative;
                    top: 3rem;
                    
                    top:2rem;
                    right: 0;


                    img{
                        &:nth-child(1){
                            width: 8rem;
                            height: 0.15rem;
                            
                            position: absolute;
                            right: 0;
                        }
                        &:nth-child(2){
                        position: absolute;
                        right:1rem;
                        height: 0.15rem;
                            width: 5rem;
                            rotate: 90deg;
                            
                        }
                    }
                }
                .discover{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    position: absolute;
                    bottom: 2rem;
                    left:2rem;
                    color:black;
                    cursor: pointer;

                    img{
                        width: 2.5rem;
                    }
                }
                .thick {
                    position: relative;
                    
        height: 0.4rem;
        width:5rem !important;
      }

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
                   
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                    // position: relative;
                    top:2rem;
                
                    &__text-box{
                        
                        h1{
                            font-family: "grotesk-bold";
                          
                            font-size: 2.5rem;
                        }

                        p{
                            font-family: "marope-regular";
                            width: 30rem;
                            
                        }
                    }


                    &__discover{

                        display: flex;
                        align-items: center;
                        gap:1rem;
                        font-size: 1.25rem;
                    cursor: pointer;

                    

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
           
            display: flex;
            height: 40rem;


            &__left-box{
                width: 65%;
               
                

                img{
height: 100%;
width:100%;
object-fit: cover;
border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                }
            }
            &__right-box{
                width: 35%;
               
                display: flex;
                flex-direction: column;
                position: relative;
                background-color: #DBFF00;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;

                &--text-container{
                    padding: 5rem 2rem;
                    color:black;
                }


                .discover{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    position: absolute;
                    bottom: 2rem;
                    left:2rem;
                    color:black;
                    cursor: pointer;
                    img{
                        width: 2.5rem;
                    }
                }
                .thick {
                    position: relative;
                    bottom:2rem;
        height: 0.4rem;
        width:5rem !important;
      }


      .cross{
                    position: absolute;
                    
                    bottom:2.5rem;
                    right: 0;


                    img{
                        &:nth-child(1){
                            width: 8rem;
                            height: 0.15rem;
                            
                            position: absolute;
                            right: 0;
                        }
                        &:nth-child(2){
                        position: absolute;
                        right:1rem;
                        height: 0.15rem;
                            width: 5rem;
                            rotate: 90deg;
                            
                        }
                    }
                }


            }
        }
    }

}

@media screen and (max-width:1020px) {
    .featuresSection{
        padding: 2rem 0;
        width:100%;
        max-width: 100%;
        margin:2rem 0;
        height: max-content;
      


        &__title-container{
            padding:1rem;

            h1{
                font-size: 1.8rem;
                text-align: center;
            }
        }


        &__showcase-container{
            gap:0;

            &--top-section{
                flex-direction: column;
                height: max-content;

                &__left-box{
                width: 100%;
                padding: 5rem 1rem;
                
                border-radius: 0;
               


                &--text-container{
                    padding:0;
                }
                

                
                }

                &__right-box{
                    width: 100%;
                height: 60rem;
                border-radius: 0;

                display: none;

                }

            }

            .cross{
                img{
                    &:nth-child(1), &:nth-child(2) {
                    position: relative !important;
                    width: 4rem !important;
                    display: none;
                   
                }

            }
            }
            .thick{
                display: none;
            }


            



            &--bottom-section{
                flex-direction: column;


                &__left-box{
                width: 100%;
                height: 60rem;
                border-radius: 0;

                }

                &__right-box{
                    width: 100%;
                height: 60rem;
                border-radius: 0;



                }


            }
        }

        
    }
}
</style>