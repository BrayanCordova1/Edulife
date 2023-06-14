import React from "react";
import { motion } from "framer-motion";
import { Features } from "../components/Cards";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const scaleUp = {
    hidden: { scale: 0.4 },
    visible: { scale: 1, transition: { duration: 2 } },
  };

  const slideIn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 100, transition: { duration: 2 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='mx-20'>
      <div className='text-center mx-32 mb-10 mt-8'>
        <motion.h1 className='text-6xl mb-10 text-white' initial='hidden' animate='visible' variants={fadeIn}>
          Aprende con <span className='text-color4'>EduLife</span>: Descubre una Experiencia Educativa en Línea
        </motion.h1>
        <motion.h2 className='text-2xl text-gray-500 mx-28' initial='hidden' animate='visible' variants={fadeUp}>
          EduLife es una plataforma de aprendizaje revolucionaria que hace que el aprendizaje sea más fácil, rápido y
          divertido que nunca. Con nuestro completo conjunto de funciones, puede aprovechar al máximo su experiencia de
          aprendizaje.
        </motion.h2>
        <motion.button
          className='text-white mt-20 py-4 px-7 mb-28 bg-color3 rounded-3xl border-4 border-transparent hover:border-color3 hover:scale-105 hover:bg-white hover:text-color3 transition-all duration-300 animate-border-pulse'
          whileHover={{ scale: 1.05 }}
          initial='hidden'
          animate='visible'
          variants={scaleUp}>
          <NavLink to='/cursos' reloadDocument={true}>
            Ver los cursos
          </NavLink>
        </motion.button>
      </div>

      <div>
        <motion.h1 className='text-5xl mt-20 text-gray-200' initial='hidden' animate='visible' variants={fadeIn}>
          Características Avanzadas para una Experiencia de Aprendizaje enriquecedora
        </motion.h1>
        <motion.h2 className='text-2xl mt-10 text-gray-500' initial='hidden' animate='visible' variants={fadeIn}>
          Nuestra plataforma de aprendizaje ofrece una amplia gama de características avanzadas diseñadas para brindarte
          una experiencia de aprendizaje enriquecedora y efectiva. Estas características te permiten aprovechar al
          máximo tu tiempo de estudio y maximizar tu potencial de aprendizaje. A continuación, se presentan algunas de
          las características destacadas de nuestra plataforma:
        </motion.h2>
      </div>

      <div className='grid grid-cols-2 gap-8 mt-10' ref={ref}>
        <motion.div initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={slideIn}>
          <Features
            titulo='Desbloquea tu potencial'
            descripcion='Nuestro sistema de comentarios y apoyo le brinda la orientación y los recursos que necesita para alcanzar su máximo potencial. Con recursos adicionales como pruebas de práctica y tutoriales, puede estar seguro de que está sacando el máximo partido de cada lección.'
            icono='barline'
          />
        </motion.div>
        <motion.div
          key='feature2'
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={slideIn}>
          <Features
            titulo='Aprendizaje interactivo y participativo'
            descripcion='EduLife proporciona un entorno interactivo donde la participación es clave. Puede personalizar su experiencia mediante el seguimiento del progreso, la creación de planes de estudio personalizados y la participación en foros de discusión con otros estudiantes.'
            icono='corazon'
          />
        </motion.div>
        <motion.div
          key='feature3'
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={slideIn}>
          <Features
            titulo='Contenido de calidad en el que puede confiar'
            descripcion='Brindamos contenido de calidad que es relevante para los estándares educativos actuales. Nuestro diseño intuitivo garantiza que sea fácil de usar y atractivo a la vista, ¡para que te mantengas interesado mientras aprendes!'
            icono='documento'
          />
        </motion.div>
        <motion.div
          key='feature4'
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={slideIn}>
          <Features
            titulo='Comunidad de aprendizaje'
            descripcion='Únete a una comunidad activa de estudiantes y profesores que comparten tus intereses y metas educativas. Participa en debates, foros de discusión y sesiones de colaboración en grupo para mejorar tu comprensión y aprender de otros estudiantes.'
            icono='chatcorazon'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
