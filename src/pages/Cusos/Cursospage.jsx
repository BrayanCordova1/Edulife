import React from "react";
import { CursoCarta } from "../../components/Cards";
import Datacursos from "./Cursos.json";

export const Cursospage = () => {
  return (
    <div className='mx-16'>
      <h1 className='text-2xl mb-10 text-slate-300'>Cursos disponibles:</h1>
      <div className='grid grid-cols-3'>
        {Datacursos.map((curso) => (
          <CursoCarta Titulo={curso.name} Descripcion={curso.description} Imagen={curso.image} id={curso.id} />
        ))}
      </div>
    </div>
  );
};
