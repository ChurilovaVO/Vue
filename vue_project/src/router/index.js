import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogDetails from '../views/BlogDetails.vue'
import Project from '../views/Project.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog_details',
    name: 'blog_details',
    component: BlogDetails
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/project/project_details',
    name: 'project_details',
    component: ProjectDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
