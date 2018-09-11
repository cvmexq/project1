console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {

  //console.log('dentro de la funcion');

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'catalogo.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      //console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      //console.log(datos);
      let res = document.querySelector('#respuesta');
      res.innerHTML = '';
      for (let item of datos) {
        res.innerHTML += ` <tr>
          <td>${item.titulo}</td>
          <td>${item.artista}</td>
        </tr> `
        //console.log(item.artista);
      }

    }

  }

}
