<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleLogin = async (e) => {
  e.preventDefault();
  loading.value = true;
  error.value = '';

  try {
    const response = await axios.post('https://mybrand-backend-0fcf53561016.herokuapp.com/api/auth/login', {
      email: email.value,
      password: password.value
    });

    localStorage.setItem('token', response.data.token);
    router.push('/contact-form-dashboard');
  } catch (err) {
    error.value = 'Invalid credentials. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="login-container">
    <form class="login-form" @submit="handleLogin">
      <h2>Admin Login</h2>
      <div v-if="error" class="error-message">{{ error }}</div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email"
          v-model="email"
          required
        >
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password"
          v-model="password"
          required
        >
      </div>

      <button 
        type="submit" 
        class="login-button"
        :disabled="loading"
      >
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Montserrat';
  font-weight: 500;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat';
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat';
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: black;
  font-family: 'Montserrat';
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #e6c300;
}

.login-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Montserrat';
}
</style>