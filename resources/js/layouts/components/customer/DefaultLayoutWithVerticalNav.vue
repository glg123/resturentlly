<script setup>
import navItems from '@/navigation/customer/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/customer/Footer.vue'
import NavBarI18n from '@/layouts/components/customer/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/customer/NavBarNotifications.vue'
import NavbarShortcuts from '@/layouts/components/customer/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/customer/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/admin/NavSearchBar.vue'
import UserProfile from '@/layouts/components/customer/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="tabler-menu-2"
            size="24"
          />
        </VBtn>



        <VSpacer />

        <NavBarI18n />
        <NavbarThemeSwitcher />

        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
