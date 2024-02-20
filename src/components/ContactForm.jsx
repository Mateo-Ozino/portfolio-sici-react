import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

export function ContactForm() {
  const { t } = useTranslation()

  useEffect(() => emailjs.init("FEOmaTiiwV3PxIHAW"), []);

  const [contactResult, setContactResult] = useState(false)
  const [contactSuccess, setContactSuccess] = useState("")

  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correo
    mensaje: /^[a-zA-Z0-9,.!?¡¿\s"()]+$/, //Letras y símbolos
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
      setContactSuccess(t("contactSuccess"))
    }
  })

  return (
    <section className="contact">
      <div className="contact__container">
        <form onSubmit={e => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-6 py-3"
              {...register("name", {
                required: {
                  value: true,
                  message: t("fieldRequired"),
                },
                pattern: {
                  value: expresiones.nombre,
                  message: t("fieldIncorrect")
                }
              })}
            />
            <p className='form__error-message'>{errors.name?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block">
            {t("emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-3 px-6"
              {...register("email", {
                required: {
                  value: true,
                  message: t("fieldRequired"),
                },
                pattern: {
                  value: expresiones.mail,
                  message: t("fieldIncorrect")
                }
              })}
            />
            <p className='form__error-message'>{errors.email?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="reason" className="block mb-3">
              {t("reasonLabel")}
            </label>
            <select 
            id="reason" 
            className="w-full py-3 px-6"
            defaultValue={"default"}
            {...register("reason", {
              required: {
                value: true,
                message: t("fieldRequired"),
              },
            })}
            >
              <option value="default" disabled>{t("optionDefault")}</option>
              <option value="project">{t("option1")}</option>
              <option value="info">{t("option2")}</option>
              <option value="other">{t("option3")}</option>
            </select>
            <p className='form__error-message'>{errors.reason?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block">
              {t("textareaLabel")}
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder={t("textareaPlaceholder")}
              className="w-full resize-none py-3 px-6"
              {...register("message", {
                required: {
                  value: true,
                  message: t("fieldRequired"),
                },
                pattern: {
                  value: expresiones.mensaje,
                  message: t("fieldIncorrect")
                }
              })}
            >
            </textarea>
            <p className='form__error-message'>{errors.message?.message}</p>
          </div>
          <div>
            <button className="py-3 px-8" onClick={onSubmit}>
              {t("submitButton")}
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