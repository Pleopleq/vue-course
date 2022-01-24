import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamLists from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamLists },
    { path: '/users', component: UsersList },
    { path: '/teams/:id', component: TeamMembers },
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');
