<script setup>
import megaIconB from '../assets/mega-iconB.svg'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Invertir en la identidad de tu marca no es caro, no hacerlo sí lo es.</h1>
      <p>En mybrand planeamos, diseñamos y ejecutamos estrategias bajo una metodología comprobada para encontrar la personalidad apropiada de tu marca.</p>
    </div>
    <div class="hero-image">
      <img :src="megaIconB" alt="MyBrand Icon" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10rem;
  position: relative;
  height: 100vh;
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