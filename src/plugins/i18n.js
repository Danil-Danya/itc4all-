import { createI18n } from "vue-i18n";

import eng from '../locales/en.json';
import rus from '../locales/ru.json';
import uzb from '../locales/uz.json';

const i18n = createI18n({
    fallbackLocale: 'rus',
    messages: { eng, rus, uzb }
})

export default i18n;