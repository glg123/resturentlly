<script setup>
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'

import { avatarText } from '@core/utils/formatters'
import { useAdminListStore } from "@/views/apps/admin/useAdminListStore"
import { useI18n } from "vue-i18n"
import axios from "@axios"
import {useThemeConfig} from "@core/composable/useThemeConfig";

const { t } = useI18n()
const userListStore = useAdminListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(1)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])
const admins_active = ref(1)
const admins_count = ref(1)
const admins_not_active = ref(1)
const admins_block = ref(1)
const router = useRouter()
const { isAppRtl } = useThemeConfig()
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
if(isAppRtl.value===true)
{
  axios.defaults.headers.common['Language'] = 'ar'
}
else
{
  axios.defaults.headers.common['Language'] = 'en'
}
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['role'] = 'Admin'
axios.defaults.headers.common['auth'] = 'Bearer ' + token
// 👉 Fetching users
const fetchUsers = () => {
  userListStore.fetchUsers({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    admin_role_id: selectedRole.value,
    perPage: rowPerPage.value,
    page: currentPage.value,
  }).then(response => {
    //console.log(response.data.admins)
    users.value = response.data.admins.data
    admins_count.value = response.data.admins.data.length
    totalPage.value = response.data.admins.last_page
    totalUsers.value = response.data.admins.total
    admins_active.value = response.data.admins_active
    admins_not_active.value = response.data.admins_not_active
    admins_block.value = response.data.admins_block
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchUsers)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 search filters

const roles = ref([])

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
  const firstIndex = users.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = users.value.length + (currentPage.value - 1) * rowPerPage.value

  return ` ${ t("Showing") } ${ firstIndex } ${ t("to") } ${ lastIndex } ${ t("of") } ${ totalUsers.value } ${ t("entries") }`
})

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchUsers()
}

// 👉 List
const userListMeta = [
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

const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'admins_add',
}

const fetchProjectData = () => {


  axios.get('/roles/list', { token })
    .then(response => {

      for (var i=0 ; i< response.data.length;i++)
      {
        console.log(response.data[i].id, 'res')
        console.log(response.data[i].role_name, 'res')
        roles.value[i]={ title: response.data[i].role_name, value: response.data[i].id }
      }
      console.log(roles.value, 'res')

    })


}

watch(router, fetchProjectData, { immediate: true })
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
          <!-- 👉 Filters -->
          <VCardText>
            <VRow>
              <!-- 👉 Select Role -->
              <VCol
                cols="12"
                sm="4"
              >
                <VSelect
                  v-model="selectedRole"
                  :label="$t('Select Role')"
                  :items="roles"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>

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

          <VDivider />

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

            <VSpacer />

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
              <VBtn  v-if="$can(user.action, user.subject)">
                <RouterLink
                  :to="{ name: 'admin-apps-admins-add-add_new'}"
                  class="font-weight-medium user-list-name"
                >
                  {{ $t('AddNew') }}
                </RouterLink>

              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  {{$t('email')}}
                </th>
                <th scope="col">
                  {{$t('role')}}
                </th>
                <th scope="col">
                  {{$t('status')}}
                </th>
                <th scope="col">
                  {{ $t('action') }}
                </th>
              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
                style="height: 3.75rem;"
              >
                <!-- 👉 User -->
                <td>
                  <div class="d-flex align-center">
                    <VAvatar
                      variant="tonal"
                      class="me-3"
                      size="38"
                    >
                      <VImg
                        v-if="user.avatar"
                        :src="user.avatar"
                      />
                      <span v-else>{{ avatarText(user.name) }}</span>
                    </VAvatar>

                    <div class="d-flex flex-column">
                      <h6 class="text-base">
                        <RouterLink
                          :to="{ name: 'admin-apps-admins-view-id', params: { id: user.id } }"
                          class="font-weight-medium user-list-name"
                        >
                          {{ user.name }}
                        </RouterLink>
                      </h6>
                      <span class="text-sm text-disabled">@{{ user.email }}</span>
                    </div>
                  </div>
                </td>

                <!-- 👉 Role -->
                <td>
                  <VAvatar
                    color="secondary"
                    icon="tabler-device-laptop"
                    variant="tonal"
                    size="30"
                    class="me-4"
                  />
                  <span class="text-capitalize text-base">{{ $t(user.role) }}</span>
                </td>


                <!-- 👉 Status -->
                <td>
                  <VChip
                    label
                    :color="resolveUserStatusVariant(user.status)"
                    size="small"
                    class="text-capitalize"
                  >
                    {{ $t(user.status)  }}
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
                    :to="{ name: 'admin-apps-admins-view-id', params: { id: user.id } }"
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
                    :to="{ name: 'admin-apps-admins-view-id', params: { id: user.id } }"
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
            <tfoot v-show="!users.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                 {{$t('No data available')}}
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

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
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addNewUser"
    />


  </section>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: admins_list
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
