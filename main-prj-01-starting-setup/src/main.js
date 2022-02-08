import { createApp } from 'vue';
import App from './App.vue'
import BaseMainContainer from './components/global/BaseMainContainer.vue'
import BaseCard from './components/global/BaseCard.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.component("main-container", BaseMainContainer)
app.component("base-card", BaseCard)

app.mount('#app');
