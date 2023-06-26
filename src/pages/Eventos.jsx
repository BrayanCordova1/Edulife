import React from "react";
import { NavLink } from "react-router-dom";

export const Eventos = () => {
  return (
    <div className='mx-32'>
      <h1 className='text-4xl font-bold text-slate-800'>WebDev ShowCase 2023</h1>
      <p className='py-2 text-xl text-slate-400'>
        ¡Bienvenidos al evento "WebDev Showcase 2023"! Este emocionante evento se llevará a cabo el 30 de junio de 2023
        a las 10:00 AM.
      </p>
      <p className='py-4'>
        Nos encontramos en un amplio salón, lleno de energía y emoción, donde los entusiastas del desarrollo web se
        reúnen para celebrar la creatividad y la innovación. Como anfitriona del evento, tenemos a la imaginaria Maestra
        de Desarrollo Web, la Profesora Aurora. Con su vasto conocimiento y experiencia, la Profesora Aurora es una
        inspiración para todos los asistentes. Su pasión por el desarrollo web y su habilidad para transmitir
        conocimientos complejos de manera clara y concisa hacen que sea una maestra ejemplar.
      </p>
      <p className='py-4'>
        El evento está diseñado para ofrecer una plataforma a los desarrolladores web de todos los niveles para mostrar
        sus proyectos más destacados. Desde los principiantes hasta los profesionales experimentados, todos tienen la
        oportunidad de exhibir su trabajo y recibir retroalimentación valiosa de sus colegas y expertos en la industria.
        El salón está adornado con pantallas gigantes donde se mostrarán las demostraciones en vivo de los proyectos.
        Cada expositor tendrá su propio espacio para presentar su trabajo, con computadoras y dispositivos móviles
        listos para mostrar sus sitios web, aplicaciones y otras creaciones. La diversidad de proyectos presentados en
        el evento garantiza que los asistentes se sumerjan en una experiencia inmersiva y fascinante.
      </p>
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <p className='py-4'>
            La Profesora Aurora dará inicio al evento con un inspirador discurso de apertura, compartiendo su visión del
            futuro del desarrollo web y la importancia de la colaboración y el aprendizaje continuo. A lo largo del día,
            se llevarán a cabo diferentes charlas y talleres sobre temas actuales en el campo del desarrollo web,
            impartidos por expertos de renombre en la industria. Además, habrá espacios de networking y oportunidades
            para establecer contactos con otros desarrolladores web, empresas y reclutadores. Los asistentes tendrán la
            oportunidad de conversar con los expositores y descubrir las últimas tendencias y avances en el mundo del
            desarrollo web. No podemos olvidar mencionar que habrá una competencia de proyectos, donde un panel de
            jueces expertos evaluará las presentaciones y seleccionará a los ganadores en diferentes categorías. Los
            premios incluyen reconocimiento, oportunidades de mentoría y, por supuesto, un trofeo para llevar a casa. El
            evento "WebDev Showcase 2023" promete ser una experiencia única, llena de aprendizaje, inspiración y
            colaboración. Tanto si eres un apasionado del desarrollo web como si estás interesado en explorar este
            fascinante campo, este evento es el lugar perfecto para sumergirte en el mundo de la web y descubrir las
            últimas innovaciones y talentos emergentes. ¡No te lo puedes perder!
          </p>
          <NavLink to='/contacto'>
            <button className='py-4 px-6 bg-blue-950 text-white rounded-3xl mx-auto hover:text-black hover:bg-slate-400 duration-500 hover:px-8'>
              Registrarse
            </button>
          </NavLink>
        </div>
        <div>
          <img
            src='/webdev.jpeg'
            className='h-auto mx-auto w-4/5 object-cover my-9  rounded-2xl hover:scale-95 duration-500 border-4 border-white border-solid'
            alt='img'></img>
        </div>
      </div>
    </div>
  );
};
