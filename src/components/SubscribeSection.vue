<template>
  <div class="subscribeSection">
    <!-- <img src="../assets/images/rivianSubscribe.png"/> -->
    <div class="subscribeSection__container">
      <div class="subscribeSection__container--text-container">
        <img src="../assets/images/horizontalLinelong.png" class="light"/>

        <div class="container">
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

          <button>Sign Up</button>
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

<script setup lang="ts"></script>

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
        width: 30rem !important;
        
      }

      .thick {
        position: absolute;
        left: 0 !important;
        bottom: 4rem !important;
        height: 1.2rem;
        width: 10rem !important;
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

@media screen and (max-width:485px) {
  .subscribeSection{
    &__container{
      flex-direction: column;
      height: max-content;

      &--text-container{
        padding:0;
        width: 100%;
      }
    }


  }
}
</style>
