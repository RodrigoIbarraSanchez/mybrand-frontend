<script setup>
import HelloWorld from './components/HelloWorld.vue'
import megaIconB from './assets/mega-iconB.svg'
import mainLogo from './assets/logo-mybrand.svg'
import iconNaming from './assets/icon-naming.svg'
import iconDigital from './assets/icon-digital.svg'
import iconLogo from './assets/icon-logo.svg'

// Import grid background images
const gridImages = Array.from({ length: 30 }, (_, i) => `/grid-background/${i + 1}.png`)
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

    <section id="que-hacemos" class="services">
      <div class="services-content">
        <h2>QUÉ HACEMOS</h2>
        <p>Te ayudamos a crear la personalidad de tu empresa. Con nuestra asesoría 360 podrás tener identidad visual, tono de comunicación y lenguaje sin importar el tipo de negocio que tengas, te asesoramos en:</p>
        
        <div class="service-grid">
          <div class="service-item">
            <img :src="iconNaming" alt="Naming icon" class="service-icon" />
          </div>
          <div class="service-item">
            <img :src="iconLogo" alt="Brand identity icon" class="service-icon" />
          </div>
          <div class="service-item">
            <img :src="iconDigital" alt="Digital icon" class="service-icon" />
          </div>
        </div>
      </div>
    </section>
    
    <section id="we-know" class="we-know">
      <div class="we-know-content">
        <h3>Sabemos justo lo que tu MARCA necesita para atraer clientes potenciales</h3>
      </div>
    </section>

    <section class="grid-background">
      <div class="grid-container">
        <div v-for="(image, index) in gridImages" :key="index" class="grid-item">
          <img :src="image" :alt="`Grid image ${index + 1}`" />
        </div>
      </div>
      <div class="overlay"></div>
      <button class="cta-button">COMPRUÉBALO</button>
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
.services {
  background-color: var(--primary-color);
  padding: 6rem 2rem;
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.services h2 {
  font-family: 'Montserrat';
  font-weight: bolder;
  font-size: 42px;
  margin-bottom: 2rem;
  color: #000000;
}

.services p {
  font-size: 24px;
  font-family: 'Montserrat';
  color: #000000;
  font-weight: 200;
  max-width: 85%;
  margin: 0 auto 4rem auto;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.service-icon {
  width: 170px;
  height: 170px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.service-icon.naming {
  background-image: url('@/assets/icon-naming.svg');
}

.service-icon.brand-identity {
  background-image: url('@/assets/icon-logo.svg');
}

.service-icon.digital {
  background-image: url('@/assets/icon-digital.svg');
}

.service-item h3 {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 20px;
  color: #000000;
}

.we-know {
  background-color: 'white';
  height: 350px;
  padding: 1rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.we-know h3 {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 45px;
}

.grid-background {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0;
  width: 100%;
  height: 100%;
}

.grid-item {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.7);
}

.cta-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: bolder;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 0;
  color: white;
  cursor: pointer;
  z-index: 2;
}

.cta-button:hover {
  color: yellow;
  border: solid 2px yellow;
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
