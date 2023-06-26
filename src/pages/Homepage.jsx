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
  });

  return (
    <div className='mx-20'>
      <div className='text-center mx-32 mb-10 mt-8'>
        <motion.h1 className='text-6xl mb-10 text-white' initial='hidden' animate='visible' variants={fadeIn}>
          Aprende con <span className='text-color4'>EduLife</span>: Descubre una Experiencia Educativa en Línea
        </motion.h1>
        <motion.h2 className='text-2xl text-gray-500 mx-28' initial='hidden' animate='visible' variants={fadeUp}>
          EduLife es una página web simple que hace que aprender los conceptos básicos de programación sea más fácil,
          rápido y divertido que nunca. Con nuestro conjunto completo de funciones, podrás aprovechar al máximo tu
          experiencia de aprendizaje.
        </motion.h2>
        <motion.button
          className='text-white mt-20 py-4 px-7 mb-28 bg-color3 rounded-3xl border-4 border-transparent hover:border-color3 hover:scale-105 hover:bg-white hover:text-color3 transition-all duration-300 animate-border-pulse'
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
          Características Necesarias para una Experiencia de Aprendizaje enriquecedora
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
            titulo='Secciones temáticas'
            descripcion='Nuestra página web cuenta con secciones organizadas temáticamente, lo que facilita la navegación y el acceso a los diferentes conceptos de programación. Cada sección está diseñada para abordar un tema específico de manera clara y concisa.'
            icono='book'
          />
        </motion.div>
        <motion.div initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={slideIn}>
          <Features
            titulo='Amplia variedad de recursos'
            descripcion='EduLife ofrece una amplia gama de recursos educativos, que incluyen videos explicativos, ejemplos de código y líneas de programación comentadas. Estos recursos están diseñados para ayudar a los estudiantes a comprender y aplicar los conceptos de programación de manera efectiva.'
            icono='lineas'
          />
        </motion.div>
        <motion.div initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={slideIn}>
          <Features
            titulo='Diseño acogedor'
            descripcion='Nos enorgullece contar con un diseño acogedor y atractivo en nuestra página web. Utilizamos una combinación de colores agradables, una tipografía legible y un diseño intuitivo para crear un entorno de aprendizaje atractivo y cómodo para nuestros usuarios.'
            icono='documento'
          />
        </motion.div>
        <motion.div initial={inView ? "visible" : "hidden"} animate={inView ? "visible" : "hidden"} variants={slideIn}>
          <Features
            titulo='Enfoque práctico'
            descripcion='En EduLife, creemos en el aprendizaje práctico. Además de la teoría, brindamos numerosos ejercicios y desafíos de programación para que los estudiantes practiquen sus habilidades y fortalezcan su comprensión. Esto les permite aplicar los conceptos aprendidos de manera directa y obtener experiencia práctica en el desarrollo de aplicaciones web.'
            icono='chatcorazon'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
