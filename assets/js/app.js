/* Toggle Menu*/
const themeToggle = document.querySelector('#toggle');
const themeToggle2 = document.querySelector('#menu-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

themeToggle2.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});





/* Button  Download CV */
function descargarPDF() {
	// Ruta del archivo PDF en la carpeta del proyecto
	var rutaPDF = "/assets/cv/cv_jlmunozfdev.pdf";
  
	// Crear un enlace de descarga
	var enlaceDescarga = document.createElement("a");
  
	// Asignar el archivo PDF que se descargará
	enlaceDescarga.href = rutaPDF;
	enlaceDescarga.download = "mi_cv.pdf";
  
	// Simular un clic en el enlace de descarga
	enlaceDescarga.click();
  }
  
  // Asignar la función de descarga al botón
  document.getElementById("descargar").addEventListener("click", descargarPDF);


/* Hamburguer */
function hamburguer() {
    document.getElementsByClassName('menu__dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
      setTimeout(function() {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
      }, 500)
    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
    }
  }