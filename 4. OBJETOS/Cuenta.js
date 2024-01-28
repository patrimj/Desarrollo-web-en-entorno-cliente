class Cuenta {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingresar(dinero) {
        if (dinero > 0) {
            this.saldo += dinero;
            return this.saldo;
        } else {
            console.log("El monto a ingresar debe ser mayor que cero.");
            return this.saldo;
        }
    }

    retirar(dinero) {
        if (dinero > 0 && dinero <= this.saldo) {
            this.saldo -= dinero;
            return this.saldo;
        } else {
            console.log("Monto inválido o insuficiente para retirar.");
            return this.saldo;
        }
    }

    obtenerSaldo() {
        return this.saldo;
    }
}

// Ejemplo de uso de la clase Cuenta
const cuentaFran = new Cuenta('Fran', 500);

console.log(`Saldo actual de la cuenta de ${cuentaFran.nombre}: ${cuentaFran.obtenerSaldo()}`);

cuentaFran.ingresar(200);
console.log(`Saldo después de ingresar 200: ${cuentaFran.obtenerSaldo()}`);

cuentaFran.retirar(100);
console.log(`Saldo después de retirar 100: ${cuentaFran.obtenerSaldo()}`);
