<script setup>
import { useRoute } from 'vue-router'
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import AccountSettingsAccount from '@/views/admin/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsSecurity from '@/views/admin/pages/account-settings/AccountSettingsSecurity.vue'

const adminListStore = useAdminListStore()
const route = useRoute()
const userData = ref()
const activeTab = ref(route.params.tab)

adminListStore.getSingleUser(1).then(response => {
  userData.value = response.data
})

// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'tabler-users',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'tabler-lock',
    tab: 'security',
  },

]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'admin-pages-account-settings-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->


      <!-- Notification -->


      <!-- Connections -->

    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
  layout: default_admin
</route>
