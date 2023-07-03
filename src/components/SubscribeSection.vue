<template>
  <div class="subscribeSection">
    <!-- <img src="../assets/images/rivianSubscribe.png"/> -->
    <div class="subscribeSection__container">
      <div class="subscribeSection__container--text-container">
        <img
          src="../assets/images/horizontalLinelong.png"
          id="lightHorizontalLine"
          class="light"
        />

        <div class="container" data-scroll-speed="2" data-scroll>
          <h1>
            Stay up to speed
            <br />
            on the latest
          </h1>
          <p>
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>

          <input type="text" placeholder="Enter your email" />

          <button class="btn-effect">Sign Up</button>
        </div>

        <img
          src="../assets/images/horizontalLineThick.png"
          alt=""
          class="thick"
        />
      </div>

      <div class="subscribeSection__container--image-container">
        <img src="../assets/images/rivianSubscribemd.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { intersectionObserver } from "@/animation/useIntersectionObserver";
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const lightHorizontalLine = document.querySelector("#lightHorizontalLine");
  const thickHorizontalLine = document.querySelector("#thickHorizontalLine");

  intersectionObserver(lightHorizontalLine, { threshold: 0.1 }).then(() => {
    gsap.to(lightHorizontalLine, {
      width: "30rem",
      duration: 5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: lightHorizontalLine,
        scrub: 0.1,
      },
    });
  });
});
</script>

<style scoped lang="scss">
.subscribeSection {
  width: 100%;

  &__container {
    width: 100%;
    border: 2px;
    height: 40rem;
    display: flex;
    justify-content: space-between;

    &--text-container {
      height: 100%;
      width: 55%;
      background-color: #dbff00;
      padding: 1rem 5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      color: black;
      justify-content: center;

      .light {
        position: absolute;
        right: 0;
        top: 4rem;
        width: 0rem;
      }

      .thick {
        position: absolute;
        left: 0 !important;
        bottom: 4rem !important;
        height: 1.2rem;
        width: 5rem;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 35rem;

        h1 {
          font-size: 3.125rem;
          font-family: "grotesk-bold";
        }

        p {
          font-size: 1.125rem;
          font-family: "marope-regular";
        }

        input {
          padding: 1.2rem 1rem;
          border-radius: 10px;
          width: 30rem;
          border: none;
          outline: none;
          border: 1px solid black;
        }

        button {
          padding: 1.2rem 1rem;
          border-radius: 10px;
          width: 30rem;
          background-color: black;
          color: #dbff00;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    // border: 2px solid blue;

    &--image-container {
      height: 100%;
      width: 45%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    // img{
    //     height: 100%;
    //     width: 50%;
    //     object-fit: cover;
    // }
  }
}

@media screen and (max-width: 485px) {
  .subscribeSection {
    &__container {
      flex-direction: column-reverse;
      height: max-content;
      padding-top: 2rem;

      &--text-container {
        .light {
          width: 10rem !important;
        }
        .thick {
          // position: relative;
          // width: 2rem !important;
          width: 5rem !important;
          height: 5px;
        }
        padding: 0;
        width: 100%;
        padding-top: 5rem;
        padding-bottom: 10rem;

        .container {
          // display: none;

          width: 100%;

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          h1,
          p,
          input,
          button {
            width: 95%;
            margin: 0 auto;
          }
        }
      }

      &--image-container {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 900px) {
  .subscribeSection {
    &__container {
      flex-direction: column-reverse;
      height: max-content;
      padding-top: 2rem;

      &--text-container {
        .light {
          width: 10rem !important;
        }
        .thick {
          // position: relative;
          // width: 2rem !important;
          width: 5rem !important;
          height: 5px;
        }
        padding: 0;
        width: 100%;
        padding-top: 5rem;
        padding-bottom: 10rem;

        .container {
          // display: none;

          width: 60%;
          margin: auto;

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          h1,
          p,
          input,
          button {
            width: 95%;
            margin: 0 auto;
          }
        }
      }

      &--image-container {
        width: 100%;
      }
    }
  }
}

.btn-effect {
  position: relative;

  cursor: pointer;
  transition: color 350ms ease-in-out;
}

.btn-effect::before,
.btn-effect::after {
  content: "";
  position: absolute;
  top: -3px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  transform: scale(0);
  transition: transform 350ms ease-in;
  border-radius: 10px;
}

.btn-effect::before {
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  left: -3px;
  transform-origin: 0 100%;
}

.btn-effect::after {
  border-right: 3px solid black;
  border-top: 3px solid black;
  right: -3px;
  transform-origin: 100% 0;
}

.btn-effect:hover::after,
.btn-effect:hover::before {
  transform: scale(1);
}

.btn-effect:hover {
  background-color: transparent !important;
  color: black !important;
  border: none;
}
</style>
