<script setup>
import { useSettingListStore } from "../../order/useSettingListStore"
import { useI18n } from "vue-i18n"
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()
const { t } = useI18n()
let isConfirmDialogOpen = ref(false)
const settingListStore = useSettingListStore()
const searchQuery = ref('')
const base_url = ref('states/:id')
const selectedRole = ref()
const idClick = ref()
const renderComponent = ref(false)
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(1)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const counter = ref(0)
const myOrders = ref([])
const router = useRouter()
const admins_active = ref(1)
const admins_count = ref(1)
const admins_not_active = ref(1)
const admins_block = ref(1)
const fetchOrders = () => {
  settingListStore.myOrders({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    page: currentPage.value,
  }).then(response => {


    myOrders.value = response.data.data
    totalPage.value = response.data.meta.total
    totalUsers.value = response.data.meta.total

  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchOrders)
watch(() => isAppRtl.value, () => {
  //alert()
  //fetchOrders()
})
// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
const route = useRoute()

const handleChildEvent = () => {

  console.log('done')

  fetchOrders()


}


watch(() => counter.value, () => {
  if (counter.value === 10) {
    //  alert()
    fetchOrders()
  }
  console.log(
    "Watch props.selected function called with args:",
    counter.value,
  )
})


const isAddNewUserDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = myOrders.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = myOrders.value.length + (currentPage.value - 1) * rowPerPage.value

  return ` ${t("Showing")} ${firstIndex} ${t("to")} ${lastIndex} ${t("of")} ${totalUsers.value} ${t("entries")}`
})


const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'customer_profile',
}

const deleteDialog = id => {
  isConfirmDialogOpen.value = true
  idClick.value = id
}
//'active','watting','cancel','done','in_progress'

const status = [
  {
    title: t('watting'),
    value: 'watting',
  },
  {
    title: t('cancel'),
    value: 'cancel',
  },
  {
    title: t('active'),
    value: 'active',
  },
  {
    title: t('done'),
    value: 'done',
  },
  {
    title: t('in_progress'),
    value: 'done',
  },
]
const orderListMeta = [
  {
    icon: 'tabler-user',
    color: 'primary',
    title: t('total_user'),
    stats: admins_count,
    percentage: +29,
    subtitle: t('total_user'),
  },
  {
    icon: 'tabler-user-plus',
    color: 'error',
    title: t('not_active_user'),
    stats: admins_not_active,
    percentage: +18,
    subtitle: t('not_active_user'),
  },
  {
    icon: 'tabler-user-check',
    color: 'success',
    title: t('active_user'),
    stats: admins_active,
    percentage: -14,
    subtitle: t('active_user'),
  },
  {
    icon: 'tabler-user-exclamation',
    color: 'warning',
    title: t('block_user'),
    stats: admins_block,
    percentage: +42,
    subtitle: t('block_user'),
  },
]
</script>

<template>
  <section>
    <VRow>
      <VCol
        v-for="meta in userListMeta"
        :key="meta.title"
        cols="12"
        sm="6"
        lg="3"
      >
        <VCard>
          <VCardText class="d-flex justify-space-between">
            <div>
              <span>{{ meta.title }}</span>
              <div class="d-flex align-center gap-2 my-1">
                <h6 class="text-h6">
                  {{ meta.stats }}
                </h6>
              </div>
              <span>{{ meta.subtitle }}</span>
            </div>

            <VAvatar
              rounded
              variant="tonal"
              :color="meta.color"
              :icon="meta.icon"
            />
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard :title="$t('Search Filter')">
          <VCardText>
            <VRow>


              <!-- 👉 Select Status -->
              <VCol
                cols="12"
                sm="4"
              >
                <VSelect
                  v-model="selectedStatus"
                  :label="$t('Select Status')"
                  :items="status"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
            </VRow>
          </VCardText>

          <VDivider/>

          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div
              class="me-3"
              style="width: 80px;"
            >
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <VSpacer/>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <!-- 👉 Search  -->
              <div style="width: 10rem;">
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                />
              </div>

              <!-- 👉 Export button -->
              <VBtn
                variant="tonal"
                color="secondary"
                prepend-icon="tabler-screen-share"
              >
                {{ $t('export') }}
              </VBtn>

              <!-- 👉 Add user button -->
              <VBtn v-if="$can(user.action, user.subject)">

                <RouterLink
                  :to="{ name: 'admin-apps-permission-add-add_new'}"
                  class="font-weight-medium user-list-name"
                >
                  {{ $t('AddNew') }}
                </RouterLink>

              </VBtn>
            </div>
          </VCardText>

          <VDivider/>

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
            <tr>
              <th scope="col">
                {{ $t('meal_name') }}
              </th>
              <th scope="col">
                {{ $t('restaurant_name') }}
              </th>
              <th scope="col">
                {{ $t('staff_name') }}
              </th>
              <th scope="col">
                {{ $t('price') }}
              </th>
              <th scope="col">
                {{ $t('discount') }}
              </th>
              <th scope="col">
                {{ $t('total_price') }}
              </th>
              <th scope="col">
                {{ $t('type_order') }}
              </th>
              <th scope="col">
                {{ $t('status') }}
              </th>
              <th scope="col">
                {{ $t('action') }}
              </th>
            </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
            <tr
              v-for="Order in myOrders"
              :key="Order.id"
              style="height: 3.75rem;"
            >
              <!-- 👉 User -->


              <!-- 👉 Role -->

              <td>

                {{ Order.meal_name }}

              </td>
              <td>

                {{ Order.restaurant_name }}

              </td>
              <td>

                {{ Order.staff_name }}

              </td>
              <td>

                {{ Order.price }}

              </td>
              <td>

                {{ Order.discount }}

              </td>
              <td>

                {{ Order.total_price }}

              </td>
              <td>

                {{ Order.type_order_name }}

              </td>
              <td>

                {{ $t(Order.status) }}

              </td>
              <!-- 👉 Status -->


              <!-- 👉 Actions -->
              <td
                class="text-center"
                style="width: 5rem;"
              >
                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                  :to="{ name: 'customers-apps-order-view-id', params: { id: Order.id } }"
                >
                  <VIcon
                    size="22"
                    icon="tabler-screen-share"
                  />

                </VBtn>




              </td>
            </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!myOrders.length">
            <tr>
              <td
                colspan="7"
                class="text-center"
              >
                {{ $t('No data available') }}
              </td>
            </tr>
            </tfoot>
          </VTable>

          <VDivider/>

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled">
              {{ paginationData }}
            </span>

            <VPagination
              v-model="currentPage"
              size="small"
              :total-visible="5"
              :length="totalPage"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- 👉 Add New User -->
    <DeleteDialog
      v-model:counter="counter"
      v-model:isDialogVisible="isConfirmDialogOpen"
      v-model:id="idClick"
      v-model:base_url="base_url"
      v-model:confirm="handleChildEvent"
      :confirmation-msg="t('Are you sure you want to deactivate your account?')"
    />


  </section>
</template>

<route lang="yaml">
meta:
 layout: default_customer
 action: read
 subject: customer_profile
</route>


<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
