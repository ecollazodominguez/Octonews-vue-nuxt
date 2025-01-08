<template>
    <button class="settings">
            <!-- Logged -->
             <!-- Have icon -->
            <!-- <img src="/svg-icons/user-login-default-icon.svg" alt="user-settings"/> -->
            <!-- Not icon -->
            <!-- <img src="/octopus.png" alt="user-settings"/> -->

             <!-- Not Logged-->
        <img src="/svg-icons/users-arrow-left.svg" alt="user-settings"/>
        
        <nav class="dropdown dropdown-content">
            <!-- Logged -->

            <!-- <a href="/settings">Settings</a>
            <hr>
            <button>Logout</button> -->

            <!-- Not Logged-->
            <a href="/register">Register</a>
            <hr>
            <a href="/login">Login</a>
        </nav>
    </button>


</template>

<style scoped>

button.settings {
  background: none;
  border: none;
  width: 45px;
  border-radius: 10px;
}

button.settings:hover {
  cursor: pointer;
}

button.settings > img {
  margin-top: 0.5rem;
  width: 45px;
  height: 45px;
  border-radius: 20px;
}

nav.dropdown {
  height: 0px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 4.2rem;
  min-width: 120px;
  width: 20%;
  background-color: #f1f1f1;
  border-bottom: 2px solid rgb(24, 0, 122);
  border-left: 3px solid rgb(24, 0, 122);
  border-bottom-left-radius: 20px;
  transition: height 0.5s ease;
}

nav.dropdown-content {
  height: 100px;
  background-color: #f1f1f1;
  min-width: 120px;
  width: 20%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.298);
  border-bottom: 2px solid rgb(24, 0, 122);
  border-left: 3px solid rgb(24, 0, 122);
  border-bottom-left-radius: 20px;
}

nav.dropdown > a {
  color: black;
  padding: 12px 20px;
  text-decoration: none;
  text-align: start;
  display: block;
  font-size: 16px;
  width: 100%;
}

nav.dropdown > button {
  width: 100%;
  border: none;
  display: block;
  text-align: start;
  font-size: 16px;
  padding: 12px 20px;
}

nav.dropdown-content hr {
  height: 4px;
  background-color: rgb(24, 0, 122);
}

nav.dropdown-content a:hover {
  background-color: #ddd;
}
</style>