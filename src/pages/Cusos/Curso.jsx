/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Datacursos from "./Cursos.json";

export const Curso = () => {
  const params = useParams();
  const cursoId = parseInt(params.cursoid, 10);
  const curso = Datacursos.find((curso) => curso.id === cursoId);

  if (!curso) {
    return <h1>Error 404: Curso no encontrado</h1>;
  }

  const modulos = curso.datasCursoId["Modulos:"];
  const [visibleModule, setVisibleModule] = useState(null);
  const [selectedTema, setSelectedTema] = useState(null);

  const handleModuleClick = (moduleKey) => {
    if (visibleModule === moduleKey) {
      setVisibleModule(null);
    } else {
      setVisibleModule(moduleKey);
      setSelectedTema(null);
    }
  };

  const handleTemaClick = (temaKey) => {
    setSelectedTema(temaKey);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold ml-7 mt-8'>Bienvenido al curso: {curso.name} </h1>
      <h1 className='text-xl ml-7 my-5 mb-7'>{curso.description} </h1>
      <div className='grid grid-cols-4'>
        <div className='px-2 py-1 rounded-xl relative w-72 h-auto ml-5 bg-slate-950 bg-opacity-40 pb-8'>
          {Object.entries(modulos).map(([moduloKey, modulo]) => (
            <div key={moduloKey}>
              <h1
                className='bg-slate-950 text-base text-white p-3 rounded-xl mt-6 duration-700 hover:bg-slate-200 hover:text-black hover:text-lg cursor-pointer'
                onClick={() => handleModuleClick(moduloKey)}>
                {modulo.titulo}
              </h1>
              <div
                className={`${
                  visibleModule === moduloKey ? "block" : "hidden"
                } transition-all duration-300 ease-in-out`}>
                {Object.entries(modulo)
                  .slice(1)
                  .map(([temaKey, tema]) => (
                    <div
                      key={temaKey}
                      className={`bg-slate-700 text-sm text-white p-3 rounded-xl my-1 duration-700 hover:bg-slate-500 ${
                        selectedTema === temaKey ? "bg-slate-500" : ""
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
          Object.entries(modulo)
            .slice(1)
            .map(([temaKey, tema]) => (
              <div
                className={`bg-slate-900  bg-opacity-20 ml-0 relative mr-4 rounded-2xl px-6 py-4 col-span-3 ${
                  selectedTema === temaKey && visibleModule === moduloKey ? "block" : "hidden"
                }`}
                key={temaKey}>
                <h1 className='text-4xl mb-6'>{tema.titulo}</h1>
                <h4 className='mb-2'>{tema.header}</h4>
                {tema.video && <iframe width='560' height='315' src={tema.video} title='Video del tema'></iframe>}
                {[...Array(15).keys()].map((index) => {
                  const textKey = `text${index + 1}`;
                  const sombreadoKey = `sombreado${index + 1}`;
                  const textLines = tema[textKey] ? tema[textKey].split("\n") : [];
                  const sombreadoLines = tema[sombreadoKey] ? tema[sombreadoKey].split("\n") : [];

                  return (
                    <React.Fragment key={index}>
                      {textLines.length > 0 && (
                        <div className='mt-4'>
                          {textLines.map((line, lineIndex) => (
                            <p key={lineIndex}>{line}</p>
                          ))}
                        </div>
                      )}

                      {sombreadoLines.length > 0 && (
                        <div className='bg-slate-900 bg-opacity-50 p-4 m-2 text-blue-400'>
                          {sombreadoLines.map((line, lineIndex) => (
                            <p key={lineIndex}>{line}</p>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )),
        )}
      </div>
    </div>
  );
};
