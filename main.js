const libros = [
    { nombre: "Crepúsculo", precio: 130.0 },
    { nombre: "Luna nueva", precio: 250.0 },
    { nombre: "Eclipse ",  precio: 300.0 },
    { nombre: "Amanecer 1",  precio: 350.0 },
    { nombre: "Amanecer 2",  precio: 500.0},
  ];
  
  let listaNombres = libros.map((libros) => libros.nombre);
  let listaPrecios = libros.map((libros) => libros.precio);
  let menuPrincipal;
  let seleccion;
  let ventaFinal = 0;
  
  while (menuPrincipal != "s" && menuPrincipal != "n") {
    menuPrincipal = prompt("Bienvenido a  >>Desafio de Elvia<<" + " ¿Desea realizar una compra? (S/N):");
    menuPrincipal = menuPrincipal.toLowerCase();
  
    if (menuPrincipal === "s") {
      while (seleccion != "6") {
        seleccion = prompt(
          "                    >>Desafio Elvia <<\nEstos son los títulos que tenemos disponibles.\n>> Que deseas comprar:\n\n" +
            "1. " +
            JSON.stringify(listaNombres[0]) +
            "\n     Volumen: " +
           
            JSON.stringify(listaPrecios[0]) +
            "\n2. " +
            JSON.stringify(listaNombres[1]) +
         
            JSON.stringify(listaPrecios[1]) +
            "\n3. " +
            JSON.stringify(listaNombres[2]) +
            "\n     Volumen: " +
           
            JSON.stringify(listaPrecios[2]) +
            "\n4. " +
            JSON.stringify(listaNombres[3]) +
            "\n     Volumen: " +
         
            JSON.stringify(listaPrecios[3]) +
            "\n5. " +
            JSON.stringify(listaNombres[4]) +
            "\n     Volumen: " +
           
            JSON.stringify(listaPrecios[4]) +
            "\n\n6. Finalizar compra"
        );
        switch (seleccion) {
          case "1":
            ventaFinal += listaPrecios[0];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
          case "2":
            ventaFinal += listaPrecios[1];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
          case "3":
            ventaFinal += listaPrecios[2];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
          case "4":
            ventaFinal += listaPrecios[3];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
          case "5":
            ventaFinal += listaPrecios[4];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
          case "6":
            alert(`El total de su compra es: $${ventaFinal} , vuelva pronto`);
            break;
  
          default:
            alert("Opción inválida, elija nuevamente.");
        }
      }
    } else if (menuPrincipal === "n") {
      alert("Gracias por visitar >>Desafio Elvia<<");
    } else {
      alert("Opción inválida, elija nuevamente.");
    }
    function ticket(){
        console.log(
            "Gracias por tu compra... lista de articulos comprados + carrito.join + total pagado : $${ ventaFinal} MXN"
        )
    }
  }
    
