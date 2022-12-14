const users = [
    {nombre: "Andrés", apellido: "Quintero", email: "andqui@gmail.com", fecha_nacimiento: "10/08/1993", foto: "" },
    {nombre: "Alejandro", apellido: "Consuegra ", email: "aleconsu@gmail.com", fecha_nacimiento: "10/08/1996", foto: "" },
    {nombre: "Luisa", apellido: "Quiceno", email: "luqui@gmail.com", fecha_nacimiento: "11/09/1983", foto: "" },
    {nombre: "Camila", apellido: "Suaréz ", email: "camsuar@outlook.com", fecha_nacimiento: "01/12/1963", foto: "" },
]

//Referenciando tabla
const tabla = document.getElementById('table-users')
let tbody = '<tbody>'

for (let i = 0; i < users.length; i++){
    const obj = users[i]
    tbody += `
        <tr>
            <td>${obj.nombre}</td>
            <td>${obj.apellido}</td>
            <td>${obj.email}</td>
            <td>${obj.fecha_nacimiento}</td>
            <td>${obj.foto}</td>
            <td>
            <img width="120" src="${obj.foto}"/>
            </td>
        </tr>
    `  
}

tbody += '</tbody>'
tabla.innerHTML += tbody;
