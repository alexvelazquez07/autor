import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const AutorFormulario = () => {


  const [nombre, setNombre] = useState('')

//Funcion que evita refrescar la pantalla
const submiHandler = (e) => {
  e.preventDefault()
  axios.post('http://localhost:8000/api/crearautor',{
    nombre
  }).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='col-3 mx-auto'>
        <h1>Autor</h1>
        <form onSubmit={submiHandler}>
            <label htmlFor=""className='form-label'>Nombre: </label>
            <input type="text"className='form-control' onChange={(e)=>setNombre(e.target.value)}/>
            <button className='btn btn-success mt-3'> Crear </button>
            
        </form>
        <Link className="btn btn-success mt-3" to="/">Listar Autores</Link>
    </div>
  )
}

export default AutorFormulario