import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Avisolegal } from "./pages/TerminosCondiciones/Avisolegal";
import { Politicasdecookies } from "./pages/TerminosCondiciones/Politicasdecookies";
import { Privacidad } from "./pages/TerminosCondiciones/Privacidad";
import { NotFound } from "./pages/NotFound";
import { Cursospage } from "./pages/Cusos/Cursospage";
import { Curso } from "./pages/Cusos/Curso";
import { Contacto } from "./pages/Contacto";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/avisolegal' element={<Avisolegal />} />
        <Route path='/politicadecookies' element={<Politicasdecookies />} />
        <Route path='/privacidad' element={<Privacidad />} />
        <Route path='/cursos*' element={<Cursospage />} />
        <Route path='/cursos/:cursoid' element={<Curso />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
