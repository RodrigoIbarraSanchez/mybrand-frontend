<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const loading = ref(false);
const error = ref('');
const success = ref(false);

const submitForm = async (e) => {
  e.preventDefault();
  loading.value = true;
  error.value = '';
  success.value = false;

  try {
    await axios.post('https://mybrand-backend-0fcf53561016.herokuapp.com/', formData.value);
    success.value = true;
    formData.value = { name: '', email: '', message: '' };
  } catch (err) {
    error.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="contacto" class="contact">
    <div class="contact-container">
      <div class="contact-left">
        <div class="contact-content">
          <h2>Contáctanos</h2>
        </div>
      </div>
      <div class="contact-right">
        <form class="contact-form" @submit="submitForm">
          <div v-if="error" class="error-message">{{ error }}</div>
          <div v-if="success" class="success-message">¡Mensaje enviado con éxito!</div>
          
          <div class="form-group">
            <label for="name">Nombre</label>
            <input 
              type="text" 
              id="name"
              v-model="formData.name"
              required
            >
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email"
              v-model="formData.email"
              required
            >
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea 
              id="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="submit-button"
            :disabled="loading"
          >
            {{ loading ? 'ENVIANDO...' : 'ENVIAR' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  overflow: hidden;
}

.contact-container {
  display: flex;
  min-height: 600px;
  padding: 200px;
}

.contact-left {
  flex: 1;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('../assets/mega-iconB-line.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-content {
  text-align: center;
  position: relative;
  z-index: 2;
  margin-top: -120px;
}

.contact-left h2 {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 42px;
  color: #000000;
  margin-bottom: 2rem;
}

.contact-right {
  flex: 1;
  background-color: white;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  text-align: left;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0;
  background-color: #E0E0E0;
  font-family: 'Montserrat';
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
}

.form-group textarea {
  height: 150px;
  resize: none;
}

.submit-button {
  width: 55%;
  padding: 1rem;
  background-color: transparent;
  border: solid 2px black;
  color: #000000;
  border-radius: 0;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #e6c300;
  border: none;
}
</style>