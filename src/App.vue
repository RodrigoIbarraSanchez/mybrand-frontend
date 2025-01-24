<script setup>
import HelloWorld from './components/HelloWorld.vue'
import megaIconB from './assets/mega-iconB.svg'
import mainLogo from './assets/logo-mybrand.svg'
</script>

<template>
  <header class="header">
    <div class="logo">
      <img :src="mainLogo" alt="MyBrand logo" />
    </div>
    <nav>
      <a href="#que-hacemos">QUÉ HACEMOS</a>
      <a href="#porque-mybrand">PORQUE MY BRAND</a>
      <a href="#nosotros">NOSOTROS</a>
      <a href="#contacto">CONTACTO</a>
      <div class="social-links">
        <a href="#" class="facebook">Facebook</a>
        <a href="#" class="instagram">Instagram</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Invertir en la identidad de tu marca no es caro, no hacerlo sí lo es.</h1>
        <p>En mybrand planeamos, diseñamos y ejecutamos estrategias bajo una metodología comprobada para encontrar la personalidad apropiada de tu marca.</p>
      </div>
      <div class="hero-image">
        <img :src="megaIconB" alt="MyBrand Icon" />
      </div>
    </section>
  </main>
</template>

<style>
:root {
  --primary-color: #FFD700;
  --text-color: #333;
  --background-color: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  background-color: var(--background-color);
  height: 65px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo span {
  font-weight: bold;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #000000;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 17px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10rem;
  position: relative;
}

.hero-content {
  flex: 2;
  text-align: left;
  max-width: 800px;
  margin: 0;
}

.hero h1 {
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 56px;
  margin-bottom: 2rem;
  color: #000000;
  text-align: left;
}

.hero p {
  font-size: 26px;
  font-family: 'Montserrat';
  color: #000000;
  font-weight: 200;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -50px;
}

.hero-image img {
  max-width: 100%;
  width: 400px;
  height: auto;
}
</style>

<style scoped>
.logo {
  height: 1em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
