import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './pages/NotFound.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesDetails from './pages/coaches/CoachDetails.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/coaches'
        },
        {
            path: '/coaches', component: CoachesList
        },
        {
            path: '/coaches/:id', 
            component: CoachesDetails, 
            children: [        
            {path: 'contact', component: ContactCoach}
            ]
        },
        {
            path: '/register', component: CoachesRegistration
        },
        {
            path: '/request', component: RequestsRecieved
        },
        {
            path: '/:notFound(.*)', component: NotFound
        },
    ],
})

export default router