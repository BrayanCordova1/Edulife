import React from "react";
import { TermHeader, TermParrafo } from "../../components/terminos/Terminos";

export const Privacidad = () => {
  return (
    <div className='mx-28'>
      <main>
        <TermHeader
          Titulo='Política de Privacidad de EduLife'
          Descripcion='En EduLife, propiedad y operada por BrayanCordova, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos, transferimos y almacenamos la información personal de los usuarios de nuestra plataforma de estudios en línea. Al acceder y utilizar nuestra plataforma, aceptas las prácticas descritas en esta política.'
        />

        <TermParrafo
          Titulo='1. Información que recopilamos'
          Descripcion='Recopilamos información personal de los usuarios de nuestra plataforma, como nombres, direcciones de correo electrónico, información de contacto y detalles del perfil del usuario. También recopilamos información no personal, como datos demográficos y preferencias de estudio. La información se recopila de forma voluntaria cuando los usuarios se registran, completan formularios o interactúan con nuestra plataforma.'
        />

        <TermParrafo
          Titulo='2. Uso de la información'
          Descripcion='Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios educativos. La información personal puede utilizarse para crear perfiles de usuario, enviar comunicaciones relacionadas con el servicio, procesar pagos, personalizar la experiencia del usuario, ofrecer soporte técnico y enviar actualizaciones o noticias sobre nuestros servicios.'
        />

        <TermParrafo
          Titulo='3. Divulgación de información'
          Descripcion='No vendemos, alquilamos ni compartimos información personal de los usuarios con terceros no afiliados, excepto en las siguientes circunstancias: cuando contamos con el consentimiento explícito del usuario, cuando sea necesario para cumplir con la ley aplicable o responder a procesos legales, para proteger nuestros derechos, propiedad o seguridad, o cuando sea requerido por un organismo gubernamental.'
        />

        <TermParrafo
          Titulo='4. Transferencia de información'
          Descripcion='Como operamos desde Perú, es posible que tengamos que transferir la información personal a otros países fuera de Perú para poder brindar nuestros servicios. Siempre que transferimos información personal, nos aseguramos de cumplir con las leyes y regulaciones aplicables y tomamos medidas razonables para proteger la privacidad y seguridad de los datos.'
        />

        <TermParrafo
          Titulo='5. Seguridad de la información'
          Descripcion='Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger la información personal de nuestros usuarios contra accesos no autorizados, divulgación, alteración o destrucción. Sin embargo, debes tener en cuenta que ninguna medida de seguridad es completamente infalible y no podemos garantizar la seguridad absoluta de la información transmitida o almacenada en nuestra plataforma.'
        />

        <TermParrafo
          Titulo='6. Enlaces a sitios de terceros'
          Descripcion='Nuestra plataforma puede contener enlaces a sitios web de terceros. No nos hacemos responsables de las prácticas de privacidad o el contenido de dichos sitios. Te recomendamos revisar las políticas de privacidad de esos sitios antes de proporcionar cualquier información personal.'
        />

        <TermParrafo
          Titulo='7. Cambios a esta política'
          Descripcion='Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio entrará en vigencia a partir de su publicación en nuestra plataforma. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos la privacidad de tus datos.'
        />

        <TermParrafo
          Titulo='8. Contacto'
          Descripcion='Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad, puedes ponerte en contacto con nosotros a través de los canales de soporte proporcionados en nuestra plataforma.'
        />
      </main>
    </div>
  );
};
