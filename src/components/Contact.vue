<template>
  <section id="contacto" class="contact">
    <div class="contact-container">
      <div class="contact-left">
        <div class="contact-content">
          <h2>Contáctanos</h2>
        </div>
      </div>
      <div class="contact-right">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" required>
          </div>
          <div class="form-group">
            <label for="name">Correo electrónico</label>
            <input type="email" required>
          </div>
          <div class="form-group">
            <label for="name">Mensaje</label>
            <textarea required></textarea>
          </div>
          <button type="submit" class="submit-button">ENVIAR</button>
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