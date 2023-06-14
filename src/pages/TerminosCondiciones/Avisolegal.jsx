import React from "react";
import { TermHeader, TermParrafo } from "../../components/terminos/Terminos";

export const Avisolegal = () => {
  return (
    <div className='mx-28'>
      <main>
        <TermHeader
          Titulo='Aviso Legal y Términos de Uso'
          Descripcion='El presente documento establece los términos y condiciones que rigen el uso del sitio web de EduLife, una plataforma educativa innovadora diseñada para proporcionar una experiencia de aprendizaje en línea excepcional. EduLife se enorgullece de ser ofrecida por BrayanCordova, una reconocida empresa registrada en el país de Perú que se ha destacado por su compromiso con la educación de calidad. Al acceder y utilizar la Plataforma de EduLife, usted acepta cumplir con los siguientes términos y condiciones que han sido cuidadosamente diseñados para garantizar un entorno seguro, eficiente y enriquecedor para todos los usuarios. La Compañía se esfuerza por brindar un servicio excepcional, por lo que es importante que lea y comprenda completamente estos términos y condiciones antes de utilizar la Plataforma. El acceso a la Plataforma está sujeto a su aceptación incondicional de estos términos y condiciones, así como de todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de los términos aquí establecidos, le solicitamos que no utilice la Plataforma. Su uso continuo del sitio web de EduLife constituye su consentimiento expreso y continuo de estos términos y condiciones, y su compromiso de cumplir con ellos en todo momento. Además, tenga en cuenta que EduLife se reserva el derecho de modificar, actualizar o cambia restos términos y condiciones en cualquier momento y a su entera discreción. Cualquier cambio se notificará de manera oportuna a través del sitio web o por otros medios de comunicación apropiados. Es su responsabilidad revisar regularmente estos términos y condiciones para estar al tanto de cualquier modificación. El uso continuado de la Plataforma después de dichos cambios constituirá su aceptación de los términos revisados. En caso de que viole alguno de los términos y condiciones establecidos en este documento, EduLife se reserva el derecho de tomar las medidas que considere necesarias, incluyendo, pero no limitado a, la suspensión o terminación de su acceso a la Plataforma y la adopción de acciones legales pertinentes. La privacidad y la seguridad de sus datos personales son de suma importancia para nosotros. Por favor, consulte nuestra Política de Privacidad para comprender cómo recopilamos, utilizamos y protegemos su información personal en el contexto de la Plataforma de EduLife. Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, no dude en ponerse en contacto con nuestro equipo de soporte, estaremos encantados de asistirle. Esperamos que disfrute de su experiencia en la Plataforma de EduLife y aproveche al máximo todas las oportunidades educativas que ofrecemos.'
        />
        <TermParrafo
          Titulo='1. Aceptación de los términos'
          Descripcion='Al acceder y utilizar la Plataforma, usted reconoce haber leído, entendido y aceptado los términos y condiciones establecidos en este aviso legal. Si no está de acuerdo con estos términos, le solicitamos que no utilice la Plataforma. Esta sección se divide en los siguientes puntos:'
          NumeroDeSubParrafos={3}
          SubParrafos={[
            {
              Titulo: "1.1. Lectura y comprensión",
              Descripcion:
                "Antes de utilizar la Plataforma, es importante que tome el tiempo necesario para leer detenidamente estos términos y condiciones. Al acceder a la Plataforma, usted acepta que ha leído y comprendido todos los aspectos establecidos en este aviso legal. Si tiene alguna pregunta o duda sobre los términos, le recomendamos que se comunique con nuestro equipo de soporte para obtener aclaraciones adicionales.",
            },
            {
              Titulo: "1.2. Aceptación de los términos",
              Descripcion:
                "Una vez que haya leído y comprendido los términos y condiciones, al utilizar la Plataforma usted acepta cumplir con todas las disposiciones y obligaciones establecidas en este aviso legal. Su acceso continuado y uso de la Plataforma constituirá su consentimiento y aceptación de estos términos. Si no está de acuerdo con alguna parte de los términos y condiciones, le instamos a que cese inmediatamente el uso de la Plataforma.",
            },
            {
              Titulo: "1.3. Responsabilidad legal",
              Descripcion:
                "Es importante destacar que al aceptar estos términos, usted asume la responsabilidad legal por cualquier actividad que realice en la Plataforma. Usted acepta utilizar la Plataforma de acuerdo con la legislación aplicable y cumplir con todas las leyes, regulaciones y normativas relevantes. Además, usted acepta que cualquier información o contenido que proporcione a través de la Plataforma será veraz, precisa y no infringing de los derechos de terceros.",
            },
          ]}
        />

        <TermParrafo
          Titulo='2. Derechos de autor'
          Descripcion='Los contenidos disponibles en la Plataforma, como textos, gráficos, logotipos, imágenes, videos, audios y software, están protegidos por derechos de autor. Estos derechos de autor pertenecen exclusivamente a la Compañía o a sus respectivos propietarios. La protección de los derechos de autor implica que nadie más tiene el derecho de reproducir, distribuir, modificar, publicar o utilizar de cualquier otra manera estos contenidos sin el consentimiento previo por escrito de la Compañía.'
          NumeroDeSubParrafos={5}
          SubParrafos={[
            {
              Titulo: "2.1 Reproducción y distribución",
              Descripcion:
                "Queda estrictamente prohibida la reproducción y distribución de los contenidos disponibles en la Plataforma sin el consentimiento previo por escrito de la Compañía. Esto significa que no se puede copiar, duplicar, fotocopiar, escanear, transmitir o distribuir de ninguna forma los contenidos protegidos por derechos de autor. La Compañía se reserva el derecho de emprender acciones legales contra cualquier persona o entidad que infrinja estos derechos.",
            },
            {
              Titulo: "2.1.1 Modificación y adaptación",
              Descripcion:
                "Asimismo, está prohibida la modificación o adaptación de los contenidos protegidos por derechos de autor sin el consentimiento previo por escrito de la Compañía. Esto incluye cualquier forma de alteración, edición, recorte o añadido a los contenidos originales. La Compañía se reserva el derecho de proteger la integridad y originalidad de sus contenidos y tomará las medidas necesarias para hacer valer sus derechos legales.",
            },
            {
              Titulo: "2.2 Propiedad de la Compañía",
              Descripcion:
                "La Compañía es la propietaria exclusiva de los contenidos disponibles en la Plataforma, a menos que se indique lo contrario. Esto significa que la Compañía tiene el derecho de controlar y administrar el uso de sus contenidos de acuerdo con las leyes de propiedad intelectual aplicables. Cualquier uso no autorizado de los contenidos sin el consentimiento previo por escrito de la Compañía constituye una violación de sus derechos de propiedad intelectual.",
            },
            {
              Titulo: "2.2.1 Uso autorizado",
              Descripcion:
                "La Compañía puede otorgar autorización para el uso de sus contenidos bajo ciertas condiciones específicas. Esto puede incluir el uso de materiales protegidos por derechos de autor para fines educativos, no comerciales o de conformidad con los términos y condiciones establecidos por la Compañía. Cualquier uso autorizado de los contenidos debe estar en pleno cumplimiento de las disposiciones legales y los acuerdos establecidos por la Compañía.",
            },
            {
              Titulo: "2.2.2 Protección legal",
              Descripcion:
                "La Compañía se reserva el derecho de tomar acciones legales para proteger sus derechos de propiedad intelectual. Esto puede incluir el inicio de acciones judiciales, la búsqueda de indemnización por daños y perjuicios y la obtención de medidas cautelares para prevenir el uso no autorizado de sus contenidos. La Compañía también puede colaborar con autoridades competentes para hacer cumplir la legislación de propiedad intelectual y perseguir a los infractores.",
            },
          ]}
          Descripcion2='En resumen, la propiedad intelectual de los contenidos disponibles en la Plataforma es un tema de suma importancia para la Compañía. Se prohíbe la reproducción, distribución, modificación, publicación o cualquier otro uso no autorizado de dichos contenidos sin el consentimiento previo por escrito de la Compañía. La Compañía ejercerá sus derechos legales para proteger su propiedad intelectual y tomará medidas contra aquellos que infrinjan dichos derechos.'
        />

        <TermParrafo
          Titulo='3. Uso de la Plataforma'
          Descripcion='La Plataforma se proporciona únicamente con fines educativos. Usted acepta utilizar la Plataforma de acuerdo con la ley aplicable, los presentes términos y condiciones, y cualquier otro aviso o instrucción proporcionada por la Compañía. Para garantizar un uso adecuado de la Plataforma, se establecen las siguientes pautas:'
          NumeroDeSubParrafos={3}
          SubParrafos={[
            {
              Titulo: "3.1 Cumplimiento de la ley y los términos de uso:",
              Descripcion:
                "Es de vital importancia que los usuarios utilicen la Plataforma de acuerdo con la legislación vigente. Esto implica respetar los derechos de propiedad intelectual, no difundir contenido ilegal o que incite al odio, y abstenerse de llevar a cabo actividades que puedan ser consideradas fraudulentas o ilegales. Además, los usuarios deben cumplir con los términos y condiciones establecidos por la Compañía, ya que el incumplimiento de dichos términos puede resultar en la suspensión o cancelación de su cuenta.",
            },
            {
              Titulo: "3.2 No interferencia con el funcionamiento de la Plataforma:",
              Descripcion:
                "Los usuarios tienen la responsabilidad de no utilizar la Plataforma de manera que pueda interferir, dañar o afectar su funcionamiento. Esto incluye la prohibición de realizar acciones que puedan sobrecargar los servidores de la Plataforma, comprometer la seguridad del sistema o utilizar métodos automatizados para acceder a la Plataforma sin autorización. Cualquier intento de interferencia con el funcionamiento adecuado de la Plataforma puede ser considerado como una violación de los términos de uso y dar lugar a medidas disciplinarias.",
            },
            {
              Titulo: "3.3 Respeto hacia otros usuarios:",
              Descripcion:
                "Se espera que los usuarios de la Plataforma se traten entre sí con respeto y consideración. Cualquier forma de acoso, intimidación o discriminación hacia otros usuarios está estrictamente prohibida. Además, no se permite compartir información personal de otros usuarios sin su consentimiento expreso. La Compañía se reserva el derecho de tomar medidas disciplinarias contra aquellos usuarios que violen estas normas.",
            },
          ]}
          Descripcion2='En resumen, la propiedad intelectual de los contenidos disponibles en la Plataforma es un tema de suma importancia para la Compañía. Se prohíbe la reproducción, distribución, modificación, publicación o cualquier otro uso no autorizado de dichos contenidos sin el consentimiento previo por escrito de la Compañía. La Compañía ejercerá sus derechos legales para proteger su propiedad intelectual y tomará medidas contra aquellos que infrinjan dichos derechos.'
        />

        <TermParrafo
          Titulo='4. Contenido generado por el usuario'
          Descripcion='La Plataforma puede permitir a los usuarios generar y compartir contenido, como comentarios, opiniones, preguntas y respuestas. Usted acepta que es el único responsable de cualquier contenido que genere y comparta a través de la Plataforma. La Compañía no asume ninguna responsabilidad por el contenido generado por los usuarios y se reserva el derecho de eliminar o modificar cualquier contenido que considere inapropiado, a su exclusivo criterio.'
        />

        <TermParrafo
          Titulo='5. Privacidad y protección de datos'
          Descripcion='La Compañía se compromete a proteger la privacidad y los datos personales de los usuarios de acuerdo con su Política de Privacidad. Al utilizar la Plataforma, usted acepta la recopilación, el uso y la divulgación de sus datos personales de acuerdo con dicha Política.'
        />

        <TermParrafo
          Titulo='6. Limitación de responsabilidad'
          Descripcion='La Compañía no garantiza la disponibilidad, precisión, actualidad o fiabilidad de la Plataforma. Usted utiliza la Plataforma bajo su propio riesgo. La Compañía no será responsable por ningún daño directo, indirecto, incidental, especial, consecuente o punitivo derivado del uso o la imposibilidad de uso de la Plataforma.'
        />

        <TermParrafo
          Titulo='7. Enlaces a sitios de terceros'
          Descripcion='La Plataforma puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no implican el respaldo o la aprobación de la Compañía. La Compañía no asume ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web de terceros.'
        />

        <TermParrafo
          Titulo='8. Modificaciones'
          Descripcion='La Compañía se reserva el derecho de modificar, suspender o interrumpir la Plataforma, total o parcialmente, en cualquier momento y sin previo aviso. Asimismo, la Compañía se reserva el derecho de modificar los presentes términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en la Plataforma.'
        />

        <TermParrafo
          Titulo='9. Legislación aplicable y jurisdicción'
          Descripcion='Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país de Perú. Cualquier disputa o reclamación relacionada con la Plataforma estará sujeta a la jurisdicción exclusiva de los tribunales competentes del país de Perú.'
        />

        <TermParrafo
          Titulo='10. Indemnización'
          Descripcion='Usted acepta indemnizar y eximir de responsabilidad a la Compañía, sus directores, empleados y agentes, frente a cualquier reclamación, demanda, pérdida, responsabilidad, daños o gastos (incluyendo honorarios legales razonables) derivados de su incumplimiento de los presentes términos y condiciones o de su uso indebido de la Plataforma.'
        />
      </main>
    </div>
  );
};
