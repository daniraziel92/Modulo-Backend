import fs from "fs";
import { Transform } from "stream";

async function writeData(object) {
    //Desarrolla tu solución aquí
    const readableStream = fs.createReadStream("../common/registers.txt",{encoding: "utf-8"});
    const writableStream = fs.createWriteStream("../common/registers1.txt",{encoding: "base64"});
    let chunkObject = [];
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            const newChunck = atob(chunk.toString());
            chunkObject = JSON.parse(newChunck);
            console.log(chunkObject);
            chunkObject[chunkObject.length] = JSON.parse(JSON.stringify(object));
            console.log(chunkObject);
            callback(null, JSON.stringify(chunkObject));
        }

    });
    readableStream.pipe(transformData).pipe(writableStream);
    return JSON.stringify(chunkObject); 

}


const obj = {
            clientName: "Ivan Hernandez",
            clientDocument: "12893478",
            loanDate: "2022-12-15",
            returnDate: null,
            movie: {
                title: "Batman",
                gender: "Action",
                tags: ["Aventura", "Superheroes", "Crimen"]}
            }       

writeData(obj);
//module.exports = writeData;
