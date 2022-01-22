const axios = require('axios');
const fs = require('fs');

const processData = async (nombre, compra, descuento) => {
  //console.log('llamando a usuarios');
  let {users} = (JSON.parse(fs.readFileSync('users.json', "utf8")));
  //console.log('users ', users);
  const user = users.find(x => x.user === nombre) 
  //console.log(user);
  if(user){
    let descuentoTotal = compra-((compra*descuento)/100);
    console.log(`Cliente: ${nombre}
    Su compra es de ${compra} pesos
    porcentaje de descuento ${descuento}% da un total de: $${descuentoTotal}`);
  }else{
    console.log(`Don: ${nombre}
    Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras`);
  }
  return 
};

const getUsers = () => {
  console.log("Ingrese usuario");
  process.stdin.on('data', function(data){
    let nombre;
    nombre = data.toString().trim();
    getMonto(nombre);
    //process.exit();
  });
}
const getMonto = (nombre) => {
  console.log("Ingrese monto");
  process.stdin.on('data', function(data){
    monto = data.toString().trim();
    getDescuento(nombre, monto);
    //process.exit();
  });
}
const getDescuento = (nombre, monto) => {
  console.log("Ingrese descuento");
  process.stdin.on('data', function(data){
    descuento = data.toString().trim();
    processData(nombre, monto, descuento);
    //process.exit();
  });
}

getUsers();





