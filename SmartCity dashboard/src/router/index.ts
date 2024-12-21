import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import Overview from '@/views/Dashboard/Overview.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import reservationsTable from '@/views/tables/reservationsTable.vue'
import clientsTable from '@/views/tables/clientsTable.vue'
import hostelsTable from '@/views/tables/hostelsTable.vue'
import clubsTable from '@/views/tables/clubsTable.vue'
import empolyeTable from '@/views/tables/empolyeTable.vue'
import BlacklistTable from '@/views/tables/blacklistTable.vue'
const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
    meta: {
      title: 'Overview'
    }
  },
  {
    path: '/reservations',
    name: 'tables',
    component: reservationsTable,
    meta: {
      title: 'Reservations'
    }
  },
  {
    path: '/clients',
    name: 'clients',
    component: clientsTable,
    meta: {
      title: 'Clients'
    }
    
  },
  {
    path: '/hostels',
    name: 'hostels',
    component: hostelsTable,
    meta: {
      title: 'Hostels'
    }
  },
  {
    path: '/employees',
    name: 'employees',
    component: empolyeTable,
    meta: {
      title: 'Employees'
    }
  },
  {
    path: '/clubs',
    name: 'clubs',
    component: clubsTable,
    meta: {
      title: 'Clubs'
    }
  },
  {
    path: '/blacklist',
    name: 'blacklist',
    component: BlacklistTable,
    meta: {
      title: 'Blacklist'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `SmartCity ${to.meta.title}`
  next()
})

export default router
