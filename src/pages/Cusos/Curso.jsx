/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Cursos from "./CursosGeneral.json";
import CursosData from "./CursosData/CursosData.json";

export const Curso = () => {
  const parametros = useParams();
  const cursoId = parseInt(parametros.cursoid, 10);
  const CursoGeneral = Cursos.find((cursogeneral) => cursogeneral.id === cursoId);
  const CurData = CursosData.find((cursogeneral) => cursogeneral.id === cursoId);

  if (!CursoGeneral) {
    return <h1>Error 404: Curso no encontrado</h1>;
  }

  const modulos = CurData.datasCursoId["Modulos:"];
  const [moduloVisible, setmoduloVisible] = useState(null);
  const [temaSeleccionado, settemaSeleccionado] = useState(null);

  const handleModuloClick = (moduloKey) => {
    if (moduloVisible === moduloKey) {
      setmoduloVisible(null);
    } else {
      setmoduloVisible(moduloKey);
      settemaSeleccionado(null);
    }
  };

  const handleTemaClick = (temaKey) => {
    settemaSeleccionado(temaKey);
  };
  return (
    <div>
      <h1 className='text-3xl font-bold ml-7 mt-8'>Bienvenido al curso: {CursoGeneral.name} </h1>
      <h1 className='text-xl ml-7 my-5 mb-7'>{CursoGeneral.description} </h1>
      <div className='grid grid-cols-4'>
        <div className='px-2 py-1 rounded-xl relative w-72 h-auto ml-5 bg-slate-950 bg-opacity-40 pb-8'>
          {Object.entries(modulos).map(([moduloKey, modulo]) => (
            <div key={moduloKey}>
              <h1
                className='bg-slate-950 text-base text-white p-3 rounded-xl mt-6 duration-700 hover:bg-slate-200 hover:text-black hover:text-lg cursor-pointer'
                onClick={() => handleModuloClick(moduloKey)}>
                {modulo.titulo}
              </h1>
              <div
                className={`${
                  moduloVisible === moduloKey ? "block" : "hidden"
                } transition-all duration-300 ease-in-out`}>
                {Object.entries(modulo)
                  .slice(1)
                  .map(([temaKey, tema]) => (
                    <div
                      key={temaKey}
                      className={`bg-slate-700 text-sm text-white p-3 rounded-xl my-1 duration-700 hover:bg-slate-500 ${
                        temaSeleccionado === temaKey ? "bg-slate-800" : "bg-slate-500 "
                      }`}
                      onClick={() => handleTemaClick(temaKey)}>
                      <h1>{tema.titulo}</h1>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {Object.entries(modulos).map(([moduloKey, modulo]) =>
          Object.entries(modulo).map(([temaKey, tema]) => (
            <div
              className={`bg-slate-900  bg-opacity-20 ml-0 relative mr-4 rounded-2xl px-6 py-4 col-span-3 ${
                temaSeleccionado === temaKey && moduloVisible === moduloKey ? "block" : "hidden"
              }`}
              key={temaKey}>
              <h1 className='text-4xl mb-6'>{tema.titulo}</h1>
              <h4 className='mb-2'>{tema.header}</h4>
              {tema.video && <iframe width='560' height='315' src={tema.video} title='Video del tema'></iframe>}

              {tema.text && <p className='my-6'>{tema.text}</p>}
              <h1>Ejemplos:</h1>
              {tema.sombreado && (
                <p className='mb-2  bg-opacity-70 bg-slate-950 p-2 rounded-lg'>
                  {tema.sombreado.split("\n").map((linea, index) => (
                    <h6 key={index}>
                      {linea}
                      <br />
                    </h6>
                  ))}
                </p>
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
