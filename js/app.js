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
     // traer el boton
    let btnVerMas = document.querySelector('#btnVerMas');
    // insertar ese parrafo en el html
    let articulosPadres = document.getElementsByTagName('article');

    if(btnVerMas.className === 'btn btn-primary'){
        // 1- forma de crear elementos
      // crear el parrafo
        // let parrafoNuevo = document.createElement('p'); //<p></p>
        // console.log(parrafoNuevo);
        // // agregar texto al parrafo
        // parrafoNuevo.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora repellendus consequuntur dolor aut sunt, vero laboriosam ipsa? Alias tenetur quos eligendi dicta consectetur doloribus inventore nobis, aperiam, eum nulla error. Labore aut ut hic. Dolores ut voluptates quos consectetur! Accusantium sed deleniti soluta neque excepturi est sint quidem eaque, officiis, molestiae assumenda. Magni aliquid unde atque modi! Eligendi dolorum enim rem voluptatibus! Assumenda modi cumque in laboriosam provident laborum, maiores ea et fugiat iste dolor voluptatibus nihil beatae consectetur, impedit non fuga, temporibus ex eius dignissimos quisquam eaque corporis id exercitationem? Architecto natus a rerum distinctio soluta maxime, ut ipsa velit ab nulla, aspernatur est aliquam eveniet, quae quis deleniti nam porro quos eaque non adipisci enim? Ipsum voluptas esse alias reprehenderit. Molestiae atque tempore, dolorum accusamus reiciendis quidem dicta voluptas eius adipisci cumque molestias magnam. Architecto perspiciatis illo sunt dolores ea in nostrum enim deleniti quas natus! Nostrum, illo!';
        // parrafoNuevo.className = 'lead';
    
        // console.log(articulosPadres[1]);
        // articulosPadres[1].appendChild(parrafoNuevo);

        // 2- forma de crear elementos hijos
        let parrafoNuevo = `<p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad ab recusandae aut, modi, placeat eum impedit odio aliquam iste debitis delectus corrupti repellat molestiae ex! Cupiditate quia voluptas repudiandae, rerum velit, laborum fugiat at ea quibusdam id amet eveniet sapiente, sit qui explicabo ullam blanditiis? Dolore cum rerum, quae culpa hic repellendus. Natus ea blanditiis necessitatibus, perspiciatis minima vero ratione fugiat sit modi reiciendis illum dicta, pariatur libero perferendis. Dolores voluptatem, laborum possimus illum minima incidunt necessitatibus eligendi reprehenderit eos itaque enim, repellendus mollitia quaerat laudantium dolor velit architecto nemo eum. Distinctio quae consequatur, ducimus corrupti totam laborum, nam eaque architecto sed vero delectus nesciunt voluptates dolor enim esse ad adipisci libero officiis. Optio, veniam ratione modi repellat soluta dignissimos. Natus hic adipisci illum cumque doloremque explicabo eligendi nam incidunt quidem vel perferendis, eum nostrum quis inventore eaque voluptatum, ut illo tenetur nulla officia corporis alias. Tempora, quidem dolorem?
      </p>`;

        articulosPadres[1].innerHTML += parrafoNuevo;
        
        // cambiar estetica del boton
        console.log(btnVerMas);
        btnVerMas.innerHTML = 'Ocultar';
        btnVerMas.className = 'btn btn-danger';
    }else{
        console.log('la clase del boton es la danger');
        // eliminar el nodo nuevo 'parrafo'
        console.log(articulosPadres[1].hasChildNodes());
        console.log(articulosPadres[1].children); //[obj1, obj2...]
        // eliminamos efectivamente el nodo
        if(articulosPadres[1].hasChildNodes()){ //if(true)
          articulosPadres[1].removeChild(articulosPadres[1].children[2]);
        }
        // cambiar el texto y la estetica del boton
        btnVerMas.innerHTML = 'Ver mas ...';
        btnVerMas.className = 'btn btn-primary';
    }
   
   
}