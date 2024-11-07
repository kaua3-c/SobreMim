import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrado";
import ScrollToTop from "componentes/ScrollToTop";

 
function App() {
return(
  <BrowserRouter>
    <ScrollToTop/>
    <Menu />
    <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route path='/' element={<Inicio/>}/>
        <Route path='sobremim' element={<SobreMim/>}/>
        
      </Route>
        <Route path='posts/:id' element={<Post/>}/>
        <Route path='*' element={<NaoEncontrado/>}/>
    </Routes>

    <Rodape/>
  </BrowserRouter>
)
}

export default App;
