import fs from "fs";
import { title } from "process";
import { Transform } from "stream";

function formatRegisters() {
    //Desarrolla tu solución aquí
    const readableStream = fs.createReadStream("../common/registros.txt",{encoding: "utf-8"});
    const writableStream = fs.createWriteStream("../common/registers.txt",{encoding: "utf-8"});
    let dataArray = [];
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            const newChunck = chunk.toString();
            const chunkObject = JSON.parse(newChunck);
            let dataFix = {};
             dataArray = chunkObject.map((value) => {
                dataFix.clientName = value.NombreDelKliente;
                dataFix.clientDocument = value.DocumentoKlient_e;
                dataFix.loanDate = value.FechaRentada;
                dataFix.returnDate = value.FechaEntregada;
                dataFix.movie ={
                    title : value.Pelicula.Nombre,
                    gender: value.Pelicula.Genero,
                    tags: value.Pelicula.Tags
                } 
                console.log(dataFix);
                return JSON.parse(JSON.stringify(dataFix));
            });
            console.log(dataArray);
            console.log(dataArray[1].movie.tags[1]);
            callback(null, btoa(JSON.stringify(dataArray)));

        },
    });
    readableStream.pipe(transformData).pipe(writableStream);
    return dataArray;
}

//module.exports = formatRegisters;

formatRegisters();