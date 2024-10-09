"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = exports.Camion = exports.Moto = exports.Auto = exports.Vehiculo = void 0;
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAño() {
        return this.año;
    }
    setAño(año) {
        this.año = año;
    }
}
exports.Vehiculo = Vehiculo;
class Auto extends Vehiculo {
}
exports.Auto = Auto;
class Moto extends Vehiculo {
}
exports.Moto = Moto;
class Camion extends Vehiculo {
}
exports.Camion = Camion;
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    modificarVehiculo(index, nuevaMarca, nuevoModelo, nuevoAño) {
        let vehiculo = this.vehiculos[index];
        vehiculo.setMarca(nuevaMarca);
        vehiculo.setModelo(nuevoModelo);
        vehiculo.setAño(nuevoAño);
    }
    darDeBaja(index) {
        this.vehiculos.splice(index, 1);
    }
    listarVehiculos() {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`${index + 1}. ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
        });
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
