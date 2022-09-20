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
        tbody += `
            <tr>
            <td>${users[i].id}</td>
            <td>${users.name}</td>
            <td>${users.username}</td>
            <td>${users.email}</td>
            <td>${users.address}</td>
            <td>${users.phone}</td>
            <td>${users.website}</td>
            
            </tr>
        `
    }
    tdoby += `</tbody>`
    tabla.innerHTML += tbody
}  
    
    
// Función pincipal
async function main(){
    const users = await obtener_usurios(uri_users)
    mostrar_usuarios(users)
}
obtener_usurios(uri_users)

main()