window.onload = function() {
    document.getElementById('dni').addEventListener('focusout', validardni);
    document.getElementById('sexo').addEventListener('focusout', formCategoria);
}

function validacionForm() {

    var nombre = document.getElementById('nombre').value;
    var dni = document.getElementById('dni').value;
    var papellido = document.getElementById('papellido').value;
    var sapellido = document.getElementById('sapellido').value;
    var email = document.getElementById('email').value;
    var edad = document.getElementById('edad').value;
    var message = document.getElementById('message').value;

    if (nombre == '' && papellido == '' && sapellido == '' && email == '' && edad == '') {
        document.getElementById("message").innerHTML = "Inténtalo de nuevo.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && papellido == '' && sapellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre, email, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && papellido == '' && edad == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre, email, edad y primer apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && edad == '' && sapellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre, email, edad y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (papellido == '' && edad == '' && sapellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Edad, email, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (papellido == '' && edad == '' && sapellido == '' && nombre == '') {
        document.getElementById("message").innerHTML = "Nombre, edad, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && papellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre, primer apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && papellido == '' && edad == '') {
        document.getElementById("message").innerHTML = "Nombre, primer apellido y edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && papellido == '' && sapellido == '') {
        document.getElementById("message").innerHTML = "Nombre, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && email == '' && sapellido == '') {
        document.getElementById("message").innerHTML = "Nombre, segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && edad == '' && sapellido == '') {
        document.getElementById("message").innerHTML = "Nombre, segundo apellido y edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && edad == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre, edad y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (papellido == '' && edad == '' && email == '') {
        document.getElementById("message").innerHTML = "Primer apellido, edad y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (papellido == '' && sapellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Email, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (papellido == '' && sapellido == '' && edad == '') {
        document.getElementById("message").innerHTML = "Edad, primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (email == '' && sapellido == '' && edad == '') {
        document.getElementById("message").innerHTML = "Edad, segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '' && sapellido == '') {
        document.getElementById("message").innerHTML = "Nombre y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && papellido == '') {
        document.getElementById("message").innerHTML = "Nombre y primer apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && email == '') {
        document.getElementById("message").innerHTML = "Nombre y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (nombre == '' && edad == '') {
        document.getElementById("message").innerHTML = "Nombre y edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (sapellido == '' && papellido == '') {
        document.getElementById("message").innerHTML = "Primer y segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (sapellido == '' && email == '') {
        document.getElementById("message").innerHTML = "Segundo apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (sapellido == '' && edad == '') {
        document.getElementById("message").innerHTML = "Segundo apellido y edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (email == '' && papellido == '') {
        document.getElementById("message").innerHTML = "Primer apellido y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (email == '' && edad == '') {
        document.getElementById("message").innerHTML = "Edad y email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "red";
    } else if (edad == '' && papellido == '') {
        document.getElementById("message").innerHTML = "Primer apellido y edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else if (nombre == '') {
        document.getElementById("message").innerHTML = "Nombre del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (papellido == '') {
        document.getElementById("message").innerHTML = "Primer apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "red";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (sapellido == '') {
        document.getElementById("message").innerHTML = "Segundo apellido del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "black";
    } else if (email == '') {
        document.getElementById("message").innerHTML = "Email del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("edad").style.borderColor = "black";
    } else if (edad == '') {
        document.getElementById("message").innerHTML = "Edad del participante.";
        document.getElementsByTagName("input")[0].style.color = "red";
        document.getElementById("nombre").style.borderColor = "black";
        document.getElementById("papellido").style.borderColor = "black";
        document.getElementById("sapellido").style.borderColor = "black";
        document.getElementById("email").style.borderColor = "black";
        document.getElementById("edad").style.borderColor = "red";
    } else {
        return true;
    }
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.backgroundColor = "#FFB0AE";



    return false;
}

