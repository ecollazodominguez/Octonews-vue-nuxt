<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@200;400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Saira", sans-serif;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
min-height: 100vh;
background-color: rgba(207, 205, 205, 0.699);
}

code {
font-family: 'Saira', sans-serif;
}

main {
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  margin-top: 70px;
}

p {
  overflow-wrap: anywhere;
}

section.submit-page,
section.edit-page {
  grid-column: span 12;
  width: 100%;
  max-width: 800px;
}

header.submit-page-header,
section.edit-page-header {
  margin-top: 1rem;
  border-bottom: 2px solid black;
}
header.submit-page-header h1,
section.edit-page h1 {
  font-size: 2.3rem;
  margin-left: 0.5rem;
}
</style>