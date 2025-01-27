<template>
  <div class="desktop-user">
    <!-- Logged -->
    <!-- user have icon-->
    <!-- <img class="desktop-user-img" src="/octopus.png" alt="user-settings"/> -->
    <!-- user doesn't have icon-->
    <!-- <img class="desktop-user-img" src="/octopus.png" alt="user-settings"/> -->

    <nav class="desktop-navmenu">
      <!-- Logged -->
      <!-- <a href="/login">Settings</a>
            <button>Logout</button> -->

      <!-- Not Logged -->
      <NuxtLink class="register-header" to="/register">Register</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
img.desktop-user-img {
  border-radius: 30px;
  width: 60px;
  height: 60px;
}

nav.desktop-navmenu {
  display: flex;
  gap: 1.5rem;
  font-weight: bold;
}
nav.desktop-navmenu > button {
  background-color: rgb(200, 222, 246);
  border: none;
  font-size: 16px;
  font-weight: bold;
  display: block;
  color: rgb(219, 26, 26);
  cursor: pointer;
}

nav.desktop-navmenu > a {
  text-decoration: none;
  color: rgb(24, 0, 122);
}

div.desktop-user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-right: 0.5rem;
  background-color: rgb(200, 222, 246);
}

@media (min-width: 1000px) {
  header.front-header nav a.register-header {
    padding-left: 0.5rem;
  }
}
</style>
