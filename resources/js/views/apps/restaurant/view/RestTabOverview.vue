<script setup>
import UserInvoiceTable from './RestInvoiceTable.vue'

// Images
import avatar2 from '@images/avatars/avatar-2.png'
import axios from "@axios"
import { useThemeConfig } from "@core/composable/useThemeConfig";

const props = defineProps({
  restId: {
    type: Number,
    required: true,
  },
})

const projects=ref([])

const resolveUserProgressVariant = progress => {
  if (progress <= 25)
    return 'error'
  if (progress > 25 && progress <= 50)
    return 'warning'
  if (progress > 50 && progress <= 75)
    return 'primary'
  if (progress > 75 && progress <= 100)
    return 'success'
  
  return 'secondary'
}
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
const router = useRouter()

const fetchProjectData = () => {


  axios.get('single/'+props.restId+'/restaurant', { token })
    .then(response => {
      for (var i = 0; i < response.data.branch.length; i++) {
        projects.value[i] = {
          logo: response.data.branch[i].avatar,
          name: response.data.branch[i].name,
          Rating: response.data.branch[i].total_rate,
          count_emp: response.data.branch[i].restaurant_statistic.count_emp,
        }
      }

      console.log(projects.value, 'res')

    })


}

watch(router, fetchProjectData, { immediate: true })
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard :title="$t('Branches')">
        <VDivider />
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th scope="col">
                {{ $t('rest_name') }}
              </th>
              <th scope="col">
                {{ $t('Rating') }}
              </th>
              <th scope="col">
                {{ $t('count_emp') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="project in projects"
              :key="project.name"
              style="height: 3.75rem;"
            >
              <td>
                <div class="d-flex align-center">
                  <VAvatar
                    :size="38"
                    class="me-3"
                    :image="project.logo"
                  />
                  <div>
                    <p class="text-base mb-0">
                      {{ project.name }}
                    </p>
                    <p class="text-sm text-disabled mb-0">
                      {{ project.project }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                {{ project.Rating }}
              </td>
              <td>
                <span>{{ project.count_emp }}%</span>
                <VProgressLinear
                  :height="8"
                  :model-value="project.count_emp"
                  rounded
                  :color="resolveUserProgressVariant(project.count_emp)"
                />
              </td>

            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>

  </VRow>
</template>
