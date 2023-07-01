<template>
    <div class="titleSection">
        <div class="titleSection__title-container">
            <h1>The Future is Electric.</h1>

            <p>Discover the new standard of luxury</p>
            <button>Reserve you own</button>
        </div>

        <div class="gridContainer">
            <div class="gridContainer__container">
                <div class="gridContainer__container--longwidth-shortheight">
                    <img src="../assets/images/titleImage1.png" />
                </div>
                <div class="gridContainer__container--longwidth-shorterheight">
                    <p>Electric Mobility</p>
                    <img src="../assets/images/horizontalbarmd.svg" alt="" />

                </div>
                <div class="gridContainer__container--bigwidth-bigheight">
                    <img src="../assets/images/titleImage3.png" />
                    
                </div>
                <div class="gridContainer__container--minwidth-midheight">
                    <div>
                        <img src="../assets/images/verticalbarsm.svg" id="sm" />
                    </div>
                    <div>
                        <p>High Performance</p>
                    </div>
                    <div>
                        <img src="../assets/images/cross.svg" alt="" id="md" />
                    </div>
                </div>
                <div class="gridContainer__container--longwidth-longerheight">
                    <img src="../assets/images/titleImage2.png" />
                </div>
                <div class="gridContainer__container--veryshortheight-veryshortheight">
                    <p>Cleaner Future</p>
                    <img src="../assets/images/horizontalbarsm.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.titleSection {
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    font-family: "grotesk-regular";
    font-size: 2rem;
    font-size: 500;

    &__title-container{
        color:white;
        padding-top: 2rem;
        width: 100%;
   
        font-family: "marope-regular";
        display: flex;
        flex-direction: column;
        gap:0.5rem;
        align-items: center;

        p{
            font-size: 24px;
            
        }



        button{
            font-family: "grotesk-bold";
background-color: #DBFF00;
color:black;
        border-radius: 5px;
        padding: 1rem 2rem    ;
        }
    }
}

.gridContainer {
    width: 100%;
    
    margin: 2rem 0;
    height: auto;
    position: relative;
    display: flex;

    &__container {
 
        display: grid;
        width: 100%;
        grid-template-columns: repeat(1, auto);
        grid-template-rows: repeat(1, auto);
        gap: 0.5rem;
        grid-template-areas:
            "a a b b c c c "
            "a a d d c c c "
            "e e d d c c c "
            "e e d d f f f ";

        &--longwidth-shortheight {
            grid-area: a;
           
            height: 12.188rem;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }

            @media (max-width: 485px) {
height: auto;
            }

            @media screen and (min-width:500px) and (max-width:900px) {
                height: 100%;
            }
          

        }

        &--longwidth-shorterheight {
            grid-area: b;
          
            height: 7.75rem;
            border-radius: 10px;
            background-color: #DBFF00;
            display: flex;
            justify-content: space-between;
           align-items: center; 
           padding-left: 3rem;

            p{
                max-width: 5rem;
            }

            img{
                width: 89px;
            }
            @media (max-width: 485px) {
height: auto;

p{
    padding:1rem 0;
    max-width: 100%;
}
            }
            
            @media screen and (min-width:500px) and (max-width:900px) {
                height: 100%;
            }

        }

        &--bigwidth-bigheight {
            grid-area: c;
            
            height: 25.625rem;

            img {
                height: 100%;
                width: 100%;
                object-fit:cover;
                border-radius: 10px;
            }

            @media (max-width: 485px) {
height: auto;
            }
            @media screen and (min-width:500px) and (max-width:900px) {
                height: 100%;
                
            }

        }

        &--minwidth-midheight {
            grid-area: e;
          
            height: 16.063rem;
            background-color: #DBFF00;
            display: flex;
            flex-direction: column;
            position: relative;
            border-radius: 10px;

            div {
                height: 33.3333%;
                width: 100%;

                &:nth-child(1) {
                    display: flex;
                    justify-content: flex-start;
                }

                &:nth-child(2) {
                    padding-left: 1rem;
                    max-width: 10rem;
                }

                &:nth-child(3) {
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
            }

            #sm {
                height: 65px;
                width: 65px;
            }

            #md {
                width: 65px;
            }

            @media (max-width: 485px) {
                font-size: 2rem;
height: auto;

div{
    &:nth-child(2) {
padding-left: 4rem;
}
}


            }

        }

        &--longwidth-longerheight {
            grid-area: d;
         
            height: 21rem;

            
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }

            @media (max-width: 485px) {
height: auto;
            }

        }

        &--veryshortheight-veryshortheight {
            grid-area: f;
            
            height: 3.188rem;
            border-radius: 10px;
            background-color: #DBFF00;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 1rem;
            font-size: 1.25rem;

            @media (max-width: 485px) {
                font-size: 1rem;
                p{
                    padding: 0.5rem;
                }
                
height: auto;
            }

            @media screen and (min-width:500px) and (max-width:900px) {
                
            }

            img {
                height: initial;
                width: 100px;
            }
        }
    }
}

@media (max-width: 485px) {
    .gridContainer__container {
        grid-template-areas:
            "a"
            "b"
            "c"
            "d"
            "e"
            "f";
    }

    img{
        object-fit: contain !important;
    }

    .titleSection{
        width: 100%;
        padding:1rem;
        font-size: 1.5rem;

        &__title-container{
            font-size: 1.6rem;
            text-align: center;
            p{
                font-size: 1rem;
            }
            button{
                padding: 0.5rem 1rem;
            }
        }
    }

}


@media (min-width: 500px) and (max-width:900px) {
    .gridContainer__container {
        grid-template-areas:
            "a a b b"
            "c c d d"
            "e e f f"
    
    
    }

}
</style>
