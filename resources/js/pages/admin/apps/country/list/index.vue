<script setup>
import { useSettingListStore } from "../../cities/useSettingListStore"
import { useI18n } from "vue-i18n"

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
const countries = ref([])
const router = useRouter()

const fetchCountries = () => {
  settingListStore.fetchCountries({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    page: currentPage.value,
  }).then(response => {

    countries.value = response.data.data
    totalPage.value = response.data.total
    totalUsers.value = response.data.total

  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchCountries)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
const route = useRoute()

const handleChildEvent = () => {

  console.log('done')

  fetchCountries()



}


watch(() => counter.value, () => {
  if(counter.value===10)
  {
    //  alert()
    fetchCountries()
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
  const firstIndex = countries.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = countries.value.length + (currentPage.value - 1) * rowPerPage.value

  return ` ${t("Showing")} ${firstIndex} ${t("to")} ${lastIndex} ${t("of")} ${totalUsers.value} ${t("entries")}`
})

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchCountries()
}

const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'countries_add',
}

const deleteDialog = id => {
  isConfirmDialogOpen.value = true
  idClick.value = id
}
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

          <VTable  class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
            <tr>
              <th scope="col">
                {{ $t('name') }}
              </th>
              <th scope="col">
                {{ $t('currency') }}
              </th>
              <th scope="col">
                {{ $t('currency_name') }}
              </th>
              <th scope="col">
                {{ $t('action') }}
              </th>
            </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
            <tr
              v-for="country in countries"
              :key="country.id"
              style="height: 3.75rem;"
            >
              <!-- 👉 User -->


              <!-- 👉 Role -->

              <td>

                {{ country.name }}

              </td>
              <td>

                {{ country.currency }}

              </td>
              <td>

                {{ country.currency_name }}

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
                  :to="{ name: 'admin-apps-cities-view-id', params: { id: country.id } }"
                >
                  <VIcon
                    size="22"
                    icon="tabler-edit"
                  />

                </VBtn>

                <VBtn
                  icon
                  size="x-small"
                  color="default"
                  variant="text"
                  @click="deleteDialog(country.id )"

                >
                  <VIcon
                    size="22"
                    icon="tabler-trash"
                  />
                </VBtn>


              </td>
            </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!countries.length">
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
 layout: default_admin
 action: read
 subject: countries_list
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
