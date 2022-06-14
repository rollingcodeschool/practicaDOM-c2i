function cambiarTitulo() {
  console.log("llamamos a la funcion cambiarTitulo");
  // seleccionar el titulo h1 y cambiar el color del texto
  let tituloH1 = document.querySelector("#titulo");
  // let tituloH1 = document.getElementById('titulo');
  //  let tituloH1 = document.getElementsByClassName('display-1');
  //   let tituloH1 = document.getElementsByTagName("a");
  console.log(tituloH1);
  tituloH1.innerHTML = 'Un nuevo titulo de prueba';
//   tituloH1.className += 'text-primary'
  tituloH1.className = 'display-1 text-center text-primary';
}


function verMas(){
    console.log('Desde la funcion verMas');
    // crear el parrafo
    let parrafoNuevo = document.createElement('p'); //<p></p>
    console.log(parrafoNuevo);
    // agregar texto al parrafo
    parrafoNuevo.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora repellendus consequuntur dolor aut sunt, vero laboriosam ipsa? Alias tenetur quos eligendi dicta consectetur doloribus inventore nobis, aperiam, eum nulla error. Labore aut ut hic. Dolores ut voluptates quos consectetur! Accusantium sed deleniti soluta neque excepturi est sint quidem eaque, officiis, molestiae assumenda. Magni aliquid unde atque modi! Eligendi dolorum enim rem voluptatibus! Assumenda modi cumque in laboriosam provident laborum, maiores ea et fugiat iste dolor voluptatibus nihil beatae consectetur, impedit non fuga, temporibus ex eius dignissimos quisquam eaque corporis id exercitationem? Architecto natus a rerum distinctio soluta maxime, ut ipsa velit ab nulla, aspernatur est aliquam eveniet, quae quis deleniti nam porro quos eaque non adipisci enim? Ipsum voluptas esse alias reprehenderit. Molestiae atque tempore, dolorum accusamus reiciendis quidem dicta voluptas eius adipisci cumque molestias magnam. Architecto perspiciatis illo sunt dolores ea in nostrum enim deleniti quas natus! Nostrum, illo!';
    parrafoNuevo.className = 'lead';

    // insertar ese parrafo en el html
    let articulosPadres = document.getElementsByTagName('article');
    console.log(articulosPadres[1]);
    articulosPadres[1].appendChild(parrafoNuevo);
    // traer el boton
    let btnVerMas = document.querySelector('#btnVerMas');
    console.log(btnVerMas);
    btnVerMas.innerHTML = 'Ocultar';
    btnVerMas.className = 'btn btn-danger';
}