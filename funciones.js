/* ==========================================
   FUNCIONES MATEMÁTICAS
========================================== */


/* FACTORIAL */

function calcularFactorial() {

    let n = parseInt(
        document.getElementById("numeroFactorial").value
    );

    let resultado =
        document.getElementById("resultadoFactorial");


    if (isNaN(n) || n < 0) {

        resultado.innerHTML =
            "Ingrese un número entero positivo.";

        return;
    }


    let factorial = 1;


    for (let i = 1; i <= n; i++) {

        factorial = factorial * i;

    }


    resultado.innerHTML =
        n + "! = " + factorial;
}


/* FIBONACCI */

function calcularFibonacci() {

    let n = parseInt(
        document.getElementById("numeroFibonacci").value
    );

    let resultado =
        document.getElementById("resultadoFibonacci");


    if (isNaN(n) || n <= 0) {

        resultado.innerHTML =
            "Ingrese un número mayor que 0.";

        return;
    }


    let serie = [];

    let a = 0;
    let b = 1;


    for (let i = 0; i < n; i++) {

        serie.push(a);

        let siguiente = a + b;

        a = b;

        b = siguiente;
    }


    resultado.innerHTML =
        "Fibonacci:<br>" +
        serie.join(", ");
}


/* PRIMOS */

function esPrimo(numero) {

    if (numero < 2) {

        return false;
    }


    for (
        let i = 2;
        i <= Math.sqrt(numero);
        i++
    ) {

        if (numero % i === 0) {

            return false;
        }
    }


    return true;
}


function generarPrimos(n) {

    let primos = [];

    let numero = 2;


    while (primos.length < n) {

        if (esPrimo(numero)) {

            primos.push(numero);
        }

        numero++;
    }


    return primos;
}


function calcularPrimos() {

    let n = parseInt(
        document.getElementById("numeroPrimos").value
    );

    let resultado =
        document.getElementById("resultadoPrimos");


    if (isNaN(n) || n <= 0) {

        resultado.innerHTML =
            "Ingrese una cantidad válida.";

        return;
    }


    let primos = generarPrimos(n);


    resultado.innerHTML =
        "Números primos:<br>" +
        primos.join(", ");
}


/* ECUACIÓN */

function resolverEcuacion() {

    let a = parseFloat(
        document.getElementById("valorA").value
    );

    let b = parseFloat(
        document.getElementById("valorB").value
    );

    let c = parseFloat(
        document.getElementById("valorC").value
    );

    let resultado =
        document.getElementById("resultadoEcuacion");


    if (
        isNaN(a) ||
        isNaN(b) ||
        isNaN(c)
    ) {

        resultado.innerHTML =
            "Complete todos los valores.";

        return;
    }


    if (a === 0) {

        resultado.innerHTML =
            "A no puede ser 0 en una ecuación de segundo grado.";

        return;
    }


    let discriminante =
        b * b - 4 * a * c;


    if (discriminante > 0) {

        let x1 =
            (-b + Math.sqrt(discriminante)) /
            (2 * a);

        let x2 =
            (-b - Math.sqrt(discriminante)) /
            (2 * a);


        resultado.innerHTML =
            "x₁ = " + x1 + "<br>" +
            "x₂ = " + x2;
    }


    else if (discriminante === 0) {

        let x =
            -b / (2 * a);


        resultado.innerHTML =
            "Una solución:<br>" +
            "x = " + x;
    }


    else {

        resultado.innerHTML =
            "La ecuación no tiene soluciones reales.";
    }
}


/* NÚMERO PERFECTO */

function verificarPerfecto() {

    let n = parseInt(
        document.getElementById("numeroPerfecto").value
    );

    let resultado =
        document.getElementById("resultadoPerfecto");


    if (isNaN(n) || n <= 0) {

        resultado.innerHTML =
            "Ingrese un número entero positivo.";

        return;
    }


    let suma = 0;

    let divisores = [];


    for (
        let i = 1;
        i <= n / 2;
        i++
    ) {

        if (n % i === 0) {

            suma += i;

            divisores.push(i);
        }
    }


    if (suma === n) {

        resultado.innerHTML =
            "✅ " + n +
            " es un número perfecto.<br>" +
            "Divisores: " +
            divisores.join(", ");

    } else {

        resultado.innerHTML =
            "❌ " + n +
            " no es un número perfecto.<br>" +
            "Suma de divisores: " +
            suma;
    }
}


/* ==========================================
   FUNCIONES DE CADENAS
========================================== */


/* PALÍNDROMO */

function verificarPalindromo() {

    let texto =
        document.getElementById("textoPalindromo").value;

    let resultado =
        document.getElementById("resultadoPalindromo");


    if (texto.trim() === "") {

        resultado.innerHTML =
            "Ingrese una palabra o frase.";

        return;
    }


    let limpio =
        texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");


    let invertido =
        limpio.split("").reverse().join("");


    if (limpio === invertido) {

        resultado.innerHTML =
            "✅ Es un palíndromo.";

    } else {

        resultado.innerHTML =
            "❌ No es un palíndromo.";
    }
}


