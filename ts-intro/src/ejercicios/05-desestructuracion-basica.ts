/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Give me something',
    detalles: {
        autor: 'Seafret',
        anio: 2018
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('El canción actual es de: ', cancion);
// console.log('El autor actual es de: ', autor);

const dbz: string[] = [ 'Goku', 'Vegeta', 'Trunks' ];
const [ , , p3 ] = dbz;

// console.log( 'Personaje 1: ', p1 );
// console.log( 'Personaje 2: ', p2 )
console.log( 'Personaje 3: ', p3 )

