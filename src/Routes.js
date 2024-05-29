import { BrowserRouter, Route, Routes } from "react-router-dom"

import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/* 
        
        Na rota "/", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na rota "/sobremim", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>

        */}
        
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
