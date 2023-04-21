<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'
import axios from "@axios"
import { useI18n } from "vue-i18n"


const adminListStore = useAdminListStore()
const route = useRoute()
const rolesData = ref([])
const PerRolesData = ref([])
const router = useRouter()

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const selectedCheckbox = ref([])

const fetchProjectData = () => {


  axios.get('/roles/'+Number(route.params.id)+'/get', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      PerRolesData.value = response.data
      selectedStatus.value = response.data.status
      for (var i=0 ; i<response.data.role_permissions.abilities.length;i++)
      {
        selectedCheckbox.value.push(response.data.role_permissions.abilities[i].subject)
      }




    })


}

const fetchPermissonData = () => {


  axios.get('/admins/permissions/list', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      rolesData.value = response.data

    })


}

const { t } = useI18n()
const selectedStatus = ref()

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

const refForm = ref()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)

watch(route, fetchProjectData, { immediate: true })
watch(route, fetchPermissonData, { immediate: true })

const sendFrom = () => {


  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('edit/'+Number(route.params.id)+'/roles/permissions', {

        role_name_ar: PerRolesData.value.role_name_ar,
        role_name_en: PerRolesData.value.role_name_en,
        status: selectedStatus.value,
        permissions: selectedCheckbox.value,

        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/permission/list/')
      }).catch(e => {
        console.log(e.response.data.message)

        errors.value = e.response.data.message
        isError.value = true
        loading.value = false
        disabled.value = false
      })
    } else {
      /*  setInterval( () => {
          const el = document.querySelector(".test")

          el.scrollIntoView()
        }, 1000)*/
    }


  })


}
</script>

<template>
  <VRow>
    <VSnackbar location="top" v-model="isTrue">
      {{ $t('Done') }}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          {{ $t('Close') }}
        </VBtn>
      </template>
    </VSnackbar>
    <VSnackbar color="error" location="top" v-model="isError">
      {{ errors }}

      <template #actions>
        <VBtn
          color="success"
          @click="isError = false"

        >
          {{ $t('Close') }}
        </VBtn>
      </template>
    </VSnackbar>


    <VCol cols="12">
      <VCard :title="$t('AddNew')">


        <VCardText class="pt-2">

          <!-- 👉 Form -->
          <VForm ref="refForm" class="mt-6">
            <VRow>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerRolesData.role_name_ar"
                  :label="$t('title_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerRolesData.role_name_en"
                  :label="$t('title_en')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VSelect
                  v-model="selectedStatus"
                  :label="$t('Select Status')"
                  :items="status"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
              <VCol cols="12">
                <VCard :title="$t('roles')">
                  <VCardText class="pt-0">
                    <div class="demo-space-x">
                      <VCheckbox
                        v-for="role in rolesData"
                        :key="role.id"
                        v-model="selectedCheckbox"
                        :label="role.title"
                        :value="role.slug"
                      />
                    </div>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol cols="12">
                <VBtn
                  type="submit"
                  :loading="loading"
                  :disabled="disabled"
                  @click.prevent="sendFrom"
                >{{ $t('Save changes') }}
                </VBtn>
              </VCol>


            </VRow>

          </VForm>
        </VCardText>
      </VCard>
    </VCol>

  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: permissions_edit
</route>
