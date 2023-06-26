export function BlogDefault({ Fecha, Titulo, Header, Descripcion, Descripcion2, Imagen }) {
  return (
    <div className='mb-20 mt-10'>
      <h1 className=' text-slate-200 text-4xl font-bold'>{Titulo}</h1>
      <hr className='my-5' />
      <h6 className='text-slate-800 text-xs'>{Fecha}</h6>
      <h2 className='text-slate-700 mb-4 mt-2 text-sm'>{Header}</h2>
      <p className='text-slate-300'>{Descripcion}</p>
      <p className='text-slate-300 mt-5'>{Descripcion2}</p>
      <img src={Imagen} alt='' className='w-auto mt-8 border-white border-4' />
    </div>
  );
}
