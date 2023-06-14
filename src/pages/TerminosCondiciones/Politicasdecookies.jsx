import React from "react";
import { TermHeader, TermParrafo } from "../../components/terminos/Terminos";

export const Politicasdecookies = () => {
  return (
    <div className='mx-28'>
      <main>
        <TermHeader
          Titulo='POLÍTICA DE COOKIES DE EDULIFE'
          Descripcion='Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tableta, teléfono móvil, etc.) cuando visitas nuestro sitio web. Estas cookies nos permiten recopilar información sobre tu navegación y tus preferencias para ofrecerte una experiencia personalizada y mejorada.'
        />

        <TermParrafo
          Titulo='1. ¿Qué son las cookies?'
          Descripcion='Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tableta, teléfono móvil, etc.) cuando visitas nuestro sitio web. Estas cookies nos permiten recopilar información sobre tu navegación y tus preferencias para ofrecerte una experiencia personalizada y mejorada.'
        />

        <TermParrafo
          Titulo='2. Tipos de cookies que utilizamos'
          NumeroDeSubParrafos={4}
          SubParrafos={[
            {
              Titulo: "a) Cookies esenciales",
              Descripcion:
                "Estas cookies son necesarias para el funcionamiento básico de nuestro sitio web y te permiten navegar y utilizar sus características. No recopilan información personal identificable.",
            },
            {
              Titulo: "b) Cookies de rendimiento",
              Descripcion:
                "Estas cookies recopilan información anónima sobre cómo los usuarios utilizan nuestro sitio web, como las páginas visitadas con mayor frecuencia o los errores encontrados. Utilizamos esta información para mejorar la funcionalidad y el rendimiento de nuestro sitio web.",
            },
            {
              Titulo: "c) Cookies de funcionalidad",
              Descripcion:
                "Estas cookies permiten que nuestro sitio web recuerde las elecciones que has hecho (como el idioma o la región) y proporciona características mejoradas y más personalizadas. La información recopilada por estas cookies puede ser anónima y no rastreará tu actividad de navegación en otros sitios web.",
            },
            {
              Titulo: "d) Cookies de publicidad y seguimiento de terceros",
              Descripcion:
                "Podemos permitir que terceros, como socios de publicidad, recopilen información sobre tu actividad de navegación en nuestro sitio web para ofrecerte anuncios relevantes y personalizados en otros sitios web que visites.",
            },
          ]}
        />

        <TermParrafo
          Titulo='3. Control de cookies'
          Descripcion='Puedes administrar tus preferencias de cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten bloquear, rechazar o eliminar cookies. Sin embargo, ten en cuenta que si desactivas o eliminas nuestras cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.'
        />

        <TermParrafo
          Titulo='4. Transferencia internacional de datos'
          Descripcion='Al utilizar nuestro sitio web y aceptar el uso de cookies, entiendes y aceptas que la información recopilada a través de las cookies puede ser transferida y procesada en países fuera del Espacio Económico Europeo, que pueden tener leyes de protección de datos diferentes.'
        />

        <TermParrafo
          Titulo='5. Cambios en nuestra política de cookies'
          Descripcion='Nos reservamos el derecho de modificar o actualizar esta Política de Cookies en cualquier momento. Te recomendamos revisar esta página periódicamente para obtener la información más reciente sobre nuestras prácticas de cookies.'
        />

        <TermParrafo
          Titulo='6. Contacto'
          Descripcion='Si tienes alguna pregunta, inquietud o solicitud relacionada con nuestra Política de Cookies, no dudes en contactarnos a través de los siguientes datos de contacto:'
          NumeroDeSubParrafos={4}
          SubParrafos={[
            {
              Descripcion: "Nombre de la empresa: BrayanCordova",
            },
            {
              Descripcion: "Dirección: Av Ejemplo Mz T Lote 50",
            },
            {
              Descripcion: "Correo electrónico: EduLife@contact.me",
            },
            {
              Descripcion: "Teléfono: +51529232152",
            },
          ]}
        />
      </main>
    </div>
  );
};
