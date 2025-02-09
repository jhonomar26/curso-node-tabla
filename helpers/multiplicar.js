// Todo lo que se cree aqui va ser privado es decir, solo se va poder ver en este archivo
const fs = require('fs');
var colors = require('colors/safe');

const crearArhivo = (base = 5, l, h) => {

    return new Promise((resolve, reject) => {
        try {
            let salida = '';
            let consola = '';
            for (let i = 1; i <= h; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            }
            if (l) {
                console.log('===================='.green);
                console.log(`Tabla del ${base}`);
                console.log('===================='.green);
                console.log(consola);
            }

            // Si no se especifica el path, el archivo se creará en la raíz del proyecto
            // writeFile recibe 3 argumentos: el nombre del archivo, el contenido y un callback
            // El callback recibe un error como primer argumento
            // Si el archivo ya existe, se sobreescribe
            // writeFile, 
            // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            //     if (err) throw err;
            //     console.log(`tabla-${base}.txt`);
            // });
            // !writeFileSync,
            // No es necesario un callback, ya que es un método síncrono
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    crearArhivo
}