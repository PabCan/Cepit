import { Auto, Moto, Camion, RegistroAutomotor } from './vehiculos';


let auto1 = new Auto("VW", "Polo", 2007);
let moto1 = new Moto("Zanella", "600", 2012);
let camion1 = new Camion("Iveco", "350", 2020);


let registro = new RegistroAutomotor();

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log("Vehículos en el registro:");
registro.listarVehiculos();

registro.modificarVehiculo(0, "Peugeot", "208", 2023);
console.log("\nDespués de modificar el vehículo:");
registro.listarVehiculos();

registro.darDeBaja(1);
console.log("\nDespués de dar de baja el vehículo:");
registro.listarVehiculos();
