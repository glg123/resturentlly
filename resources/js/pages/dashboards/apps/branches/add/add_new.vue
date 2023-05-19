<script setup>
import {
  emailValidator,
} from '@validators'
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"
import axios from "@axios"
import { useThemeConfig } from "@core/composable/useThemeConfig"
import {isEmpty} from "@core/utils";
const { isAppRtl } = useThemeConfig()
const route = useRoute()
const router = useRouter()
const rolesData = ref([])
const length = ref([])
const errors = ref({})
const userData = JSON.parse(localStorage.getItem('userData') || 'null')

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

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}
const mobileValidator = value => {
  if (isEmpty(value))
    return true
  if (Array.isArray(value))
    return value.every(val => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(val))) || t('This field must be an integer')

  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(value)) || t('This field must be an integer')
}
const first_name = ref('')
const last_name = ref('')
const count_emp = ref('')
const password = ref('')
const email = ref('')
const mobile = ref('')

const refForm = ref()

const selectedStatus = ref()

const { t } = useI18n()

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
const refInputEl_front = ref()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)


const selectedCheckbox = ref([])

const sendFrom = () => {


  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('client/add/manager/branche', {

        first_name: first_name.value,
        last_name: last_name.value,
        count_emp: count_emp.value?count_emp.value:null,
        password: password.value,
        email: email.value,
        mobile: mobile.value,
        status: selectedStatus.value,


        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/dashboards/apps/branches/list/')
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
                  v-model="first_name"
                  :label="$t('first_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="last_name"
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
                  v-model="email"
                  :label="$t('email')"
                  :rules="[required, emailValidator]"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="mobile"
                  :rules="[required,mobileValidator]"
                  :label="t('mobile')"
                />
              </VCol>

              <VCol v-if="userData.can_add_emp"
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="count_emp"
                  :label="$t('count_emp')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
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
