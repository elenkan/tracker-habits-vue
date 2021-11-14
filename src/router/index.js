import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CreateHabit from '../views/CreateHabit'
import HabitsList from '../views/HabitsList'
import ProgressList from '../views/ProgressList'
import SettingsPage from "../views/SettingsPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
    {
    path: '/create-habit',
    name: 'createHabit',
    component: CreateHabit
  },
    {
    path: '/habits-list',
    name: 'habitsList',
    component: HabitsList
  },
    {
    path: '/progress',
    name: 'progressList',
    component: ProgressList
  },
  {
    path: '/settings',
    name: 'settingsPage',
    component: SettingsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
