// Middleware global (todas las rutas)

// - console.log: New request | method: ----- | url: ----- | date: -------
export function logger(req,res,next){
    const date = new Date().toString();
    const methodRequest = req.method;
    const urlRequest = req.url;
    console.log("New request | method: "+methodRequest+" | url: "+urlRequest+"  | date: "+date);
    return next();
}