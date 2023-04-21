<script setup>
import ClientTabBillingsPlans from '@/views/apps/client/view/ClientTabBillingsPlans.vue'
import ClientTabConnections from '@/views/apps/client/view/ClientTabConnections.vue'
import ClientTabNotifications from '@/views/apps/client/view/ClientTabNotifications.vue'
import ClintTabOverview from "@/views/apps/client/view/ClintTabOverview.vue"
import ClientTabInfo from "@/views/apps/client/view/ClientTabInfo.vue"
import { useClientListStore } from "@/views/apps/client/useClientListStore"
import ClientBioPanel from "@/views/apps/client/view/ClientBioPanel.vue"


const clientListStore = useClientListStore()
const route = useRoute()
const clientData = ref()
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



clientListStore.SingleClient(Number(route.params.id)).then(response => {
  clientData.value = response.data



})
</script>

<template>
  <VRow v-if="clientData">
    <VCol
      cols="12"
      md="4"
      lg="5"
    >
      <ClientBioPanel :client-data="clientData"/>
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
          <ClintTabOverview
            :client-id="route.params.id"
          />
        </VWindowItem>

        <VWindowItem>
          <ClientTabInfo
            :client-id="route.params.id"
          />
        </VWindowItem>

        <VWindowItem>
          <ClientTabBillingsPlans/>
        </VWindowItem>

        <VWindowItem>
          <ClientTabNotifications/>
        </VWindowItem>

        <VWindowItem>
          <ClientTabConnections/>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: client_view
</route>
