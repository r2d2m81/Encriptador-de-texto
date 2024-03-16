// variables

let inputTxt = document.getElementById('input_txt');
let outputTxt = document.getElementById("output-text");

//funciones

function encriptMessage()
{
    var msjencrypt = inputTxt;  //asignamos el contenido del text area en una variable temporal
    if (msjencrypt && especialCases(msjencrypt)) {  
        var text = msjencrypt.value;
        text = text.replace(/e/g,"enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        var outputTextarea = outputTxt;
        outputTextarea.textContent = text;
    }
}

function decryptText()
{
    var msjUnencrypt = document.getElementById('input_txt');
    if (msjUnencrypt && especialCases(msjUnencrypt)) {
        // Get the text from the textarea using the value property
        var text = msjUnencrypt.value;
        text = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        var outputTextarea = document.getElementById("output-text");
        outputTextarea.textContent = text;
    }
}

function especialCases(txt) {
    // Validación de mayúsculas, acentos, caracteres especiales y texto vacío
    var regex = /^[a-z\s]*$/; // Expresión regular que acepta solo letras minúsculas y espacios
    
    if (!txt.value.trim()) { // 
        alert("El mensaje no puede estar vacío.");
        return false;
    }

    if (!regex.test(txt.value)) {
        alert("El mensaje no debe contener mayúsculas, acentos o caracteres especiales.");
        return false;
    }
    else{
        return true;
    }
}

function copyTextContent() {
    var texto = outputTxt.textContent;

    // Crear un elemento temporal (input) para copiar el texto
    var inputTemp = document.createElement('input');
    inputTemp.value = texto;
    document.body.appendChild(inputTemp);

    // Seleccionar el texto en el elemento temporal
    inputTemp.select();
    inputTemp.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Ejecutar el comando de copia
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(inputTemp);

    // Mostrar un mensaje o realizar cualquier otra acción después de copiar
    alert('Texto copiado al portapapeles');
}

//llamado de funciones
document.getElementById('bttnEncript').addEventListener("click", encriptMessage);
document.getElementById('bttnUnencript').addEventListener("click", decryptText);

document.getElementById('bttnEncript').addEventListener('click', function() {
    document.getElementById('mensajeVacio').classList.add('hide');
    document.getElementById('result-Output').style.display = 'block';
});

document.getElementById('bttnUnencript').addEventListener('click', function () {
    document.getElementById('mensajeVacio').classList.add('hide');
    document.getElementById('result-Output').style.display = 'block';
});