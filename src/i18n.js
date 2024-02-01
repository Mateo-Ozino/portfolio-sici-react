import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { resources } from "./lang/resources"

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources
  })