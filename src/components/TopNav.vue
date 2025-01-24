<script setup>
import mainLogo from '../assets/logo-mybrand.svg'
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
</template>

<style scoped>
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
</style>