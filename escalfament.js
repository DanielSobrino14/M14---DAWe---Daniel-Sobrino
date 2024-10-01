function comparaNumeros(a, b) {
    if (a > b) {
        mostrarResultado(a);
    } else {
        mostrarResultado(b);
    }
}

function suma1a100() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i; 
    }
    mostrarResultado(suma);
}

function pedraPaperTisores() {
    let resultados = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultados.push("Tisores");
        } else if (i % 3 === 0) {
            resultados.push("Pedra");
        } else if (i % 5 === 0) {
            resultados.push("Paper");
        } else {
            resultados.push(i);
        }
    }
    mostrarResultado(resultados.join('\n'));
}

function esParell(num) {
    if (num % 2 === 0) {
        mostrarResultado(true);
    } else {
        mostrarResultado(false);
    }
}

function revertirCadena(cadena) {
    const resultado = cadena.split('').reverse().join('');
    mostrarResultado(resultado);
}

function factorial(n) {
    if (n < 0) {
        mostrarResultado("No es pot calcular el factorial de un numero negatiu");
    } else if (n === 0 || n === 1) {
        mostrarResultado(1);
    } else {
        mostrarResultado(n * factorial(n - 1));
    }
}

function filtrarPositius(array) {
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayNuevo.push(array[i]);
        }
    }
    mostrarResultado(arrayNuevo.join(', '));
}

function mostrarResultado(texto) {
    const mostrar = document.getElementById('resultadosPre');
    mostrar.textContent = texto;
}