import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: '/admin/',
      redirect: to => {

        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const userRole = userData && userData.role ? userData.role : null

        if (userRole === 'admin')
          return { name: 'admin-analytics' }
        if (userRole === 'client')
          return { name: 'access-control' }

        return   { path: '/admin/login' }

      },
    },
    {
      path: '/dashboards/',
      redirect: to => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const userRole = userData && userData.role ? userData.role : null
        if (userRole === 'admin')
          return { name: 'admin-analytics' }
        if (userRole === 'client')
          return { name: 'access-control' }

        return   { path: '/dashboards/login' }

      },
    },
    {
      path: '/dashboards/pages/user-profile',
      redirect: () => ({ name: 'dashboards-pages-user-profile-tab', params: { tab: 'profile' } }),
    },
    {
      path: '/dashboards/pages/account-settings',
      redirect: () => ({ name: 'dashboards-pages-account-settings-tab', params: { tab: 'account' } }),
    },
    {
      path: '/dashboards/register',
      redirect: () => ({ name: 'dashboards-register' }),
    },
    {
      path: '/dashboards/login',
      redirect: () => ({ name: 'dashboards-login' }),
    },
    {
      path: '/admin/login',
      redirect: () => ({ name: 'admin-login' }),
    },
    ...setupLayouts(routes),
  ],
})


// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(to => {
  const isLoggedIn = isUserLoggedIn()

  /*

    ℹ️ Commented code is legacy code

    if (!canNavigate(to)) {
      // Redirect to login if not logged in
      // ℹ️ Only add `to` query param if `to` route is not index route
      if (!isLoggedIn)
        return next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })

      // If logged in => not authorized
      return next({ name: 'not-authorized' })
    }

    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn)
      next('/')

    return next()

    */
  if (canNavigate(to)) {
    if (to.meta.redirectIfLoggedIn && isLoggedIn)
      return '/admin/'
  }
  else {
    if (isLoggedIn)
      return { name: 'not-authorized' }
    else
    {
      if(to.fullPath==='/admin/login')
      {
        return { name: 'admin-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }

      if(to.fullPath==='/dashboards/login')
      {
        return { name: 'dashboards-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }

    }

  }
})
export default router
