<script setup>
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"
import axios from "@axios"
import {useThemeConfig} from "@core/composable/useThemeConfig";
const { isAppRtl } = useThemeConfig()
const route = useRoute()
const router = useRouter()
const rolesData = ref([])
const length = ref([])
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['type'] = 'Customer'
axios.defaults.headers.common['role'] = 'customer'
axios.defaults.headers.common['auth'] = 'Bearer ' + token
if(isAppRtl.value===true)
{
  axios.defaults.headers.common['Language'] = 'ar'
}
else
{
  axios.defaults.headers.common['Language'] = 'en'
}
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const fetchProjectData = () => {


  axios.get('/admins/permissions/list', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      rolesData.value = response.data

    })


}

watch(router, fetchProjectData, { immediate: true })


const title_ar = ref('')
const title_en = ref('')

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


const selectedCheckbox = ref(['analytics'])

const sendFrom = () => {

  console.log(selectedCheckbox.value,'ddd')
  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('roles/permissions', {

        role_name_en: title_ar.value,
        role_name_ar: title_en.value,
        status: selectedStatus.value,
        permissions: selectedCheckbox.value,

        token,
      })
        .then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/permission/list/')
      })
        .catch(e => {
        console.log(e.response.data.message)

        errors.value = e.response.data.message
        isError.value = true
        loading.value = false
        disabled.value = false
      })
    }
    else {
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
                  v-model="title_ar"
                  :label="$t('title_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="title_en"
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
 subject: permissions_add
</route>
