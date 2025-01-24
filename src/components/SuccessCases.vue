<template>
  <section class="success-cases">
    <h2>Casos de éxito</h2>
    <div class="cases-grid">
      <div class="case-item">
        <img src="../assets/ABSOLOOK-07.png" alt="Multiple lightbulb designs" />
        <h3>Absolook</h3>
        <p>Beauty</p>
      </div>
      <div class="case-item">
        <img src="../assets/ANUNCIO LUMINOSO BIOTECH.png" alt="Biotech luminous sign" />
        <h3>Biotechlives</h3>
        <p>Medical</p>
      </div>
      <div class="case-item">
        <img src="../assets/multiple-lightbulb-designs.png" alt="Absolook design" />
        <h3>Skin brand</h3>
        <p>Medical</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.success-cases {
  padding: 6rem 2rem;
  background-color: var(--background-color);
}

.success-cases h2 {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 42px;
  text-align: center;
  margin-bottom: 4rem;
  color: #000000;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.case-item {
  text-align: left;
}

.case-item img {
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.case-item img:hover {
  transform: scale(1.05);
}

.case-item h3 {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0.5rem;
  color: #000000;
}

.case-item p {
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 18px;
  color: #666666;
}
</style>