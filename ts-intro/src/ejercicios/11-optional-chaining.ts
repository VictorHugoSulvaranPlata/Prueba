/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Victor Hugo Sulvarán Plata'
}

const pasajero2: Pasajero = {
  nombre: 'Deckar Alain Montiel Quintero',
  hijos: [ 'Lucas' ]
}

function imprimeHijos( pasajero: Pasajero ): void {

  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log( cuantosHijos );
  
}

imprimeHijos( pasajero1 );
  
  