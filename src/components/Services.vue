<script setup>
import iconNaming from '../assets/icon-naming.svg'
import iconLogo from '../assets/icon-logo.svg'
import iconDigital from '../assets/icon-digital.svg'
</script>

<template>
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
</template>

<style scoped>
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
</style>