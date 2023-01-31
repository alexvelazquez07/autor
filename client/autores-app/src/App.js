import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ListarAutores from './components/ListarAutores';
import AutorFormulario from './components/AutorFormulario';
import EditarAutor from './components/EditarAutor';
import DetalleAutor from './components/DetalleProducto';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListarAutores/>}/>
            <Route path="/crearautor" element={<AutorFormulario/>}/>
            <Route path="/autor/editar/:id" element={<EditarAutor/>}/>
            <Route path="/autor/:id" element={<DetalleAutor/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
