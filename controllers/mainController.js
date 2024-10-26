const path = require("path");

let productos = []; 

const mainController ={
    Home:(req,res)=>{

        productos = [{
            id:1,
            nombre: "Camisa",
            precio: 12500,
            stock: 50,
        },
        {
            id:2,
            nombre: "Pantalon",
            precio: 17000,
            stock: 30,
        }]
        return res.render("index",{productos});
    },
    crearProducto:async(req,res)=>{
        let id;
        let nombre;
        let precio;
        let stock;
        
        id= req.body.id;
        nombre= req.body.name;
        precio = req.body.price;
        stock = req.body.stockDispo;

    

         let nuevoProducto = {id,nombre,precio,stock}

        productos.push(nuevoProducto);
         
        console.log(productos)
        res.render("index",{productos});
    },
    actualizarProducto:async(req,res)=>{
       let productoModificado = req.params.id;

      
    },
    eliminarProducto:async(req,res)=>{
        const id = req.params.id;

        const index = productos.findIndex(p =>p.id === id);

        if (index !== 1){
            const productoEliminado = productos.splice(index,1);

          res.render("index",{productos:productoEliminado})
        }else{
            res.status(404).send({message:"Producto no encontrado"})
        }

        
    }
}

module.exports = mainController;