
export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }
}

export class Auto extends Vehiculo {}

export class Moto extends Vehiculo {}

export class Camion extends Vehiculo {}

export class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public modificarVehiculo(index: number, nuevaMarca: string, nuevoModelo: string, nuevoAño: number): void {
        let vehiculo = this.vehiculos[index];
        vehiculo.setMarca(nuevaMarca);
        vehiculo.setModelo(nuevoModelo);
        vehiculo.setAño(nuevoAño);
        
    }

    public darDeBaja(index: number): void {
        this.vehiculos.splice(index, 1);
        
    }

    public listarVehiculos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`${index + 1}. ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
        });
    }
}
