<!-- eslint-disable require-jsdoc -->
<template>
    <div class="fireflies">
        <div
            class="firefly"
            v-for="(firefly, index) in fireflies"
            :key="index"
            :style="{
            animationDuration: `${firefly.duration}s, ${firefly.duration * 2}s`,
            animationDelay: `${firefly.delay}s, ${firefly.delay * 2}s`,
            left: `${firefly.left}vw`,
            top: `${firefly.top}vh`,
            }"
        ></div>
    </div>
<div class="container">
    <div class="text">Jorge Duarte</div>
</div>
<audio id="myAudio" autoplay loop>
    <source src="../assets/stay_with_me.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>
  </template>

<script lang="ts" src="./CustomScene.ts">

</script>

<style>
#myAudio {
  display: hidden;
}

  html{
    background-image: url("../assets/wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }

    .container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100vh;
        overflow: hidden;
        padding-right: 50px;
        z-index: 2;
    }

    .text {
        font-family: system-ui;
        text-transform: uppercase;
        font-size: 5rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
        text-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4, 0 0 40px #00bcd4;
        animation: glowText 10s linear infinite;
    }

    .fireflies {
    position: absolute;
    top: 0;
    left: 0;
    width: 90vw;
    height: 100vh;
    z-index: 1;
}

.firefly {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #eeeef2;
    border-radius: 50%;
    opacity: 1;
    animation: move 10s linear infinite, glow 3s ease-in-out infinite alternate;
}

.firefly:nth-child(2) {
    animation-delay: 2s, 1s;
}

.firefly:nth-child(3) {
    animation-delay: 4s, 3s;
}

.firefly:nth-child(4) {
    animation-delay: 6s, 2s;
}

.firefly:nth-child(5) {
    animation-delay: 8s, 4s;
}

body{
    margin:0;
}


@keyframes glow {
    0% {
        box-shadow: 0 0 15px #00bcd4, 0 0 30px #00bcd4, 0 0 45px #00bcd4, 0 0 60px #00bcd4, 0 0 75px #00bcd4;
    }
    100% {
        box-shadow: 0 0 15px #4caf50, 0 0 30px #4caf50, 0 0 45px #4caf50, 0 0 60px #4caf50, 0 0 75px #4caf50;
    }
}

@keyframes glowText {
    0% {
        text-shadow: 0 0 15px #00bcd4, 0 0 30px #00bcd4, 0 0 45px #00bcd4, 0 0 60px #00bcd4, 0 0 75px #00bcd4;
    }
    50% {
        text-shadow: 0 0 15px #4caf50, 0 0 30px #4caf50, 0 0 45px #4caf50, 0 0 60px #4caf50, 0 0 75px #4caf50;
    }
    100% {
        text-shadow: 0 0 15px #00bcd4, 0 0 30px #00bcd4, 0 0 45px #00bcd4, 0 0 60px #00bcd4, 0 0 75px #00bcd4;
    }
}

.firefly {
  /* outras propriedades */
  transition: top 2s, left 2s;
}

</style>

