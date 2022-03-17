const informacion = document.getElementById("informacion");
const txt_usuario = document.getElementById("txt_usuario")

async function obtenerNoticias()
{
    let response = await fetch(`https://api.github.com/users/${txt_usuario.value}`);
    let responseJson = await response.json()
    console.log(responseJson)
    informacion.innerHTML = `<h1>${responseJson.name} has ${responseJson.followers} followers</h1>
    <img src="${responseJson.avatar_url}" alt="Foto Perfil">` 
    txt_usuario.value = ""
}