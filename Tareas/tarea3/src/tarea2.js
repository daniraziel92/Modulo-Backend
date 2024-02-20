import fs from "fs";
import { Transform } from "stream";


async function decodeData() {
    //Desarrolla tu solución aquí
    const readableStream = fs.createReadStream("../common/registers.txt",{encoding: "utf-8"});
    const writableStream = fs.createWriteStream("../common/results.txt",{encoding: "base64"});
    readableStream.pipe(writableStream);
    const chunkObject =[];
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            const newChunck = atob(chunk.toString());
            const chunkObject = JSON.stringify(JSON.parse(newChunck));
            callback(null, chunkObject);
        }
    });
    readableStream.pipe(transformData).pipe(writableStream);
    return chunkObject;

}

//module.exports = decodeData;
decodeData();