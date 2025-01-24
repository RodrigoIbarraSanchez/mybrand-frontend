<template>
  <section class="nosotros" id="nosotros">
    <div class="nosotros-content">
      <div class="nosotros-text">
        <h2>NOSOTROS</h2>
        <p>Nos apasiona encontrar la esencia de las marcas y transmitirla hacia su público.</p>
        <p>Sabemos que a través de un logo, un slogan, los mensajes que lanzamos y todo lo que se asocia con cada marca deja una huella en la mente y en el corazón del espectador, logrando que se identifique y nos haga parte de su mundo.</p>
        <p>Así, nos reunimos en este laboratorio de ideas un grupo de profesionales que dedican su vida a esto: encontrar qué es lo que hace a tu marca ser única.</p>
      </div>
      <div class="nosotros-image">
        <img src="../assets/multiple-lightbulb-designs.png" alt="Multiple lightbulb designs" />
        <div class="yellow-overlay"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros {
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background-color: #000000;
}

.nosotros-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.nosotros-text {
  flex: 1;
  text-align: left;
}

.nosotros-text h2 {
  font-family: 'Montserrat';
  font-weight: bolder;
  font-size: 42px;
  margin-bottom: 2rem;
  color: #ffffff;
}

.nosotros-text p {
  font-family: 'Montserrat';
  font-size: 24px;
  color: #ffffff;
  font-weight: 200;
  margin-bottom: 1.5rem;
}

.nosotros-image {
  flex: 1;
  position: relative;
}

.nosotros-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  position: relative;
  z-index: 2;
}

.yellow-overlay {
  position: absolute;
  top: 45%;
  right: -10%;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: translateY(-50%);
  z-index: 1;
}
</style>