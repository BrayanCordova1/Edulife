import React from "react";

export const TermHeader = ({ Titulo, Descripcion }) => {
  return (
    <article>
      <h1 className='text-5xl text-center mt-10'>{Titulo}</h1>
      <h2 className='mt-10 text-slate-400'>{Descripcion}</h2>
    </article>
  );
};

export const TermParrafo = ({ Titulo, Descripcion, Descripcion2, NumeroDeSubParrafos, SubParrafos }) => {
  return (
    <article>
      <h1 className='text-2xl mt-16'>{Titulo}</h1>
      <h2 className='mt-4 text-slate-400'>{Descripcion}</h2>
      {SubParrafos &&
        SubParrafos.map((subparrafo, index) => (
          <div key={index} className='ml-10'>
            <h3 className='mt-6 text-lg font-bold text-slate-300'>{subparrafo.Titulo}</h3>
            <p className='mt-2 text-slate-500'>{subparrafo.Descripcion}</p>
          </div>
        ))}
      {Descripcion2 && Descripcion2.length > 0 ? <h2 className='mt-4 text-slate-400'>{Descripcion}</h2> : null}
    </article>
  );
};
