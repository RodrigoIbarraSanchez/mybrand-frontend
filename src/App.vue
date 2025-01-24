<script setup>
import TopNav from './components/TopNav.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import WeKnow from './components/WeKnow.vue'
import About from './components/About.vue'
import SuccessCases from './components/SuccessCases.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <TopNav />
  <main>
    <Hero />
    <Services />
    <WeKnow />
    <About />
    <SuccessCases />
    <Contact />
  </main>
  <Footer />
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
</style>
