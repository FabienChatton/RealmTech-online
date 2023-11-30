// Composables
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    components: {
      nav: () => import("@/views/Nav.vue"),
      default: () => import("@/views/Home.vue"),
    },
  },
  {
    path: "/inscription",
    components: {
      nav: () => import("@/views/Nav.vue"),
      default: () => import("@/views/Inscription.vue"),
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
