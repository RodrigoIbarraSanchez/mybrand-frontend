<script setup>
import mainLogo from '../assets/logo-mybrand.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <img :src="mainLogo" alt="MyBrand logo" class="footer-logo" />
        <p class="copyright">Derechos Reservados 2021</p>
      </div>
      <div class="footer-right">
        <div class="contact-info">
          <p>Tel: 55 55 55 55 55</p>
          <p>Mail: hola@mybrand.com</p>
          <div class="footer-links">
            <a href="#">Aviso de Privacidad</a>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="facebook">Facebook</a>
          <a href="#" class="instagram">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: white;
  padding: 4rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  height: 40px;
  width: auto;
}

.copyright {
  font-family: 'Montserrat';
  font-size: 14px;
  color: #666666;
}

.footer-right {
  display: flex;
  gap: 4rem;
  text-align: left;
}

.contact-info p {
  font-family: 'Montserrat';
  font-size: 14px;
  color: #666666;
  margin-bottom: 0.5rem;
}

.footer-links a {
  font-family: 'Montserrat';
  font-size: 14px;
  color: #666666;
  text-decoration: none;
}

.footer .social-links {
  display: flex;
  gap: 1rem;
}
</style>