// Crea un elemento contenedor en el HTML donde quieres mostrar la salida, por ejemplo <div id="output"></div>
let sumImp = 0;// Inicializa la suma de números impares
let sumPar = 0;// Inicializa la suma de números pares
let output = "";// Inicializa la variable de salida

for(let i = 1; i<= 100; i++){// Recorre los números del 1 al 100
	if( i % 2 == 0){// Comprueba si el número es par
		output += `${i} `;// Añade el número par a la salida
		sumPar ++;// Incrementa la suma de números pares
	}else{// Si el número es impar
		output += `<span class='text-danger'>${i}</span>`;// Añade el número impar a la salida
		sumImp ++;// Incrementa la suma de números impares
	}
}
output += `<h3>La suma de todos los números Pares es: ${sumPar} </h3>`;// Añade la suma de números pares a la salida
output += `<h3>La suma de todos los números Impares es: ${sumImp} </h3>`;// Añade la suma de números impares a la salida

document.getElementById("output").innerHTML = output;// Muestra la salida en el elemento contenedor del HTML