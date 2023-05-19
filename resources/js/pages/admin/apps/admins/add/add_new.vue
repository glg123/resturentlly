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
const route = useRoute()
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
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}
const errors = ref('')
const sendFrom = () => {



  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('add/admins', {

        name: Full_name.value,
        mobile: mobile.value,
        password: password.value,
        email: email.value,
        admin_role_id: selectedRole.value,
        status: selectedStatus.value,
        avatar: avatar.value,
        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/admins/list/')
      }).catch(e => {
        console.log(e.response.data.message)

        errors.value = e.response.data.message
        isError.value = true
        loading.value = false
        disabled.value = false
      })
    } else {

    }


  })


}

const Full_name = ref('')
const mobile = ref('')
const matchRegularEx = ref('')
const password = ref('')
const repeatPassword = ref('')
const email = ref('')
const refForm = ref()
const selectedRole = ref()
const selectedStatus = ref()
const avatar = ref()
const { t } = useI18n()
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
const refInputEl_front = ref()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const changeSliderFont = file_front => {


  const fileReader = new FileReader()
  const { files } = file_front.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        avatar.value = fileReader.result
    }
  }
}

const fetchProjectData = () => {


  axios.get('/roles/select', { token })
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
  <VRow>
    <VSnackbar location="top" v-model="isTrue">
      {{$t('Done')}}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          {{$t('Close')}}
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
          {{$t('Close')}}
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
                md="12"
                cols="12"
              >
              <VCardText class="d-flex">
                <!-- 👉 Avatar -->
                <VAvatar
                  rounded
                  size="100"
                  class="me-6"
                  :image="avatar"
                />

                <!-- 👉 Upload Photo -->
                <form
                  ref="refForm_front"
                  class="d-flex flex-column justify-center gap-4"
                >
                  <div class="d-flex flex-wrap gap-2">
                    <VBtn
                      color="primary"
                      @click="refInputEl_front?.click()"
                    >
                      <VIcon
                        icon="tabler-cloud-upload"
                        class="d-sm-none"
                      />
                      <span class="d-none d-sm-block">{{ $t('slider_back_img') }}</span>
                    </VBtn>

                    <input
                      ref="refInputEl_front"
                      type="file"
                      name="file_back"
                      accept=".jpeg,.png,.jpg,GIF"
                      hidden
                      @input="changeSliderFont"
                    >


                  </div>

                  <p class="text-body-1 mb-0">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </form>
              </VCardText>
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="Full_name"
                  :label="$t('Full_name')"
                  :rules="[required]"
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
                <VSelect
                  v-model="selectedRole"
                  :label="$t('Select Role')"
                  :items="roles"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>




              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="mobile"
                  :label="$t('mobile')"
                  :rules="[required, regexValidator(matchRegularEx, '^([0-9]+)$')]"
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
                  v-model="password"
                  :label="$t('password')"
                  type="password"
                  :rules="[required]"
                  autocomplete="on"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="repeatPassword"
                  :label="$t('password_confirm')"
                  type="password"
                  :rules="[required, confirmedValidator(repeatPassword, password)]"
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
 layout: default_admin
 action: read
 subject: admins_add
</route>
