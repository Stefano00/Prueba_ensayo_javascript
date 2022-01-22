const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000);

app.use(cors({
    origin: '*'
}));

const { search, getTiendas, getCategorias, getBrands } = require("./pool");
app.post("/search", async (req, res) => {
    const respuesta = await search(req.body);
    res.send(respuesta);
});
app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname,'../Monitor_Ordenes/index.html'));
});
app.get("/tiendas", async (req, res) => {
    const respuesta = await getTiendas();
    res.send(respuesta);
});
app.get("/categorias", async (req, res) => {
    const respuesta = await getCategorias();
    res.send(respuesta);
});
app.get("/brands", async (req, res) => {
    const respuesta = await getBrands();
    res.send(respuesta);
});


console.log("Ejecutandose en puerto 3000");