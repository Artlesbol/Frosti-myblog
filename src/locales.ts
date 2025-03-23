import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 导入本地的翻译文件
import translationEN from "../public/locales/en/translation.json";
import translationZH from "../public/locales/zh/translation.json";

export function initI18n() {
  if (i18next.isInitialized) {
    return;
  }
  i18next
    .use(LanguageDetector)
    .init({
      fallbackLng: "zh",
      supportedLngs: ["zh", "en"],
      detection: {
        order: ["querystring", "cookie", "localStorage", "navigator"],
        caches: ["cookie"],
      },
      resources: {
        en: {
          translation: translationEN,
        },
        zh: {
          translation: translationZH,
        },
      },
    });
}
