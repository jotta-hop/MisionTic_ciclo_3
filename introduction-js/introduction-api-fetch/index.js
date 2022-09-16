const uri_users = 'https://jsonplaceholder.typicode.com/users'

// Obtener los usuarios
async function obtener_usurio(uri_users) {
    //Enviar petición de tipo Get 
    const resp = await fetch(uri_users)
    console.log(resp)
    const data = await resp.json()
    //console.log(data)
    return data    
}

// Mostrar los ususarios
function mostrar_usuarios (user) {
    // Referenciar tabla
    const tabla = document.getElementById('tabla')
    const tbody = `<tbody>`

    for (let i = 0; i <users.length; i++) {
        tbody += `
            <tr>
            <td>${users.id}</td>
            <td>${users.name}</td>
            <td>${users.username}</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        `
    }
    tdoby += `</tbody>`
    tabla.innerHTML += tbody
}
    
    
// Función pincipal

obtener_usurio(uri_users)