/* INICIALES */

function obtenerIniciales() {

    let nombre =
        document.getElementById("nombreCompleto").value.trim();

    let resultado =
        document.getElementById("resultadoIniciales");


    if (nombre === "") {

        resultado.innerHTML =
            "Ingrese nombres y apellidos.";

        return;
    }


    let palabras =
        nombre.split(/\s+/);


    let iniciales = "";


    for (let palabra of palabras) {

        iniciales +=
            palabra.charAt(0).toUpperCase();
    }


    resultado.innerHTML =
        "Resultado: " + iniciales;
}


/* BUSCAR Y REEMPLAZAR */

function buscarReemplazar() {

    let texto =
        document.getElementById("textoBuscar").value;

    let buscar =
        document.getElementById("palabraBuscar").value;

    let reemplazar =
        document.getElementById("palabraReemplazar").value;

    let resultado =
        document.getElementById("resultadoReemplazar");


    if (texto === "") {

        resultado.innerHTML =
            "Ingrese un texto.";

        return;
    }


    if (buscar === "") {

        resultado.innerHTML =
            "Ingrese la palabra que desea buscar.";

        return;
    }


    let nuevoTexto =
        texto.split(buscar).join(reemplazar);


    resultado.innerHTML =
        "Resultado: " + nuevoTexto;
}


/* ==========================================
   FECHA Y HORA
========================================== */


/* FECHA */

function mostrarFecha() {

    let fecha = new Date();


    let dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];


    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];


    let texto =
        "La Paz, " +
        dias[fecha.getDay()] +
        " " +
        fecha.getDate() +
        " de " +
        meses[fecha.getMonth()] +
        " de " +
        fecha.getFullYear();


    document.getElementById(
        "resultadoFecha"
    ).innerHTML = texto;
}


/* RELOJ */

function actualizarReloj() {

    let ahora = new Date();


    let horas =
        String(ahora.getHours()).padStart(2, "0");

    let minutos =
        String(ahora.getMinutes()).padStart(2, "0");

    let segundos =
        String(ahora.getSeconds()).padStart(2, "0");


    let reloj =
        document.getElementById("relojDigital");


    if (reloj) {

        reloj.innerHTML =
            horas + ":" +
            minutos + ":" +
            segundos;
    }
}


setInterval(actualizarReloj, 1000);

actualizarReloj();


/* MEDIR TIEMPO */

function medirTiempoPrimos() {

    let n = parseInt(
        document.getElementById("numeroTiempo").value
    );

    let resultado =
        document.getElementById("resultadoTiempo");


    if (isNaN(n) || n <= 0) {

        resultado.innerHTML =
            "Ingrese una cantidad válida.";

        return;
    }


    let inicio =
        performance.now();


    generarPrimos(n);


    let fin =
        performance.now();


    let tiempo =
        fin - inicio;


    resultado.innerHTML =
        "Tiempo de ejecución: " +
        tiempo.toFixed(4) +
        " milisegundos.";
}


/* ==========================================
   ARRAYS
========================================== */


/* AGREGAR DATOS */

let miArray = [];


function agregarArray() {

    let dato =
        document.getElementById("datoArray").value.trim();

    let resultado =
        document.getElementById("resultadoArray");


    if (dato === "") {

        alert("Ingrese un dato.");

        return;
    }


    miArray.push(dato);


    resultado.innerHTML =
        "Vector: [ " +
        miArray
        .map(dato => '"' + dato + '"')
        .join(", ") +
        " ]";


    document.getElementById(
        "datoArray"
    ).value = "";
}


/* GIRAR VECTOR */

let vectorGirar = [
    "Manzana",
    "Pera",
    "Banana",
    "Fresa"
];


function mostrarVector() {

    document.getElementById(
        "vectorGirar"
    ).innerHTML =
        "[ " +
        vectorGirar
        .map(x => '"' + x + '"')
        .join(", ") +
        " ]";
}


function girarDerecha() {

    let ultimo =
        vectorGirar.pop();


    vectorGirar.unshift(ultimo);


    mostrarVector();
}


function girarIzquierda() {

    let primero =
        vectorGirar.shift();


    vectorGirar.push(primero);


    mostrarVector();
}


/* TRANSFORMAR */

function transformarArray() {

    let vector = [
        "Manzana",
        "Pera",
        "Banana",
        "Fresa"
    ];


    let nuevoVector =
        vector.map(function(elemento, indice) {

            if (indice % 2 === 0) {

                return elemento.toUpperCase();

            } else {

                return elemento.toLowerCase();
            }

        });


    document.getElementById(
        "resultadoTransformar"
    ).innerHTML =
        "Resultado: [ " +
        nuevoVector
        .map(x => '"' + x + '"')
        .join(", ") +
        " ]";
}