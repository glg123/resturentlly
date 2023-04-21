<script setup>
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'
import { useI18n } from "vue-i18n"
const { t } = useI18n()
const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedType = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const clients = ref([])

// 👉 Fetching users
const fetchClients = () => {
  userListStore.fetchClient({
    q: searchQuery.value,
    status: selectedStatus.value,
    role: selectedRole.value,
    type: selectedType.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    console.log(response.data.data)
    clients.value = response.data.data
    totalPage.value = response.data.totalPage
    totalUsers.value = response.data.totalUsers
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchClients)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 search filters
const roles = [
  {
    title: t('customer'),
    value: 'customer',
  },
  {
    title: t('client'),
    value: 'client',
  },

]

const types = [
  {
    title: t('customer'),
    value: 'customer',
  },
  {
    title: t('client'),
    value: 'client',
  },

]

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


const resolveUserRoleVariant = role => {
  if (role === 'subscriber')
    return {
      color: 'warning',
      icon: 'tabler-user',
    }
  if (role === 'author')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (role === 'maintainer')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }
  if (role === 'editor')
    return {
      color: 'info',
      icon: 'tabler-pencil',
    }
  if (role === 'admin')
    return {
      color: 'secondary',
      icon: 'tabler-device-laptop',
    }

  return {
    color: 'primary',
    icon: 'tabler-user',
  }
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

const isAddNewUserDrawerVisible = ref(false)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = clients.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = clients.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalUsers.value } entries`
})

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchUsers()
}
const user = {
  action: 'read',

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'admins_add',
}
// 👉 List
const userListMeta = [
  {
    icon: 'tabler-user',
    color: 'primary',
    title: 'Session',
    stats: '21,459',
    percentage: +29,
    subtitle: 'Total Users',
  },
  {
    icon: 'tabler-user-plus',
    color: 'error',
    title: 'Paid Users',
    stats: '4,567',
    percentage: +18,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'tabler-user-check',
    color: 'success',
    title: 'Active Users',
    stats: '19,860',
    percentage: -14,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'tabler-user-exclamation',
    color: 'warning',
    title: 'Pending Users',
    stats: '237',
    percentage: +42,
    subtitle: 'Last week analytics',
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


              <VCol
                cols="12"
                sm="4"
              >
                <VSelect
                  v-model="selectedType"
                  :label="$t('Select Client Type')"
                  :items="types"
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

            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
            <tr>
              <th scope="col">
              #
              </th>
              <th scope="col">
                {{$t('full_name')}}
              </th>
              <th scope="col">
                {{$t('email')}}
              </th>
              <th scope="col">
                {{$t('role')}}
              </th>
              <th scope="col">
                {{$t('user_type')}}
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
              v-for="client in clients"
              :key="client.id"
              style="height: 3.75rem;"
            >
              <td>

                {{ client.id }}

              </td>
              <td>

                  {{ client.first_name }}   {{ client.last_name }}

              </td>
              <!-- 👉 User -->
              <td>
                <div class="d-flex align-center">
                  <VAvatar
                    variant="tonal"
                    class="me-3"
                    size="38"
                  >
                    <VImg
                      v-if="client.avatar"
                      :src="client.avatar"
                    />
                    <span v-else>{{ avatarText(client.name) }}</span>
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h6 class="text-base">
                      <RouterLink
                        :to="{ name: 'admin-apps-admins-view-id', params: { id: client.id } }"
                        class="font-weight-medium user-list-name"
                      >
                        {{ client.name }}
                      </RouterLink>
                    </h6>
                    <span class="text-sm text-disabled">@{{ client.email }}</span>
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
                <span class="text-capitalize text-base">{{ $t(client.role) }}</span>
              </td>
              <td>
                <VAvatar
                  color="secondary"
                  icon="tabler-device-laptop"
                  variant="tonal"
                  size="30"
                  class="me-4"
                />
                <span class="text-capitalize text-base">{{ $t(client.type) }}</span>
              </td>

              <!-- 👉 Status -->
              <td>
                <VChip
                  label
                  :color="resolveUserStatusVariant(client.status)"
                  size="small"
                  class="text-capitalize"
                >
                  {{ $t(client.status)  }}
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
                  :to="{ name: 'admin-apps-clients-view-id', params: { id: client.id } }"
                >
                  <VIcon
                    size="22"
                    icon="tabler-info-circle"
                  />

                </VBtn>




              </td>
            </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!clients.length">
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




  </section>
</template>

<route lang="yaml">
meta:
  layout: default_admin
  action: read
  subject: client_list
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