// function validacionFor() {
//     // alert('hola');
//     var inputs = document.getElementsByTagName("input");
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].type == 'text' && inputs[i].value == '') {
//             inputs[i].style.borderColor = 'red';
//         } else {
//             input[i].style.borderColor = 'transparent';
//         }
//         // console.log(inputs[i].type);
//     }
//     return false;
// }

/* validarDNI */
function validardni() {
    // var dni = document.getElementById('dni');
    var dni = document.getElementById('dni');
    if (dni.value.length == 9) {
        //console.log('DNI válido');
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var num = document.getElementById('dni').value.toUpperCase();
        var prin = num.charAt(0);
        var letra = num.charAt(8);

        console.log(prin);
        // alert(letra);
        if (prin == "X") {
            var numero = num.replace("X", "0");
        } else if (prin == "Y") {
            var numero = num.replace("Y", "1");
        } else if (prin == "Z") {
            var numero = num.replace("Z", "2");
        } else {
            var numero = num;
        }

        console.log(numero);
        var numeros = numero.substring(0, numero.length - 1);

        console.log(numeros);

        var letraCalculada = letras[numeros % 23];

        // alert(letraCalculada);

        if (letraCalculada != letra) {
            // alert('mal');
            dni.style.border = "solid red 1px";
        } else {
            // alert('bien');
            dni.style.border = "solid green 1px";
        }

        // dni.style.border = "solid green 5px";

    } else {
        dni.style.border = "solid red 1px";
    }

}

/* Mostrar categoría a partir de la fecha de nacimiento */
function formCategoria() {
    var categoria = document.getElementById('sexo').value;
    var fechaNaci = document.getElementById('edad').value;
    var message = document.getElementById('mensaje').value;
    var fnac = new Date(fechaNaci);
    var actual = new Date();
    var edad = actual.getFullYear() - fnac.getFullYear();
    // alert(categoria);
    if (categoria == "Hombre" && edad >= 0 && edad <= 6) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 0 a 6 años para hombres.";
    }
    if (categoria == "Hombre" && edad >= 7 && edad <= 14) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 7 a 14 años para hombres.";
    }
    if (categoria == "Hombre" && edad >= 15 && edad <= 20) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 15 a 20 años para hombres.";
    }
    if (categoria == "Hombre" && edad >= 21 && edad <= 30) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 21 a 30 años para hombres.";
    }
    if (categoria == "Hombre" && edad >= 31 && edad <= 60) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 31 a 60 años para hombres.";
    }
    if (categoria == "Hombre" && edad >= 61 && edad <= 99) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 61 a 99 años para hombres.";
    }

    if (categoria == "Mujer" && edad >= 0 && edad <= 6) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 0 a 6 años para mujeres.";
    }
    if (categoria == "Mujer" && edad >= 7 && edad <= 14) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 7 a 14 años para mujeres.";
    }
    if (categoria == "Mujer" && edad >= 15 && edad <= 20) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 15 a 20 años para mujeres.";
    }
    if (categoria == "Mujer" && edad >= 21 && edad <= 30) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 21 a 30 años para mujeres.";
    }
    if (categoria == "Mujer" && edad >= 31 && edad <= 60) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 31 a 60 años para mujeres.";
    }
    if (categoria == "Mujer" && edad >= 61 && edad <= 99) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 61 a 99 años para mujeres.";
    }

    if (categoria == "Discapacidad" && edad >= 0 && edad <= 6) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 0 a 6 años para discapacitados.";
    }
    if (categoria == "Discapacidad" && edad >= 7 && edad <= 14) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 7 a 14 años para discapacitados.";
    }
    if (categoria == "Discapacidad" && edad >= 15 && edad <= 20) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 15 a 20 años para discapacitados.";
    }
    if (categoria == "Discapacidad" && edad >= 21 && edad <= 30) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 21 a 30 años para discapacitados.";
    }
    if (categoria == "Discapacidad" && edad >= 31 && edad <= 60) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 31 a 60 años para discapacitados.";
    }
    if (categoria == "Discapacidad" && edad >= 61 && edad <= 99) {
        document.getElementById('mensaje').innerHTML = "Se va a inscribir en la categoria de 61 a 99 años para discapacitados.";
    }
}