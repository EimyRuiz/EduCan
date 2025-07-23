document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página
  
  // Luego puedes seguir con la validación o redirección

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Validación falsa: usuario y contraseña específicos
  if (email === 'admin@educan.com' && password === '1234') {
    // Redirigir al panel de administrador
    window.location.href = 'inicioAdmin.html'; // Cambia por la ruta correcta si quieres
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault(); // evita que el formulario se envíe

      const correo = document.getElementById('registerEmail').value.trim();
      const pass = document.getElementById('registerPassword').value.trim();
      const passConfirm = document.getElementById('registerPasswordConfirm').value.trim();

      // Validación falsa: solo simula que se valida
      if (correo && pass && passConfirm) {
        if (pass === passConfirm) {
          alert('¡Registro exitoso! (Simulado)');
          const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
          modal.hide();
        } else {
          alert('Las contraseñas no coinciden.');
        }
      } else {
        alert('Completa todos los campos.');
      }
    });
  }
});

