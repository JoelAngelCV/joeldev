  // Observar la sección
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Porcentaje de visibilidad requerido para activar la función
  };
  
  const miSeccion = document.querySelector("#miSeccion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progress();
        progressc();
        progressj();
        progresss();
        progressw();
        progressp();
        progressa();
        progressr();
         // Ejecutar la función cuando la sección es visible
        //observer.disconnect(); // Detener la observación después de ejecutar la función
      }
    });
  }, options);
  
  observer.observe(miSeccion);
