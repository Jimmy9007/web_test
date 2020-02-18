function imprimirTabla() {

    var estilo = "";
    var matriz0 = new Array();
    matriz0[0] = "identificacion";
    matriz0[1] = "Null";
    matriz0[2] = "testo";
    matriz0[3] = estilo
    matriz0[4] = "";
    var matriz1 = new Array();
    matriz1[0] = "codigo de usuario";
    matriz1[1] = "Null";
    matriz1[2] = "numero";
    matriz1[3] = estilo
    matriz1[4] = "";
    var matriz2 = new Array();
    matriz2[0] = "identificacion";
    matriz2[1] = "Null";
    matriz2[2] = "numero";
    matriz2[3] = estilo
    matriz2[4] = "";

    var matriz = new Array();
    matriz[0] = matriz0;
    matriz[1] = matriz1;
    matriz[2] = matriz2;

    estilo = 'style="background: #AFA"';

   // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var x = 0; x < matriz.length; x++) {
// Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        for (var y = 0; y < matriz[x].length; y++) {
// Crea un elemento <td> y un nodo de texto, haz que el nodo de
// texto sea el contenido de <td>, ubica el elemento <td> al final
// de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(matriz[x][y]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
// agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
// posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    
}

// Evento click del boton
function actualizarTabla() {    
     // Asigna o desasigna la clase black
  document.getElementById("estadoColor").style.backgroundColor = "#AFA";
   document.getElementById("estadoColor").innerHTML = "Activo";
 
}



