document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("header-navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0 && window.innerWidth <= 768) {
            navbar.style.background = "var(--gradDos)";
        } else {
            navbar.style.background = "transparent";
        }
    });
});

//barras

function progress() {
    var progressBar = document.getElementById("bar-html");
    const ariaValueNow = progressBar.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar.style.width = progress + "%";
        }
    }); // Cambia este valor para ajustar la velocidad de llenado
};

function progressc() {
    var progressBar1 = document.getElementById("bar-css");
    const ariaValueNow1 = progressBar1.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow1) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar1.style.width = progress + "%";
        }
    });
};

function progressj() {
    var progressBar2 = document.getElementById("bar-js");
    const ariaValueNow2 = progressBar2.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow2) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar2.style.width = progress + "%";
        }
    });
};

function progresss() {
    var progressBar3 = document.getElementById("bar-sql");
    const ariaValueNow3 = progressBar3.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow3) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar3.style.width = progress + "%";
        }
    });
};

function progressw() {
    var progressBar4 = document.getElementById("bar-wp");
    const ariaValueNow4 = progressBar4.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow4) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar4.style.width = progress + "%";
        }
    });
};

function progressp() {
    var progressBar5 = document.getElementById("bar-php");
    const ariaValueNow5 = progressBar5.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow5) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar5.style.width = progress + "%";
        }
    });
};

function progressa() {
    var progressBar6 = document.getElementById("bar-ang");
    const ariaValueNow6 = progressBar6.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow6) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar6.style.width = progress + "%";
        }
    });
};

function progressr() {
    var progressBar7 = document.getElementById("bar-rea");
    const ariaValueNow7 = progressBar7.getAttribute("aria-valuenow");
    let progress = 0;
    var interval = setInterval(function() {
        if (progress >= ariaValueNow7) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar7.style.width = progress + "%";
        }
    });
};





  const images = document.querySelectorAll('.img-exp');

  images.forEach(image => {
    image.addEventListener('click', () => {
      images.forEach(otherImage => {
        if (otherImage !== image) {
          otherImage.classList.remove('expanded');
        }
      });
      image.classList.toggle('expanded');
    });
  });
  
  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('img-exp')) {
      images.forEach(image => {
        image.classList.remove('expanded');
      });
    }
  });


