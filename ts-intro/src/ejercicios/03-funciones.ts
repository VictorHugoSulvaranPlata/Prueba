/*
    ===== Código de TypeScript =====
*/

function sumar( a: number, b: number ): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number ): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

/* 
const resultado = multiplicar( 5, 0, 10 );
const resultado2 = sumar( 20, 10 );
const resultado3 = sumarFlecha( 20, 20 );

console.log( resultado, resultado2, resultado3); 
*/

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar( personaje: PersonajeLOR, curarX ): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de vida: ', this.pv );
        
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarPv();

