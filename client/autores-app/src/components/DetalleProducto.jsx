import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

//para llamar a 1 producto por su id
const DetalleAutor = () =>{

    const {id} = useParams();
    const [autor, setAutor] = useState({});

    useEffect(()=>{

        axios.get("http://localhost:8000/api/autor/"+id)
            .then(res=>{
                console.log(res.data);
                setAutor(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    return(
        <div className="card">
            <h1>{autor.nombre}</h1>
         
        </div>
    )

}

export default DetalleAutor;