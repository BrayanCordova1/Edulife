import React from "react";

export const NotFound = () => {
  return (
    <div className='flex justify-center items-center w-full h-full my-60 '>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Error 404 (Página no encontrada)</h1>
        <p className='mx-auto w-96 text-center mt-8 text-slate-500'>
          Para resolver este problema, es importante regresar al inicio de la pagina web. Si el problema requiere una
          solución inmediata, te recomendamos que te pongas en contacto con EduLife.
        </p>
      </div>
    </div>
  );
};
