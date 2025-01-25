<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const contacts = ref([]);
const loading = ref(true);
const error = ref('');

const fetchContacts = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/login');
    return;
  }

  try {
    const response = await axios.get('https://mybrand-backend-0fcf53561016.herokuapp.com/api/contacts/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    contacts.value = response.data;
  } catch (err) {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      router.push('/login');
    } else {
      error.value = 'Error al cargar los contactos. Por favor, intente de nuevo.';
    }
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const handleLogout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};

onMounted(() => {
  fetchContacts();
});
</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>Panel de Contactos</h1>
      <button @click="handleLogout" class="logout-button">Cerrar Sesión</button>
    </div>

    <div v-if="loading" class="loading">Cargando...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else class="contacts-table-container">
      <table class="contacts-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact._id">
            <td>{{ formatDate(contact.createdAt) }}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 32px;
}

.logout-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: black;
  font-family: 'Montserrat';
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e6c300;
}

.contacts-table-container {
  overflow-x: auto;
}

.contacts-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contacts-table th,
.contacts-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-family: 'Montserrat';
}

.contacts-table th {
  background-color: #f8f9fa;
  font-weight: 500;
}

.loading,
.error-message {
  text-align: center;
  padding: 2rem;
  font-family: 'Montserrat';
}

.error-message {
  color: #dc3545;
}
</style>