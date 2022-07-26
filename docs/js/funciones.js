var botonImprimir = document.getElementById("generarPdf");

function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }
function imprimir(){
    window.print();
  }

botonImprimir.addEventListener("click", imprimir);



