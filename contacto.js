document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;


    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);

    document.getElementById('enviado').style.display = 'block';

    setTimeout(function() {
        document.getElementById('enviado').style.display = 'none';
    }, 1500);

    document.getElementById('contactForm').reset();
        });

    


