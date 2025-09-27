let nombreUsuario = prompt("Hola, por favor ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    console.log("Hola " + nombreUsuario + ", tu saldo actual es: $" + saldo + ". Has gastado: $" + gastosTotales);
    
}
mostrarBalance();

const registrarIngreso = function(montoIngreso) {
    saldo = saldo + montoIngreso;
    console.log(`Ingreso de $ ${montoIngreso} registrado. Nuevo saldo: $${saldo}`);
}

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo = saldo - montoGasto;
        gastosTotales = gastosTotales + montoGasto;
        console.log(`Transacción exitosa por $ ${montoGasto} registrada. Nuevo saldo: $${saldo}`);
    }   else {
        console.log("Fondos insuficientes.");
    }
}

registrarIngreso(500);

registrarGasto(200);
registrarGasto(1300);
mostrarBalance();
