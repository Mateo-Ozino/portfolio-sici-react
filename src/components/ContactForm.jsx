import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';

export function ContactForm() {
  useEffect(() => emailjs.init("FEOmaTiiwV3PxIHAW"), []);

  const [contactResult, setContactResult] = useState(false)
  const [contactSuccess, setContactSuccess] = useState("")

  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correo
    mensaje: /^[a-zA-Z0-9,.!?¡¿\s]+$/, //Letras y símbolos
  }

  const onSubmit = handleSubmit(data => {
    try{ 
      emailjs.send("service_zhi6rba", "contact_form", {
        user_name: data.name,
        user_email: data.email,
        reason: data.reason,
        message: data.message
      })      
    } catch (error) {
      alert(error)
      setContactResult(false)
    } finally {
      reset()
      setContactResult(true)
      setContactSuccess("Correo enviado exitosamente")
    }
  })

  return (
    <section className="contact">
      <div className="contact__container">
        <form onSubmit={e => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block">
              Name and Last Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-6 py-3"
              {...register("name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: expresiones.nombre,
                  message: "The content is incorrect"
                }
              })}
            />
            <p className='form__error-message'>{errors.name?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-3 px-6"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: expresiones.mail,
                  message: "The content is incorrect"
                }
              })}
            />
            <p className='form__error-message'>{errors.email?.message}</p>
          </div>
          <div className="mb-5 prueba">
            <label htmlFor="reason" className="block mb-3">Reason for contact:</label>
            <select 
            id="reason" 
            className="w-full py-3 px-6"
            defaultValue={"default"}
            {...register("reason", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            >
              <option value="default" disabled>Choose your reason for contacting</option>
              <option value="project">Project</option>
              <option value="info">Info</option>
              <option value="other">Other</option>
            </select>
            <p className='form__error-message'>{errors.reason?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Write your message here."
              className="w-full resize-none py-3 px-6"
              {...register("message", {
                required: {
                  value: true,
                  message: "This field is required",
                  pattern: {
                    value: expresiones.mensaje,
                    message: "The content is incorrect"
                  }
                },
              })}
            >
            </textarea>
            <p className='form__error-message'>{errors.message?.message}</p>
          </div>
          <div>
            <button className="py-3 px-8" onClick={onSubmit}>
              Enviar
            </button>
          </div>
          <div className={"result " + (contactResult ? "good-result" : "bad-result")}>
            <h4>
              {contactSuccess}
            </h4>
          </div>
        </form>
      </div>
    </section>
  )
}