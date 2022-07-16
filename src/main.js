import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import { Button, Input, Calendar, Dropdown, Alert, veeValidationConfig } from 'vue-3-component-library-test'
import 'vue-3-component-library-test/styles.css'
import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n';
configure({
    generateMessage: localize({
        en: {
            messages: {
                max: '{field} needs less than 8 letters',
                min: '{field} needs at least 3 letters',
            },
            names: {
                email: 'email'
            },
        },
        ja: {
            messages: {
                max: '{field}は最大8文字にしてください',
                min: '{field}は三文字必要です',
            },
            names: {
                email: 'メールアドレス'
            },
        },
    }),
});
const app = createApp(App)
const pinia = createPinia()
app.use(veeValidationConfig)
app.use(pinia)
app.component('Button', Button)
app.component('Input', Input)
app.component('Alert', Alert)
app.mount('#app')
