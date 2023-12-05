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
  {
    path: "/about",
    components: {
      nav: () => import("@/views/Nav.vue"),
      default: () => import("@/views/About.vue"),
    }
  },
]

const router = createRouter({
  history: createWebHistory("/RealmTech/"),
  routes,
})

export default router
