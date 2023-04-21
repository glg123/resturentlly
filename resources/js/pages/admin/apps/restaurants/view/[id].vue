<script setup>
import { useRestListStore } from '@/views/apps/restaurant/useRestListStore'
import RestBioPanel from '@/views/apps/restaurant/view/RestBioPanel.vue'
import UserTabBillingsPlans from '@/views/apps/restaurant/view/UserTabBillingsPlans.vue'
import UserTabConnections from '@/views/apps/restaurant/view/UserTabConnections.vue'
import UserTabNotifications from '@/views/apps/restaurant/view/UserTabNotifications.vue'
import RestTabOverview from "@/views/apps/restaurant/view/RestTabOverview.vue"
import RestTabInfo from "@/views/apps/restaurant/view/RestTabInfo.vue"


const restListStore = useRestListStore()
const route = useRoute()
const restData = ref()
const userTab = ref(null)

const tabs = [
  {
    icon: 'tabler-user-check',
    title: 'Overview',
  },
  {
    icon: 'tabler-lock',
    title: 'General_Settings',
  },
  {
    icon: 'tabler-currency-dollar',
    title: 'Billing & Plan',
  },
  {
    icon: 'tabler-bell',
    title: 'Main_Settings',
  },
  {
    icon: 'tabler-link',
    title: 'Connections',
  },
]



restListStore.SingleRest(Number(route.params.id)).then(response => {
  restData.value = response.data




})
</script>

<template>
  <VRow v-if="restData">
    <VCol
      cols="12"
      md="4"
      lg="5"
    >
      <RestBioPanel :rest-data="restData"/>
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="7"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            :size="18"
            :icon="tab.icon"
            class="me-1"
          />
          <span>{{ $t(tab.title) }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <RestTabOverview
            :rest-id="route.params.id"
          />
        </VWindowItem>

        <VWindowItem>
          <RestTabInfo
            :rest-id="route.params.id"
          />
        </VWindowItem>

        <VWindowItem>
          <UserTabBillingsPlans/>
        </VWindowItem>

        <VWindowItem>
          <UserTabNotifications/>
        </VWindowItem>

        <VWindowItem>
          <UserTabConnections/>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: restaurants_view
</route>
