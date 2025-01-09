<script setup>
import InputEmail from '~/components/forms/InputEmail.vue';
import InputPassword from '~/components/forms/InputPassword.vue';
import Button from '~/components/forms/Button.vue';
import Error from '~/components/Error.vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
</script>

<template>
    <main class="auth">
        <h1>Login</h1>
        <form class="auth">
            <fieldset class="email no-gap">
                <label for="email">Email</label>
                <InputEmail v-model="email" required/>
            </fieldset>

            <fieldset class="password">
                <label for="password">Password</label>
                <InputPassword v-model="password" required/>
            </fieldset>

            <NuxtLink class="forgot-password" to="/recover-password"> Forgot password?</NuxtLink>
            <Button classType="principal" text="Login"/>
            <Error v-if="errorMessage" errorType="userauth" :errorMessage="errorMessage"/>
        </form>
        <p>
            First time on OctoNews? <NuxtLink to="/register"> Register </NuxtLink>
        </p>
    </main>
</template>

<style scoped>
main.auth {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

form.auth {
  min-width: 200px;
  width: 60%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(237, 237, 237);
  border-radius: 10px;
  box-shadow: 0px 15px 16px 0px rgba(0, 0, 0, 0.298);
  border: 3px solid rgb(0, 110, 255);
  padding: 1rem;
  margin: 1rem;
}

input.auth.name {
  border: 3px solid rgb(0, 110, 255);
}

form.auth fieldset {
  border: 0;
  margin-bottom: 1rem;
}

form.auth fieldset label {
  display: block;
  font-weight: bold;
}

form.auth > button {
  align-self: center;
  margin-top: 1rem;
  width: 130px;
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

/* DESKTOP */

@media (min-width: 800px) {
  main.auth h1 {
    font-size: 3rem;
  }

  form.auth {
    height: 350px;
    align-items: center;
    gap: 1rem;
  }

  form.auth fieldset label {
    font-size: 1.3rem;
  }
  form.auth fieldset input {
    width: 250px;
    font-size: 1rem;
  }
}
</style>