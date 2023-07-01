import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '../src/styles/main.scss'
import "locomotive-scroll/dist/locomotive-scroll.min.css";

const app = createApp(App)

app.use(createPinia())


app.mount('#app')
