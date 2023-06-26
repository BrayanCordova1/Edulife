import React from "react";
import { NavLink } from "react-router-dom";

import {
  BsFillLightningChargeFill,
  BsFillGrid1X2Fill,
  BsChatDotsFill,
  BsFillChatSquareHeartFill,
  BsFillFileEarmarkTextFill,
  BsFillBookmarkCheckFill,
  BsFillBookFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

export function Features({ titulo, descripcion, icono }) {
  let iconComponent;

  switch (icono) {
    case "lineas":
      iconComponent = <BsFillBookmarkCheckFill />;
      break;
    case "rapidez":
      iconComponent = <BsFillLightningChargeFill />;
      break;
    case "diseño":
      iconComponent = <BsFillGrid1X2Fill />;
      break;
    case "chat":
      iconComponent = <BsChatDotsFill />;
      break;
    case "book":
      iconComponent = <BsFillBookFill />;
      break;
    case "chatcorazon":
      iconComponent = <BsFillChatSquareHeartFill />;
      break;
    case "documento":
      iconComponent = <BsFillFileEarmarkTextFill />;
      break;
    default:
      iconComponent = null;
      break;
  }
  return (
    <div className='group text-slate-400 duration-500 hover:text-slate-50'>
      <h1 className='text-xl mt-14'>
        <span className='inline-block align-middle mr-2'>{iconComponent}</span>
        {titulo}
      </h1>
      <h3 className='text-lg text-slate-500 my-5 duration-700 group-hover:text-slate-400'>{descripcion}</h3>
    </div>
  );
}

export const CursoCarta = ({ Titulo, Descripcion, Imagen, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
      className='bg-slate-950 shadow-lg rounded-lg overflow-hidden mx-auto w-80 mt-6'>
      <NavLink to={`${id}`} reloadDocument={true}>
        <div className='relative '>
          <img src={Imagen} alt={Titulo} className='w-full h-auto object-cover' />
          <div className='mx-4 my-3'>
            <h2 className='text-xl font-semibold mb-2 text-slate-200'>{Titulo}</h2>
            <p className='text-gray-500 mb-2'>{Descripcion}</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};
