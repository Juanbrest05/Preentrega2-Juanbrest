import "boxicons";
import "./App.css";
import {BrowserRouter, Routes, Route,Switch } from "react-router-dom"
import NavBar from './componentes/NavBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/Itemlistconteiner';
import Inicio from "./componentes/Inicio/Inicio";
import Producto from "./componentes/Producto/Producto";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavBar/>
         <Routes>
               <Route path="/" element={<Inicio/>}/>
               <Route path="Productos" element={<ItemListConteiner/>}/>
               <Route path="/producto/:productoId" element={ <Producto/>}/>
         </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
