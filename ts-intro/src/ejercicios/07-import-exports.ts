import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        descripcion: 'Teléfono 1',
        precio: 100
    },
    {
        descripcion: 'Teléfono 2',
        precio: 150
    }
];

const [ total, isv ] = calculaISV( carritoCompras );

console.log( 'Total: ', total );
console.log( 'ISV: ', isv);



