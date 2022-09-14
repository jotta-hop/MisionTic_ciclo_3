//Capturar elemntos pro id y asignarlos a la variable 'div'
const div = document.getElementById('app')
//Actulizar contenido (adicional html al elemento) 

div.innerHTML = ` 
  <h2>Título desde Js</h2>
  <h4> Somos el grupo 14</h4>
  <p>Estamos insertando código html desde js, 
  ¡estoy muy feliz! </p>
`
//Arreglo que contiene objetos de tipo persona
const persona = [
    { nombre: "Diana", apellido: "Fortich" },
    { nombre: "Melín", apellido: "Rozalez" },
    { nombre: "Luis", apellido: "Peláez" },
    { nombre: "Alejandro", apellido: "Consuegra" },
    { nombre: "Lina", apellido: "Teheran" },
    { nombre: "Chanchito", apellido: "Feliz" },
]
//Referenciar tabla
const tabla = document.getElementById('tabla')
tabla.innerHTML += `<tbody>`

// Iterar arreglo 
for (let i = 0; i < persona.length; i++) {
    tabla.innerHTML += `
  <tr>
    <td>${persona[i].nombre}</td>
    <td>${persona[i].apellido}</td>
  </tr>`
}

tabla.innerHTML += `</tbody>`