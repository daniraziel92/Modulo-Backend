import express from "express";
import axios from "axios";
 
const server = express();
const port = 3001;

async function getPokemons(name,limit,offset){
 let url = "https://pokeapi.co/api/v2/pokemon"
    if(name){
        if(limit && offset){
            url = url+"?limit="+limit+"&offset="+offset;
            console.log(url);
        }else{
            url = url+"/"+name;
            console.log(url);
        }
    }
    const {data, status} = await axios.get(url);
        return {data, status}
    // if(name === undefined)
    // {
    //     if(limit ===undefined && offset===undefined)
    //     {        
    //         const {data, status} = await axios.get(
    //         "https://pokeapi.co/api/v2/pokemon");
    //         return {data, status}
    //     }
    //     else{
    //         const {data, status} = await axios.get(
    //             "https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset);
    //         return {data, status}
    //     }

    // }
    // else
    // {
    //     const {data, status} = await axios.get(
    //     "https://pokeapi.co/api/v2/pokemon/"+name);
    //     return {data, status}
    // }
    
} 
server.use(express.json());

server.get("/pokemon", async (req, res)=>{
    console.log(req.query);
    console.log(req.params);
    if(req.query){
        const {data, status} =  await getPokemons("cualquier cosa",req.query.limit, req.query.offset);
        res.status(status).send(data);
    }
    else{
        const {data, status} =  await getPokemons();
        res.status(status).send(data);
    }
      
    
});

server.get("/pokemon/:name", async (req, res)=>{
    const {name} = req.params;
    const {data, status} =  await getPokemons(name);
    res.status(status).send(data);
});

// server.get("/pokemon*", async (req, res)=>{
//     const {limit, offset} = req.query;
//     const {data, status} =  await getPokemons(undefined,limit,offset);
//     res.status(status).send(data);
// });



server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
