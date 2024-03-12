var alumnos = 0;

document.getElementById('agregarAlumno').addEventListener('click', function() {
  if (alumnos >= 10) {
    alert('Se han agregado el máximo de alumnos permitidos (10).');
    return;
  }
  
  var nombre = prompt('Ingrese el nombre del alumno:');
  if (!nombre) return;

  var calificaciones = [];
  for (var i = 0; i < 5; i++) {
    var materia = prompt('Ingrese la calificación para ' + obtenerNombreMateria(i + 1) + ':');
    if (!materia || isNaN(materia)) {
      alert('Ingrese una calificación válida para ' + obtenerNombreMateria(i + 1) + '.');
      return;
    }
    calificaciones.push(parseFloat(materia));
  }

  var promedio = calcularPromedio(calificaciones);
  agregarFilaTabla(nombre, calificaciones, promedio);
  alumnos++;
});

function obtenerNombreMateria(indice) {
  switch (indice) {
    case 1: return 'Español';
    case 2: return 'Matemáticas';
    case 3: return 'Historia';
    case 4: return 'Informática';
    case 5: return 'Inglés';
    default: return '';
  }
}

function calcularPromedio(calificaciones) {
  var total = calificaciones.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  return total / calificaciones.length;
}

function agregarFilaTabla(nombre, calificaciones, promedio) {
  var tabla = document.getElementById('tablaPromedio').getElementsByTagName('tbody')[0];
  var fila = tabla.insertRow();

  var celdaNombre = fila.insertCell(0);
  celdaNombre.innerHTML = nombre;

  for (var i = 0; i < 5; i++) {
    var celdaCalificacion = fila.insertCell(i + 1);
    celdaCalificacion.innerHTML = calificaciones[i];
  }

  var celdaPromedio = fila.insertCell(6);
  celdaPromedio.innerHTML = promedio.toFixed(2);
}
