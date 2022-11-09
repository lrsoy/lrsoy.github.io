<!-- Home -->

<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <div class="book one" />
    <div class="book two">
      <span />
    </div>
    <div class="book three" />
    <div class="book four" />
    <div class="book five" />
    <div class="child">
      <div class="head">
        <div class="hair" />
        <span class="rtch" />
        <span class="glasses" />
      </div>
      <div class="body">
        <div class="hand-one" />
        <div class="hand-two" />
        <div class="book-read">
          <span class="letter r">R</span>
          <span class="letter e">E</span>
          <span class="letter a">A</span>
          <span class="letter d">D</span>
        </div>
      </div>
      <div class="legs">
        <div class="leg-one" />
        <div class="leg-two" />
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
.home-container {
  @apply relative w-[400px] h-[500px] m-auto;

  div {
    box-sizing: content-box;
  }

  *::before,
  *::after {
    content: '';
    position: absolute;
    box-sizing: content-box;
  }

  * {
    @apply absolute;
  }

  .one {
    @apply h-[35px] w-[55px] bg-[#da0243] left-[150px] bottom-[70px] border-solid border-[#fb0b4c] border-t-[5px] border-r-[5px] border-b-[5px] border-l-[120px];

    &::before {
      @apply h-[25px] w-[95px] bg-white top-[2px] -left-[120px] border-solid border-[#ebebeb] border-x-[7px] border-y-[3px];
    }

    &::after {
      @apply w-2 h-[17px] bg-[#fdb002] top-2 -left-10;
      box-shadow: 1px 2px 0 rgba(0, 0, 0, .15);
    }
  }

  /* two */
  .two {
    @apply h-[45px] w-[110px] bg-[#1f305e] left-40 bottom-[115px] border-solid border-[#0d1a4f] border-y-[5px] border-l-[5px] border-r-[80px];

    span {
      @apply w-[10px] h-[25px] bg-[#ff0a4a] top-[10px] left-[130px];

      &::before {
        @apply border-solid bottom-0 border-x-[5px] border-t-0 border-b-8 border-x-transparent border-t-transparent border-b-white
      }
    }
  }

  .two::before {
    height: 35px;
    width: 60px;
    background-color: #FFF;
    top: 3px;
    left: 116px;
    border-style: solid;
    border-width: 3px 7px 3px 7px;
    border-color: #ebebeb;
  }

  .two::after {
    height: 32px;
    width: 15px;
    background-color: #FFF;
    border-radius: 50%;
    top: 6px;
    left: 80px;
  }

  /* three */
  .three {
    height: 35px;
    width: 150px;
    background-color: #da0243;
    left: 180px;
    bottom: 170px;
    border-style: solid;
    border-width: 5px 8px 5px 8px;
    border-color: #fb0b4c;
  }

  .three::before {
    height: 25px;
    width: 15px;
    border-radius: 50%;
    background-color: #ffb207;
    top: 5px;
    right: 15px;
  }

  /* four */
  .four {
    height: 15px;
    width: 130px;
    background-color: #0b1b4f;
    left: 150px;
    bottom: 215px;
    border-style: solid;
    border-width: 10px 25px 10px 8px;
    border-color: #feb101;
  }

  /* five */
  .five {
    height: 30px;
    width: 200px;
    background-color: #0b1b4f;
    left: 135px;
    bottom: 250px;
  }

  .five::before {
    height: 20px;
    width: 140px;
    background-color: #FFF;
    top: 2px;
    border-style: solid;
    border-width: 3px 7px 3px 7px;
    border-color: #ebebeb;
  }

  /* child */
  .child {
    height: 125px;
    width: 95px;
    top: 95px;
    left: 270px;
  }

  /* body */
  .body {
    width: 40px;
    height: 65px;
    background-color: blue;
    border-radius: 54% 26% 50% 3% / 31% 16% 60% 12%;
    background-color: #feb101;
    top: 50px;
  }

  .body::before {
    left: 20px;
    border-style: solid;
    border-width: 15px 7px 0 7px;
    border-color: #FFF transparent transparent transparent;
  }

  .body::after {
    top: -16px;
    left: 27px;
    width: 6px;
    height: 25px;
    background-color: #ffbc83;
    transform: skewY(35deg) rotate(25deg);
  }

  /* head */
  .head {
    left: 23px;
    top: 18px;
    height: 30px;
    width: 25px;
    background-color: #ffbc83;
    border-radius: 33% 17% 31% 71% / 31% 37% 44% 65%;
  }

  /* hair */
  .hair {
    top: -21px;
    left: -8px;
    height: 23px;
    width: 31px;
    background-color: #0f1956;
    border-radius: 52% 46% 31% 0% / 72% 67% 3% 35%;
  }

  .hair::before {
    top: 19px;
    left: 0px;
    width: 15px;
    height: 25px;
    background-color: #0f1956;
    border-radius: 0% 0% 0% 100% / 1% 0% 0% 100%
  }

  .hair::after {
    top: 1px;
    left: -6px;
    height: 11px;
    width: 25px;
    background-color: #FFF;
    border-radius: 10px;
    transform: rotate(-12deg);
  }

  /* */
  .rtch {
    width: 20px;
    height: 15px;
    background-color: #ffbc83;
    top: 2px;
    right: 0;
    border-radius: 11% 23% 0% 28% / 27% 39% 0% 100%
  }

  .rtch::before {
    height: 12px;
    width: 7px;
    border-radius: 50%;
    background-color: #ffbc83;
    transform: rotate(-25deg);
    left: -5px;
    top: 10px
  }

  /* glasses */
  .glasses,
  .glasses::before {
    height: 14px;
    width: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #0b1b4f;
  }

  .glasses {
    top: 6px;
    left: 13px;
  }

  .glasses::before {
    top: -1px;
    left: 8.5px
  }

  /* hands */
  .hand-one,
  .hand-two {
    width: 50px;
    box-sizing: border-box;
    border-radius: 0% 0% 0% 41% / 31% 0% 55% 40%;
  }

  .hand-one {
    border-left: 11px solid #fec300;
    border-bottom: 8px solid #fec300;
    height: 45px;
    top: 9px;
    left: 12px;
    transform: rotate(-7deg);
    z-index: 5;
  }

  .hand-two {
    border-left: 11px solid #ffb202;
    border-bottom: 8px solid #ffb202;
    height: 40px;
    top: 4px;
    left: 28px;
    transform: rotate(-4deg);
    z-index: -1;
  }

  .hand-one::before,
  .hand-two::before {
    height: 10px;
    width: 10px;
    background-color: #fec300;
    border-radius: 50%;
    top: -5px;
    left: -10px;
  }

  .hand-one::after,
  .hand-two::after {
    width: 11px;
    height: 8px;
    background-color: #ffc575;
    border-radius: 0% 100% 36% 0% / 46% 86% 15% 40%;
    bottom: -8px;
    right: -10px;
  }

  /* book */
  .book-read {
    top: 20px;
    left: 60px;
    height: 33px;
    width: 25px;
    background-color: #ff0b4a;
    transform: skewY(-15deg) rotate(15deg);
    transform-style: preserve-3d;
  }

  .book-read::before {
    top: -1px;
    border-style: solid;
    border-width: 6px 8px 0 18px;
    border-color: #FFF transparent transparent transparent;
  }

  .book-read::after {
    left: -1px;
    bottom: -6px;
    border-style: solid;
    border-width: 6px 6px 0 20px;
    border-color: #ff0b4a transparent transparent transparent;
  }

  /* letters */
  .book-read .letter {
    font-size: 5px;
    top: 0px;
    left: 0px;
    transform: translateZ(-10px);
  }

  .book-read .letter.r {
    animation: r 3s linear infinite;
  }

  .book-read .letter.e {
    animation: e 3s linear .2s infinite;
  }

  .book-read .letter.a {
    animation: a 3s linear .4s infinite;
  }

  .book-read .letter.d {
    animation: d 3s linear .4s infinite;
  }

  @keyframes r {
    to {
      font-size: 21px;
      top: -70px;
      left: -10px;
    }
  }

  @keyframes e {
    to {
      font-size: 21px;
      top: -60px;
      left: 25px;
    }
  }

  @keyframes a {
    to {
      font-size: 21px;
      top: -50px;
      left: 45px;
    }
  }

  @keyframes d {
    to {
      font-size: 21px;
      top: -40px;
      left: 65px;
    }
  }

  /* legs */
  .legs {
    width: 70px;
    height: 20px;
    background-color: #ff0a49;
    border-radius: 50% 50% 50% 35%;
    bottom: 0
  }

  .leg-one,
  .leg-two {
    height: 62px;
    width: 14px;
    background-color: #ff0a49;
    border-radius: 0% 100% 68% 32% / 100% 7% 93% 0%;
    transform-origin: top left;
  }

  .leg-one {
    top: 5px;
    left: 42px;
    z-index: 2;
    transform: rotate(5deg);
    animation: move-leg 2s linear infinite alternate;
  }

  .leg-two {
    top: 4px;
    left: 56px;
    z-index: 1;
    animation: move-leg 2s linear 2s infinite alternate;
  }

  @keyframes move-leg {
    from {
      transform: rotate(-5deg);
    }

    to {
      transform: rotate(5deg);
    }
  }

  /* foot */
  .leg-one::before,
  .leg-two::before {
    height: 4px;
    width: 4px;
    background-color: #ffc575;
    bottom: -4px;
    left: 1px;
  }

  .leg-one::after,
  .leg-two::after {
    width: 25px;
    height: 7px;
    background-color: #333;
    bottom: -14px;
    border-radius: 26% 74% 100% 0% / 14% 100% 0% 86%;
    border-bottom: 3px solid #ff0051;
  }
}
</style>
