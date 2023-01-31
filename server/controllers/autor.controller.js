const Autor = require ("../models/autor.models")


//Crear
const crearAutor =  (req, res)=>{
    Autor.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
  }

  //Llama atodos los items
const get_all = (req, res) =>{
    Autor.find().sort({nombre:1})
    .then(autores =>res.json(autores))
    .catch(err => res.json({message:"hubo un error"+err}));
  }
  
  //llama a un item en especifico por su id
  const get_autor = (req, res) =>{
    Autor.findOne({_id:req.params.id})
        .then(autor => res.json(autor))
        .catch(err => res.json({message:"Hubo un error"+err}));
  }
  
  //actualizamos el item
  const update_autor = (req, res) => {
    Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(autor => res.json(autor))
        .catch(err => res.json({message: "Hubo un error al actualizar" + err }))
  }
  
  
  //borramos el item
  const delete_autor =(req, res) =>{
    Autor.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json({message:"hubo un error al eliminar"+ err }))
  }


  module.exports = {
    crearAutor,
    get_all,
    get_autor,
    update_autor,
    delete_autor
  }
  