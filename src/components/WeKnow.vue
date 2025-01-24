<template>
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

  <section id="we-know" class="we-know">
    <div class="we-know-content">
      <h4>En <span>my</span>brand nos apasiona analizar, imaginar, crear y definir estilos de comunicación que posicionarán tu marca.</h4>
    </div>
  </section>
</template>

<script setup>
const gridImages = Array.from({ length: 30 }, (_, i) => `/grid-background/${i + 1}.png`)
</script>

<style scoped>
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

.we-know h4 {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 27px;
}

.we-know span {
  font-weight: 500;
  color: #000000;
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