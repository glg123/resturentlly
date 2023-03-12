<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { useI18n } from "vue-i18n"
import { useRoute } from 'vue-router'
import axios from '@axios'
import {
  requiredValidator,
} from '@validators'

const refInputEl_front = ref()

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
const isUserInfoEditDialogVisible = ref(false)
const required = val => {

  if (String(val).trim().length === 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const refForm = ref()

const router = useRoute()

const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const newPassword = ref('')
const confirmPassword = ref('')
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
        userData.value.avatar = fileReader.result
    }
  }
}

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
const userData = ref(structuredClone(toRaw(props.userData)))



const onFormSubmit = () => {

  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('admins/'+props.userData.id, {

        name: userData.value.name,
        role: userData.value.role,
        email: userData.value.email,
        mobile: userData.value.mobile,
        avatar: userData.value.avatar,
        status: userData.value.status,
        password: userData.value.password,
        token,
      }).then(r => {
        isTrue.value = true
        loading.value = false
        disabled.value = false
        console.log(r.response)

      }).catch(e => {
        const { errors: formErrors } = e.response.data

        isError.value = true
        loading.value = false
        disabled.value = false
        errors.value = formErrors
        console.error(e.response.data)
      })
    } else {
      /*  setInterval( () => {
          const el = document.querySelector(".test")

          el.scrollIntoView()
        }, 1000)*/
    }


  })



}
const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))
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
      icon: 'tabler-server-2',
    }
  
  return {
    color: 'primary',
    icon: 'tabler-user',
  }
}
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
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="props.userData.avatar"
              :src="props.userData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >
              {{ avatarText(props.userData.name) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.userData.name }}
          </h6>

          <!-- 👉 Role chip -->
          <VChip
            label
            :color="resolveUserRoleVariant(props.userData.role).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{$t(props.userData.role)}}
          </VChip>
        </VCardText>


        <VDivider />
        <VCardItem class="text-center">
          <VCardTitle class="text-h5 mb-3">
            {{$t('Edit User Information')}}
          </VCardTitle>

        </VCardItem>

        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            class="mt-6"
            @submit.prevent="onFormSubmit"
          >
            <VRow>
              <VCol cols="12">
                <VCard :title="$t('avatar')">
                  <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar
                      rounded
                      size="100"
                      class="me-6"
                      :image="userData.avatar "
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
                </VCard>
              </VCol>
              <VCol cols="12">
                <VCard :title="$t('basic_information')">
                  <VForm>
                    <VCardText class="pt-0">
                      <VRow>
                        <VCol
                          cols="12"
                          md="6"
                        >
                          <!-- 👉 new password -->
                          <VTextField
                            v-model="userData.name"
                            :label="t('name')"
                            :rules="[required]"
                          />
                        </VCol>

                        <VCol
                          cols="12"
                          md="6"
                        >
                          <!-- 👉 confirm password -->
                          <VTextField
                            v-model="userData.email"
                            :label="$t('email')"
                            :rules="[required]"
                          />
                        </VCol>
                      </VRow>
                      <VRow>
                        <VCol
                          cols="12"
                          md="6"
                        >
                          <!-- 👉 new password -->
                          <VSelect
                            v-model="userData.status"
                            chips
                            :label="$t('status')"
                            :rules="[required]"
                            :items="['active', 'not_active', 'block']"
                          />
                        </VCol>

                        <VCol
                          cols="12"
                          md="6"
                        >
                          <!-- 👉 confirm password -->
                          <VTextField
                            v-model="userData.mobile"
                            :label="$t('mobile')"
                            :rules="[required]"
                          />
                        </VCol>
                      </VRow>
                    </VCardText>

                    <!-- 👉 Password Requirements -->


                    <!-- 👉 Action Buttons -->

                  </VForm>
                </VCard>
              </VCol>


              <VCol cols="12">
                <VCard :title="$t('Change_Password')">
                  <VForm>
                    <VCardText class="pt-0">

                      <VRow>
                        <VCol
                          cols="12"
                          md="6"
                        >
                          <!-- 👉 new password -->
                          <VTextField
                            v-model="newPassword"
                            :type="isNewPasswordVisible ? 'text' : 'password'"
                            :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                            label="New Password"
                            @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                          />
                        </VCol>


                      </VRow>
                    </VCardText>

                    <!-- 👉 Password Requirements -->


                    <!-- 👉 Action Buttons -->

                  </VForm>
                </VCard>
              </VCol>





              <!-- 👉 Switch -->

              <!-- 👉 Submit and Cancel -->
              <VCol
                cols="12"
                class="d-flex flex-wrap justify-center gap-4"
              >
                <VBtn
                  type="submit"
                  :loading="loading"
                  :disabled="disabled"
                >{{ $t('Save changes') }}
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="onFormReset"
                >
                  {{$t('Cancel')}}

                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

  </VRow>



  <!-- 👉 Upgrade plan dialog -->
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>


