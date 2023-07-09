<template>
  <div class="showcase-section">
    <div class="showcase-section__container" data-scroll data-scroll-speed="-1">
      <h1 class="title">Pick your Dream Car</h1>

      <div class="showcase-section__container--stats-container">
        <div
          class="showcase-section__container--stats-container__stat-container"
        >
          <img src="../assets/images/statLine.svg" alt="" />
          <p>EPA gas range</p>
          <p><span class="data">32</span> mpg</p>
        </div>

        <div
          class="showcase-section__container--stats-container__stat-container"
        >
          <img src="../assets/images/statLine.svg" alt="" />
          <p>Drivetrain</p>
          <p>All-wheel drive</p>
        </div>

        <div
          class="showcase-section__container--stats-container__stat-container"
        >
          <img src="../assets/images/statLine.svg" alt="" />
          <p>Max power</p>

          <p>1200 hp</p>
        </div>
      </div>
    </div>

    <div
      class="showcase-section__cars-container"
      data-scroll-speed="2"
      data-scroll
    >
      <img src="../assets/images/rivian12md.png" alt="" />
      <img src="../assets/images/rivian5md.png" alt="" />

      <h1 class="large-number" data-scroll data-scroll-speed="-1">2</h1>
      <img src="../assets/images/rivian10md.png" alt="" />
    </div>

    <div class="showcase-section__cars-container-mobile">
      <img src="../assets/images/rivian5md.png" alt="" />
    </div>

    <div class="discover" id="discover">
      Discover <img src="../assets/images/greenRightArrow.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, watchEffect } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { intersectionObserver } from "@/animation/useIntersectionObserver";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const discoverBoxes = document.querySelectorAll("#discover");

  discoverBoxes.forEach((discoverBox) => {
    discoverBox.addEventListener("mouseenter", () => {
      gsap.to(discoverBox, {
        x: 30,
        ease: "power3.inOut",
        duration: 1,
      });
    });

    discoverBox.addEventListener("mouseleave", () => {
      gsap.to(discoverBox, {
        x: 0,
        ease: "power3.inOut",
        duration: 1,
      });
    });
  });

  const statContainers = Array.from(
    document.querySelectorAll(
      ".showcase-section__container--stats-container__stat-container"
    )
  );

  statContainers.forEach((statContainer) => {
    intersectionObserver(statContainer, { threshold: 0.1 }).then(() => {
      gsap.set(statContainer, {
        visibility: "visible",
      });

      gsap.to(statContainer, {
        duration: 1,
        ease: "power3.inOut",

        scrollTrigger: {
          trigger: statContainer,
        },
      });

      gsap.to(statContainer.children[0], {
        width: "10rem",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: statContainer.children[0],
        },
      });
      gsap.from(statContainer.children[1], {
        x: "-50px",
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: statContainer.children[0],
        },
      });

      gsap.fromTo(
        statContainer.children[2],
        { y: 0, opacity: 0 },
        {
          opacity: 1,
          delay: 0.1,
          duration: 0.4,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          scrollTrigger: {
            trigger: statContainer.children[2],
          },
        }
      );
    });
  });
});




</script>

<style scoped lang="scss">
.showcase-section {
  min-height: max-content;
  width: 100%;
  padding-top: 2rem;

  font-family: "grotesk-regular";
  box-sizing: border-box;

  &__container {
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem 5rem;

    &--stats-container {
      padding-left: 10rem;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;

      &__stat-container {
        color: #dbff00;
        visibility: hidden;

        img {
          width: 0;
        }
      }
    }
  }

  &__cars-container {
    position: relative;
    height: 30rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    gap: 5rem;

    h1 {
      position: absolute;
    }

    img {
      height: 90%;
      object-fit: contain;
      z-index: 20;
    }

    .large-number {
      color: #dbff00;
      font-size: 50rem;
      font-family: "grotesk-bold";
      font-weight: 700;
      letter-spacing: -0.50825rem;
      opacity: 0.4000000059604645;
      right: 12rem;
      position: absolute;
      top: -30rem;
      z-index: 10;
    }
  }

  &__cars-container-mobile {
    display: none;
  }
}

.discover {
  width: 10rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #dbff00;
  font-size: 1.25rem;
  padding-left: 15rem;
  cursor: pointer;

  img {
    width: 2.5rem;
  }
}

@media screen and (max-width: 900px) {
  .showcase-section {
    padding: 0;
    padding: 4rem 0;

    &__container {
      padding: 0 2rem;

      h1 {
        text-align: center;
      }

      max-width: 100%;
      &--stats-container {
        padding-left: 0;

        &__stat-container {
          width: 100%;
        }
      }
    }

    &__cars-container {
      display: none;
    }

    &__cars-container-mobile {
      display: flex;
      padding: 2rem 0;
    }
  }

  .discover {
    padding-top: 0rem;
    padding-left: 2rem;
  }
}
</style>
