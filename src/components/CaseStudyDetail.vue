<script setup>
import { ref } from 'vue'
import bocetosAbsolook from '../assets/BOCETOS ABSOLOOK.png'
import anuncioLuminoso from '../assets/ANUNCIO LUMINOSO BIOTECH.png'
import absolook from '../assets/ABSOLOOK-07.png'

const currentSlide = ref(0)
const slides = [
  bocetosAbsolook,
  anuncioLuminoso,
  absolook,
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <section class="case-study-header">
    <div class="breadcrumb">
      <span>INICIO > CASOS DE EXITO</span>
    </div>
    <h1>Absolook</h1>
  </section>
  
  <section class="case-study-content-section">
    <div class="case-study-content">
      <div class="text-section">
        <div class="text-content">
          <h2>IMAGINAMOS</h2>
          <div class="description">
            <p>Un logo en el que se mezclara el trabajo del estilista con la frescura que se vive al adoptar un nuevo estilo, cuando nos reinventamos a través de un corte de cabello y el impacto es absoluto.</p>
          </div>
          <h2>VISUALIZAMOS</h2>
          <div class="description">
            <ul>
              <li>La suavidad con la que debe tratarse a cada cliente</li>
              <li>La confianza que pone en quien lo arregla</li>
              <li>La mirada de quien se asombra ante nuestros cambios</li>
              <li>Nuestra presencia en la zona</li>
            </ul>
          </div>
        </div>
        <div class="slider-section">
          <div class="slider">
            <img :src="slides[currentSlide]" :alt="'Slide ' + (currentSlide + 1)" />
            <div class="slider-controls">
              <button @click="prevSlide" class="slider-button prev">&lt;</button>
              <button @click="nextSlide" class="slider-button next">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="wooden-logo-section">
    <div class="wooden-logo">
      <img src="../assets/ABSOLOOK-07-banner.png" alt="Absolook wooden logo" />
    </div>
  </section>
</template>

<style scoped>
.case-study-header {
  padding: 20px 100px;
  background-color: white;
}

.case-study-header h1 {
  font-weight: 200;
  font-size: 50px;
}

.case-study-content-section {
  background-color: #000000;
  padding: 4rem 100px;
}

.case-study-content {
  max-width: 1400px;
  margin: 0 auto;
}

.text-section {
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
}

.text-content {
  flex: 1;
  color: white;
}

.text-content h2 {
  margin-bottom: 20px;
  font-family: 'Montserrat';
}

.breadcrumb {
  font-family: 'Montserrat';
  font-size: 14px;
  margin-bottom: 2rem;
}

.description p {
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 100;
  line-height: 1.4;
  margin-bottom: 50px;
}

.description ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.description ul li {
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 100;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.description ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.slider-section {
  flex: 1;
}

.slider {
  position: relative;
  width: 100%;
}

.slider img {
  width: 100%;
  height: auto;
  display: block;
}

.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.slider-button {
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.slider-button:hover {
  background-color: white;
}

.wooden-logo-section {
  background-color: white;
  padding: 4rem 0;
}

.wooden-logo {
  width: 100%;
}

.wooden-logo img {
  width: 100%;
  height: auto;
  display: block;
}
</style>