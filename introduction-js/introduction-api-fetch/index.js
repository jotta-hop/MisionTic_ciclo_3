const uri_users = 'https://jsonplaceholder.typicode.com/users'

// Obtener los usuarios
async function obtener_usurios(uri_users) {
    //Enviar petición de tipo Get 
    const resp = await fetch(uri_users)
   
    //console.log(resp)
    const data = await resp.json()
    console.log(data)
    return data    
}

// Mostrar los ususarios
function mostrar_usuarios (users) {
    // Referenciar tabla
    const tabla = document.getElementById('tabla')
    let tbody = `<tbody>`

    for (let i = 0; i < users.length; i++) {
        //Obtener la dirreción
        let address = users[i].address.street
        address += `, ${users[i].address.suite}`
        address += `, ${users[i].address.city}`
        // Variable que representa el cuerpo de la tabla
        tbody += `
            <tr>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].username}</td>
            <td>${users[i].email}</td>
            <td>${address}</td>
            <td>${users[i].phone}</td>
            <td>${users[i].website}</td>
            </tr>
        `
    }
    tbody += `</tbody>`
    tabla.innerHTML += tbody
}  
    
    
// Función pincipal
async function main(){
    const users = await obtener_usurios(uri_users)
    mostrar_usuarios(users)
}
obtener_usurios(uri_users)

main()