/**
 * Este archivo debería de dejarse igual, este solo se usa para la inicialización, se separa
 * así para el correcto funcionamiento de las pruebas
 */
import app from "./app.js";
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
});
