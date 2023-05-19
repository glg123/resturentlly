<script setup>
import navItems from '@/navigation/client/horizontal'
import {useThemeConfig} from '@core/composable/useThemeConfig'
import {themeConfig} from '@themeConfig'

// Components
import Footer from '@/layouts/components/client/Footer.vue'
import NavBarI18n from '@/layouts/components/client/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/client/NavBarNotifications.vue'
import NavbarShortcuts from '@/layouts/components/client/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/client/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/client/NavSearchBar.vue'
import UserProfile from '@/layouts/components/client/UserProfile.vue'
import {HorizontalNavLayout} from '@layouts'
import {VNodeRenderer} from '@layouts/components/client/VNodeRenderer'

const {appRouteTransition} = useThemeConfig()

const home_click = () => {

  document.location.href = '/'
}
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        @click="home_click"
        class="app-logo d-flex align-center gap-x-3"
      >
        <VNodeRenderer :nodes="themeConfig.app.logo2"/>

        <h1 class="app-title font-weight-bold leading-normal text-xl">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer/>


      <NavBarI18n/>
      <NavbarThemeSwitcher/>
      <NavbarShortcuts/>
      <NavBarNotifications class="me-2"/>
      <UserProfile/>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer/>
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer/>
  </HorizontalNavLayout>
</template>
