let nombreUsuario = prompt("Hola, por favor ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    console.log("Hola " + nombreUsuario + ", tu saldo actual es: $" + saldo + ". Has gastado: $" + gastosTotales);
    
}

mostrarBalance();