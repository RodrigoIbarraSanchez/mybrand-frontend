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
    await axios.post('https://mybrand-backend-0fcf53561016.herokuapp.com/', formData.value, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: false
    });
    success.value = true;
    formData.value = { name: '', email: '', message: '' };
  } catch (err) {
    console.error('Form submission error:', err);
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
  padding: 2rem;
}

.contact-right {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact h2 {
  font-family: 'Montserrat';
  font-weight: bolder;
  font-size: 42px;
  color: #000000;
}

.contact-form {
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat';
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Montserrat';
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: var(--primary-color);
  color: #000000;
  border: none;
  padding: 1rem 2rem;
  font-family: 'Montserrat';
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e6c200;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #dc3545;
  border-radius: 4px;
  background-color: #f8d7da;
}

.success-message {
  color: #28a745;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #28a745;
  border-radius: 4px;
  background-color: #d4edda;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 2rem;
  }
  
  .contact-left,
  .contact-right {
    padding: 1rem;
  }
  
  .contact h2 {
    font-size: 32px;
  }
}
</style>