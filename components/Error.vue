<script setup>
defineProps({
  errorType: {
    type: String,
    default: "general",
    validator(value) {
      return [
        "general",
        "category-page",
        "homepage",
        "submit-page",
        "result",
        "recover-page",
        "userauth",
        "comments",
        "single-news",
        "validate-page",
      ].includes(value);
    },
  },
  errorMessage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p :class="`error-${errorType}`">{{ errorMessage }}</p>
</template>

<style scoped>
.error-category-page,
.error-general {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: red;
}

.error-homepage {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.error-submit-page {
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: red;
}
.error-result {
  width: 100%;
  color: red;
}
.error-recover-page {
  color: red;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
  margin-left: 0;
}
.error-userauth {
  color: red;
  font-size: 0.8rem;
  text-align: center;
  font-size: 1.2rem;
}

.error-comments {
  color: rgb(243, 0, 0);
  background-color: rgb(34, 0, 41);
  border-radius: 5px;
  text-align: center;
  font-size: 1.5rem;
}

.error-single-news {
  margin-top: 10px;
  color: rgb(255, 0, 0);
  background-color: rgb(24, 0, 29);
  border-radius: 5px;
  text-align: center;
  padding: 0.2rem;
  font-size: 1.5rem;
}
.error-validate-page {
  margin: 0 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: red;
}

/* DESKTOP */

@media (min-width: 800px) {
  .error-validate-page {
    font-size: 2rem;
  }
  .error-userauth {
    margin-top: -1rem;
  }
}
</style>
