<script setup>
import DesktopNavMenu from './DesktopNavMenu.vue';
import PhoneNavMenu from './PhoneNavMenu.vue';
</script>

<template>
    <header class="front-header">
        <img src="/octopus.png" alt="icon octonews"/>
        <input type="search" placeholder="search..."/>
        <DesktopNavMenu/>
        <!-- <PhoneNavMenu/> -->
    </header>
</template>

<style scoped>
header.front-header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  height: 70px;
  background-color: white;
  border-bottom: 3px solid rgb(24, 0, 122);
  z-index: 100;
}

header.front-header > img {
  width: 60px;
}
header.front-header > img:hover {
  cursor: pointer;
}

header.front-header > input {
  padding: 0 0.5rem 0 2.3rem;
  height: 40px;
  width: 55%;
  max-width: 500px;
  border-radius: 20px;
  border: 3px solid rgb(24, 0, 122);
  background: url("/public/svg-icons/search-icon.svg") no-repeat 10px;
  background-size: 20px;
  font-size: 1.2rem;
}
::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  text-align: center;
}


@media (min-width: 1000px) {
  header.front-header > input {
    margin-left: 10rem;
    max-width: 700px;
  }
}
</style>