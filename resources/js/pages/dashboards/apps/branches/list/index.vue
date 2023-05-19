<script setup>
import { useI18n } from "vue-i18n"
import { useClientListStore } from "@/views/dashboards/useClientListStore"

const { t } = useI18n()
let isConfirmDialogOpen = ref(false)
const useListStore = useClientListStore()
const searchQuery = ref('')
const base_url = ref('delete/:id/roles/permissions')
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
const branches = ref([])
const myPlan = ref([])
const router = useRouter()
// 👉 Fetching users
const fetchBranches = () => {
  useListStore.getMyBranches({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    page: currentPage.value,
  }).then(response => {
    //console.log(response.data.admins)
    branches.value = response.data.data
    totalPage.value = response.data.total
    totalUsers.value = response.data.total

  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchBranches)

const MyPlanData = () => {
  useListStore.getMyPlan().then(response => {
    //console.log(response.data.admins)
    myPlan.value = response.data


  }).catch(error => {
    console.error(error)
  })
}

watchEffect(MyPlanData)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
const route = useRoute()

const handleChildEvent = () => {



  fetchBranches()



}


watch(() => counter.value, () => {
  if(counter.value===10)
  {
  //  alert()
    fetchBranches()
  }
  console.log(
    "Watch props.selected function called with args:",
    counter.value,

  )
})
const status = [
  {
    title: t('active'),
    value: 'active',
  },
  {
    title: t('not_active'),
    value: 'not_active',
  },
]


const resolveUserStatusVariant = stat => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'

  return 'primary'
}

const isAddNewUserDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = branches.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = branches.value.length + (currentPage.value - 1) * rowPerPage.value

  return ` ${t("Showing")} ${firstIndex} ${t("to")} ${lastIndex} ${t("of")} ${totalUsers.value} ${t("entries")}`
})

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchRoles()
}

const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject:  'rest_maneger',
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
          <!-- 👉 Filters -->
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
              <VBtn v-if="$can(user.action, user.subject) && myPlan.count_emp_remain>0">

                <RouterLink
                  :to="{ name: 'dashboards-apps-branches-add-add_new'}"
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
                {{ $t('staff_name') }}
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
              v-for="branche in branches"
              :key="branche.id"
              style="height: 3.75rem;"
            >
              <!-- 👉 User -->


              <!-- 👉 Role -->

              <td>

                {{ branche.first_name +' '+ branche.last_name }}

              </td>

              <!-- 👉 Status -->
              <td>
                <VChip
                  label
                  :color="resolveUserStatusVariant(branche.status)"
                  size="small"
                  class="text-capitalize"
                >
                  {{ $t(branche.status) }}
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
                  :to="{ name: 'dashboards-apps-branches-view-id', params: { id: branche.id } }"
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
                  @click="deleteDialog(branche.id )"

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
            <tfoot v-show="!branches.length">
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
 layout: default_client
 action: read
 subject: rest_maneger
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
