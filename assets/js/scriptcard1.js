document.addEventListener('DOMContentLoaded', () => {
  AFRAME.registerComponent('click-handler-card1', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        obtenerInformacionYMostrarModal(el.getAttribute('data-id')); // Modificar aquí
      });
    }
  });

  AFRAME.registerComponent('click-handler-card2', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        obtenerInformacionYMostrarModal(el.getAttribute('data-id')); // Modificar aquí
      });
    }
  });

  AFRAME.registerComponent('click-handler-card3', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        obtenerInformacionYMostrarModal(el.getAttribute('data-id')); // Modificar aquí
      });
    }
  });
  
  function obtenerInformacionYMostrarModal(objetoId) {
    fetch(`http://localhost:5500/api/data/${objetoId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud ha fallado');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data); // Agrega esto para verificar los datos recibidos
        showModal(data.titulo, data.contenido);
      })
      .catch(error => {
        console.error('Error al obtener datos desde el backend:', error);
      });
  }

  function showModal(titulo, contenido) {
    console.log('Elemento modalTitulo:', document.getElementById('modalTitulo'));
  console.log('Elemento modalContenido:', document.getElementById('modalContenido'));

    $('#exampleModal').modal('show');
    document.getElementById('modalTitulo').textContent = titulo;
    document.getElementById('modalContenido').textContent = contenido;
  }
});