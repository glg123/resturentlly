<script setup>
import { useRestaurantListStore } from "../useRestaurantListStore"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
let isConfirmDialogOpen = ref(false)
const restaurantListStore = useRestaurantListStore()
const searchQuery = ref('')
const base_url = ref('cities/:id')
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
const restaurants = ref([])
const router = useRouter()

const fetchRests = () => {
  restaurantListStore.fetchRest({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    page: currentPage.value,
  }).then(response => {

    restaurants.value = response.data.data
    totalPage.value = response.data.total
    totalUsers.value = response.data.total

  }).catch(error => {
    console.error(error)
  })
}
const resolveUserStatusVariant = stat => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'

  return 'primary'
}

watchEffect(fetchRests)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
const route = useRoute()

const handleChildEvent = () => {

  console.log('done')

  fetchRests()



}


watch(() => counter.value, () => {
  if(counter.value===10)
  {
    //  alert()
    fetchRests()
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
  const firstIndex = restaurants.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = restaurants.value.length + (currentPage.value - 1) * rowPerPage.value

  return ` ${t("Showing")} ${firstIndex} ${t("to")} ${lastIndex} ${t("of")} ${totalUsers.value} ${t("entries")}`
})

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchRests()
}

const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'restaurants_view',
}

const deleteDialog = id => {
  isConfirmDialogOpen.value = true
  idClick.value = id
}
const status = [
  {
    title: t('block'),
    value: 'block',
  },
  {
    title: t('active'),
    value: 'active',
  },
  {
    title: t('not_active'),
    value: 'not_active',
  },
]
</script>

<template>
  <section>
    <VRow>


      <VCol cols="12">
        <VCard :title="$t('Search Filter')">


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

            </div>
          </VCardText>

          <VDivider/>

          <VTable  class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
            <tr>
              <th scope="col">
                {{ $t('name') }}
              </th>
              <th scope="col">
                {{ $t('owner_name') }}
              </th>
              <th scope="col">
                {{ $t('mobile') }}
              </th>
              <th scope="col">
                {{ $t('website') }}
              </th>
              <th scope="col">
                {{ $t('city_name') }}
              </th>
              <th scope="col">
                {{ $t('state_name') }}
              </th>
              <th scope="col">
                {{ $t('country_name') }}
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
              v-for="restaurant in restaurants"
              :key="restaurant.id"
              style="height: 3.75rem;"
            >


              <td>

                {{ restaurant.name }}

              </td>
              <td>

                {{ restaurant.owner_name }}

              </td>
              <td>

                {{ restaurant.mobile }}

              </td>
              <td>
                <a :href="restaurant.website"> {{ restaurant.website }}</a>


              </td>
              <td>

                {{ restaurant.city_name }}

              </td>
              <td>

                {{ restaurant.state_name }}

              </td>
              <td>

                {{ restaurant.country_name }}

              </td>
              <td>
                <VChip
                  label
                  :color="resolveUserStatusVariant(restaurant.status)"
                  size="small"
                  class="text-capitalize"
                >
                  {{ $t(restaurant.status)  }}
                </VChip>
              </td>

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
                  :to="{ name: 'admin-apps-restaurants-view-id', params: { id: restaurant.id } }"
                >
                  <VIcon
                    size="22"
                    icon="tabler-access-point"
                  />

                </VBtn>




              </td>
            </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!restaurants.length">
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




  </section>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: restaurants_list
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
