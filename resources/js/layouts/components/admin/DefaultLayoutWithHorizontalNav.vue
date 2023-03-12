<script setup>
import navItems from '@/navigation/horizontal'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/admin/Footer.vue'
import NavBarI18n from '@/layouts/components/admin/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/admin/NavBarNotifications.vue'
import NavbarShortcuts from '@/layouts/components/admin/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/admin/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/admin/NavSearchBar.vue'
import UserProfile from '@/layouts/components/admin/UserProfile.vue'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const { appRouteTransition } = useThemeConfig()
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="app-logo d-flex align-center gap-x-3"
      >
        <VNodeRenderer :nodes="themeConfig.app.logo2" />

        <h1 class="app-title font-weight-bold leading-normal text-xl">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer />



      <NavBarI18n />
      <NavbarThemeSwitcher />
      <NavbarShortcuts />
      <NavBarNotifications class="me-2" />
      <UserProfile />
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
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
