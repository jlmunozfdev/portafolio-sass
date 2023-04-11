const themeToggle = document.querySelector('#toggle');

themeToggle.addEventListener('click', () => {
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
