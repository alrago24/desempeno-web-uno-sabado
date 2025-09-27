let nombreUsuario = prompt("Hola, Bienvenido a nuestro simulador de finanzas personales,por favor ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    console.log("Hola " + nombreUsuario + ", tu saldo actual es: $" + saldo + ". Has gastado: $" + gastosTotales);

}
// mostrarBalance();

const registrarIngreso = function (montoIngreso) {
    saldo = saldo + montoIngreso;
    console.log(`Ingreso de $ ${montoIngreso} registrado. Nuevo saldo: $${saldo}`);
}

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo = saldo - montoGasto;
        gastosTotales = gastosTotales + montoGasto;
        console.log(`Transacción exitosa por $ ${montoGasto} registrada. Nuevo saldo: $${saldo}`);
    } else {
        console.log("Fondos insuficientes.");
    }
}

// registrarIngreso(5000);

// registrarGasto(200);
// registrarGasto(200);
// mostrarBalance();


const simularSemana = () => {
    for (let i = 0; i < 7; i++) {
        registrarGasto(50);
    }
};

function diagnosticoFinanciero() {
    if (saldo > 2000) {
        console.log("Tu salud financiera es excelente");
    } else if (saldo < 2000 && saldo > 1000) {
        console.log("Tu salud financiera puede mejorar");
    } else {
        console.log("Alerta: Fondos bajos.");
    };

    switch (true) {
        case (gastosTotales > 1000):
            console.log("Has gastado mucho");
            break;
        case (gastosTotales > 700 && gastosTotales <= 1000):
            console.log("Tus gastos son moderados");
            break;
        case (gastosTotales < 500):
            console.log("Has sido muy cuidadoso");
            break;
        default:
            console.log("No se han registrado gastos.");
            break;
    }
}

// simularSemana();


// diagnosticoFinanciero();


function iniciarApp() {
    while (true) {
        let opcion = prompt("Menu de gastos:\n1. Registrar un Ingreso\n2. Registrar un Gasto\n3. Simular una Semana de Gastos\n4. Ver Diagnóstico Financiero\n5. Mostrar Balance Actual \n6. Salir");
        switch (opcion) {
        case ("1"):
            let ingreso = parseInt(prompt("Ingresa el monto del ingreso:"));
            registrarIngreso(ingreso);
            break;
        case ("2"):
            let gasto = parseInt(prompt("Ingresa el monto de tu gasto:"));
            registrarGasto(gasto);
        break;
        case ("3"):
            simularSemana();
            break;
        case ("4"):
            diagnosticoFinanciero();
            break;
        case ("5"):
            mostrarBalance();
            break;
        case ("6"):
            console.log("Fue un placer ayudarte. Hasta la proxima.");
            alert("Fue un placer ayudarte. Hasta la proxima.")
            return;
        default:
            alert("opción no valida");
            break;
        }
    }
}

iniciarApp();