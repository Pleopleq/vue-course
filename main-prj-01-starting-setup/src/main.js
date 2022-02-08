import { createApp } from 'vue';
import App from './App.vue'
import BaseMainContainer from './components/BaseMainContainer.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.component("main-container", BaseMainContainer)

app.mount('#app');
