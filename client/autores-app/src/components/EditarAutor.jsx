import React,{useState,useEffect} from "react";
import { useParams  } from "react-router-dom";
import axios from "axios";

const EditarAutor = () =>{
    const {id} = useParams();
    const [nombre, setNombre] = useState("");



    useEffect(()=>{
        axios.get("http://localhost:8000/api/autor/"+id)
            .then(res=>{
                console.log(res.data);
                setNombre(res.data.nombre)
            })
            .catch(err=> console.log(err))
    },[])

//Funcion que evita refrescar la pantalla
const submiHandler = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/api/autor/"+id,{
nombre
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }

    return(
        <div className='col-3 mx-auto'>
            <h1>Editar Autor</h1>
            <form onSubmit={submiHandler}>
                <div className='form-group' >
                    <label htmlFor="title" >Nombre</label>
                    <input id="nombre" name="nombre" type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} className='form-control'/>
                </div>
                    <button type="submit" className="btn btn-success  mt-3" value="Guardar Producto">Guardar Autor</button>
                
                
            </form>
        </div>
    )
}

export default EditarAutor;