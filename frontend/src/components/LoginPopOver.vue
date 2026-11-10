
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const popover = ref(null)

function togglePopover() {
  isOpen.value = !isOpen.value
}

function closePopover() {
  isOpen.value = false
}

function handleOutsideClick(event) {
  if (
    popover.value &&
    !popover.value.contains(event.target)
  ) {
    closePopover()
  }
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closePopover()
  }
}

function handleLogin() {
  // La autenticación real se implementará con el backend.
  console.log('Formulario de acceso preparado:', email.value)

  alert('El inicio de sesión todavía no está conectado al servidor.')
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="login-container" ref="popover">

    <button
      class="login-trigger"
      type="button"
      @click.stop="togglePopover"
      :aria-expanded="isOpen"
    >
      Iniciar sesión
    </button>

    <div
      v-if="isOpen"
      class="login-overlay"
      @click.self="closePopover"
    >
      <section
        class="login-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        <button
          class="login-close"
          type="button"
          aria-label="Cerrar ventana"
          @click="closePopover"
        >
          ×
        </button>

        <h2 id="login-title">¡Qué bueno verte!</h2>
        <p class="login-description">
          Accede a tu cuenta del Directorio.
        </p>

        <form @submit.prevent="handleLogin">

          <label for="login-email">Correo electrónico</label>
          <input
            id="login-email"
            v-model="email"
            type="email"
            placeholder="ejemplo@correo.com"
            autocomplete="username"
            required
          />

          <label for="login-password">Contraseña</label>

          <div class="password-wrapper">
            <input
              id="login-password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Tu contraseña"
              autocomplete="current-password"
              required
            />

            <button
              type="button"
              class="password-toggle"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? 'Ocultar' : 'Mostrar' }}
            </button>
          </div>

          <button class="login-submit" type="submit">
            Entrar
          </button>

        </form>

        <p class="register-prompt">
          ¿Todavía no tienes cuenta?
          <RouterLink
            to="/registro"
            @click="closePopover"
          >
            Regístrate
          </RouterLink>
        </p>

      </section>
    </div>

  </div>
</template>

<style scoped>
.login-container {
  position: relative;
}

.login-trigger {
  background: var(--color-turquoise, #00CED1);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
}

.login-overlay {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  z-index: 1000;
}

.login-panel {
  position: relative;
  width: 320px;
  padding: 26px;
  background: #fff;
  color: #222;
  border-radius: 14px;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.22);
}

.login-panel h2 {
  margin: 0 25px 6px 0;
  font-size: 21px;
}

.login-description {
  margin: 0 0 22px;
  color: #666;
  font-size: 14px;
}

.login-close {
  position: absolute;
  top: 10px;
  right: 13px;
  border: none;
  background: transparent;
  font-size: 27px;
  cursor: pointer;
  color: #555;
}

.login-panel form {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.login-panel label {
  font-size: 13px;
  font-weight: 700;
  margin-top: 5px;
}

.login-panel input {
  width: 100%;
  min-width: 0;
  padding: 11px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font: inherit;
  box-sizing: border-box;
}

.password-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}

.password-toggle {
  border: none;
  background: transparent;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;
}

.login-submit {
  margin-top: 12px;
  padding: 12px;
  border: none;
  border-radius: 7px;
  background: #9400D3;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.register-prompt {
  margin: 18px 0 0;
  text-align: center;
  font-size: 13px;
}

.register-prompt a {
  color: #9400D3;
  font-weight: 700;
}

/* Adaptación para móviles */
@media (max-width: 650px) {
  .login-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.55);
  }

  .login-panel {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 24px;
    border-radius: 20px 20px 0 0;
    animation: slideUp 0.2s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
