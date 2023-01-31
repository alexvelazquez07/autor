import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// funcion para mostrar todos los items
const ListarAutores = () =>{

    const [autores,setAutores] = useState([]);
    
    useEffect(()=>{

        axios.get("http://localhost:8000/api/listarautores")
            .then(res=>{
                setAutores(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    const borrar = idAut =>{
        axios.delete("http://localhost:8000/api/autor/"+idAut)
            .then(res =>{
                //actualizar lista FIlTER
                let nuevaLista = autores.filter(autor => autor._id !== idAut);
                setAutores(nuevaLista);
            })
    }

    return(
        <div>
            <h1>Todos los autores</h1>
            <Link className="btn btn-success" to="/crearautor">Nuevo Autor</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope>Nombre</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        autores.map((autor,index)=>(
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/autor/${autor._id}`}>Detalle</Link>
                                    <Link className="btn btn-warning" to={`/autor/editar/${autor._id}`}>Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>borrar(autor._id)}>Eliminar</button>
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListarAutores;