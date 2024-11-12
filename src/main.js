import './assets/styles/grid.scss';
import './assets/styles/all.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from './plugins/greensock';
import store from './store'

import image from './mixins/static.js';


const app = createApp(App)


app.use(router).use(gsap).use(store)
app.mixin(image)

app.mount('#app')
