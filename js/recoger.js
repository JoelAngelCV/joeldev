const nombre = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("phoneNumber")
const web = document.getElementById("websiteUrl")
const mensaje = document.getElementById("message")
const form = document.getElementById("formulario")

form.addEventListener("submit", e=>{
    if(nombre.value.length>1||email.value.length>1||telefono.value.length>1||web.value.length>1||mensaje.value.length>1){
        window.addEventListener("submit", function(e) {
            e.preventDefault(form);
          
          let formulario = new FormData(document.getElementById('formulario'));

    fetch('./registrar.php',{
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data =>{
        if(data == 'true'){
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('websiteUrl').value = '';
            document.getElementById('message').value = '';
            alert('Se enviará el mensaje.');
        } else{
            console.log(data);
        }
    });
    
    });  
    }
    
})