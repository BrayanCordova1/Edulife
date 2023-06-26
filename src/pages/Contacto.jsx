import React, { useState } from "react";

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNombreError("");
    setEmailError("");
    setMensajeError("");

    let formValid = true;

    if (nombre === "") {
      setNombreError("El nombre es obligatorio");
      formValid = false;
    }

    if (email === "") {
      setEmailError("El email es obligatorio");
      formValid = false;
    }

    if (mensaje.length < 20) {
      setMensajeError("El mensaje debe tener al menos 20 caracteres");
      formValid = false;
    }

    if (formValid) {
      alert("Mensaje enviado");
      console.log("Formulario enviado");
      setEmail("");
      setNombre("");
      setMensaje(" ");
    }
  };

  return (
    <div className='w-1/3 mx-auto'>
      <div className='container mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-2' htmlFor='nombre'>
              Nombre:
            </label>
            <input
              className='border border-gray-300 px-4 py-2 w-full  text-black'
              type='text'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {nombreError && <p className='text-red-500'>{nombreError}</p>}
          </div>
          <div className='mb-4'>
            <label className='block mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              className='border border-gray-300 px-4 py-2 w-full text-black'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className='text-red-500'>{emailError}</p>}
          </div>
          <div className='mb-4'>
            <label className='block mb-2' htmlFor='mensaje'>
              Mensaje:
            </label>
            <textarea
              className='border border-gray-300 px-4 py-2 w-full text-black'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}></textarea>
            {mensajeError && <p className='text-red-500'>{mensajeError}</p>}
          </div>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 duration-700  mx-auto' type='submit'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
