import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'

const router = createRouter({
  history: createWebHistory(),
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
      path: '/customers/',
      redirect: to => {
        console.log('customers')

        const userData = JSON.parse(localStorage.getItem('userData') || '{}')

        const userRole = userData && userData.role ? userData.role : null
        if (userRole === 'admin')
        {
          return { name: 'admin-analytics' }
        }

        if (userRole === 'client')
        {
          return { name: 'access-control' }
        }
        if (userRole === 'customer')
        {
          console.log('customers')

          return { name: 'customers-my' }
        }

        return   { path: '/customers/login' }

      },
    },
    {
      path: '/staff/',
      redirect: to => {
        console.log('staff')

        const userData = JSON.parse(localStorage.getItem('userData') || '{}')

        const userRole = userData && userData.role ? userData.role : null
        if (userRole === 'admin')
        {
          return { name: 'admin-analytics' }
        }

        if (userRole === 'client')
        {
          return { name: 'access-control' }
        }
        if (userRole === 'customer')
        {
          console.log('customers')

          return { name: 'customers-my' }
        }
        if (userRole === 'staff')
        {
          console.log('staff')

          return { name: 'staff-my' }
        }

        return   { path: '/staff/login' }

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
    console.log('customers')
    if (to.meta.redirectIfLoggedIn && isLoggedIn)
    {

      console.log('customers_re')

      const userData = JSON.parse(localStorage.getItem('userData') || '{}')

      const userRole = userData && userData.role ? userData.role : null

      if (userRole === 'admin')
      {
        return '/admin/'
      }

      else if (userRole === 'client')
      {
        //window.location.reload();
        return '/dashboards/'
      //  return '/'
      }
      else if (userRole === 'customer')
      {
        return '/customers/'

      }
      else if (userRole === 'staff')
      {
        return '/staff/'

      }


    }
    else
    {
     // return { name: 'not-authorized-guest', query: { to: to.name !== 'index' ? to.fullPath : undefined } }

   //   console.log('customers2222')
   //   return { name: 'not-authorized-guest' }
    }

  }
  else {
    console.log(to.fullPath)
    if (isLoggedIn)
    {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}')
      const userRole = userData && userData.role ? userData.role : null
      console.log('customers_auth',userRole)
      if(userRole != 'admin')
      {
        return { name: 'not-authorized-guest' }
      }
      if(userRole != 'admin')
      {
        return { name: 'not-authorized-customer' }
      }

      else
      {
        return { name: 'dashboards-login' }
      }

    }

    else
    {
      console.log('customers_not_auth')
      if(to.fullPath==='/register')
      {
        return { name: '/register', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }
      if(to.fullPath==='/admin/login')
      {
        return { name: 'admin-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }

      if(to.fullPath==='/dashboards/login')
      {
        return { name: 'dashboards-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }
      if(to.fullPath==='/customers/login')
      {

        return { name: 'customers-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }
      if(to.fullPath==='/staff/login')
      {

        return { name: 'staff-login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }
      else {
        return { name: 'not-authorized-guest' }
      //  return { name: 'choose_login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
      }

    }

  }
})
export default router
