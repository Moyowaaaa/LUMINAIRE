<template>
    <div class="footer-section">
        <img src="../assets/images/footerLogo.svg" alt="" class="logo" />
    <div class="footer-section__links-container">
        <p>Fleet</p>
        <p>Features</p>
        <p>Stories</p>
        <p>Investors</p>
        <p>FAQ</p>
        </div>  


        <div class="footer-section__socials-container">
        <img src="../assets/images/Facebook.svg" alt="facebook"/>
        <img src="../assets/images/Instagram.svg" alt="Instagram" />
        <img src="../assets/images/Twitter.svg" alt="Twitter" />

        <img src="../assets/images/LinkedIn.svg" alt="Linkedin" />
        
        </div>  

        <div class="foot">
            <p >{{currentYear}} Luminaire. All right reserved.</p>
            <p >Privacy Policy</p>
            <p >Terms of Service</p>
            <p >Cookies Settings</p>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


let currentYear = ref<number | null>(new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer-section{
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;

    .logo{
        width: 15rem;
    }

    &__links-container{
        display: flex;
        align-items: center;
        gap:2rem;
        color: #DBFF00;
font-size: 20px;
font-family: "grotesk-bold";
font-weight: 700;


p{
    color: #DBFF00;
    transition: color 1s;

    
    &:hover{
    color: black;
    cursor: pointer;
}
}

    }


    &__socials-container{
        display: flex;
        gap:1rem;


        img{
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    .foot{
        padding: 1rem 0;
        width: 100%;
        display: flex;
        gap:2rem;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #DBFF00;;
        

        p{
            // text-decoration: underline;
            color: #DBFF00;
font-size: 14px;
font-family: "marope-regular";
font-weight: 400;


        }
    }
}

@media screen and (max-width:490px) {
    .footer-section{
        width:100%;
        padding:0;
        
        

        .logo{
            width: 7rem;
        }
        

        &__links-container{
            justify-content: center;
            flex-wrap: wrap;
            font-size: 1rem;

        }
    }

    .foot{
        flex-wrap: wrap;
      

    }
}

@media screen and (min-width:500px) and (max-width:900px) {
    .footer-section{
        width:90%;
        padding:0;

    }
}



</style>