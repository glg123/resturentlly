<script setup>
import { useRoute } from 'vue-router'
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
// eslint-disable-next-line import/named
import { useSettingStore } from '@/views/apps/setting/SettingStore'
import AccountSettingsAccount from '@/views/admin/pages/account-settings/AccountSettingsAccount.vue'
import Service from '@/views/admin/pages/account-settings/Service.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const adminListStore = useAdminListStore()

const settingStore = useSettingStore()

const route = useRoute()
const userData = ref()
const serviceData = ref()
const activeTab = ref(route.params.tab)

adminListStore.getSingleUser(1).then(response => {
  userData.value = response.data
})

settingStore.services().then(response => {
  serviceData.value = response.data
})


// tabs
const tabs = [
  {
    title: t('Site_Settings'),
    icon: 'tabler-list',
    tab: 'account',
  },
  {
    title: t('Service_Settings'),
    icon: 'tabler-list',
    tab: 'service',
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


      <!-- Billing -->
      <VWindowItem value="service">
        <Service />
      </VWindowItem>

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
