<script setup>
import axios from "@axios"
import { useI18n } from "vue-i18n"
import { emailValidator } from "@validators"
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')
const route = useRoute()
const PerManegerData = ref([])
const router = useRouter()

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


axios.defaults.headers.common['type'] = 'User'
axios.defaults.headers.common['role'] = 'user'
axios.defaults.headers.common['auth'] = 'Bearer ' + token

const required = val => {

  if (String(val).trim().length === 0) {
    return t('This field is required')
  } else {
    return true
  }

}



const fetchProjectData = () => {


  axios.get('/client/single/manager/'+Number(route.params.id)+'/branche', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      PerManegerData.value = response.data
      selectedStatus.value = response.data.status





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
                  v-model="PerManegerData.first_name"
                  :label="$t('first_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerManegerData.last_name"
                  :label="$t('last_name')"
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
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="PerManegerData.email"
                  :label="$t('email')"
                  :rules="[required, emailValidator]"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerManegerData.mobile"
                  :rules="[required,mobileValidator]"
                  :label="t('mobile')"
                />
              </VCol>

              <VCol v-if="userData.can_add_emp"
                    md="6"
                    cols="12"
              >
                <VTextField
                  v-model="PerManegerData.count_emp"
                  :label="$t('count_emp')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="PerManegerData.password"
                  :label="$t('password')"
                  type="password"
                  :rules="[required]"
                  autocomplete="on"
                />
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
 layout: default_client
 action: read
 subject: rest_maneger
</route>
