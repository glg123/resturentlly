<script setup>
import { useRoute } from 'vue-router'
import DialogCloseBtn from "@core/components/DialogCloseBtn.vue"
import axios from '@axios'
import {
  requiredValidator,
} from '@validators'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:modelValue',
  'submit',
  'update:isDialogVisible',
])


const refInputEl_front = ref()

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

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormSubmit = () => {

  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('admins/'+props.userData.id, {

        name: userData.name,
        role: userData.role,
        email: userData.email,
        mobile: userData.value.mobile,
        avatar: userData.value.avatar,
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





  emit('update:modelValue', false)
  emit('submit', userData.value)


}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 700"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />
    <VSnackbar location="top" v-model="isTrue">
      {{$t('Done')}}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          Close
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
          Close
        </VBtn>
      </template>
    </VSnackbar>
    <VCard class="pa-sm-14 pa-5">
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
                          v-model="userData.name.split(' ')[0]"
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
                          multiple
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

                      <VCol
                        cols="12"
                        md="6"
                      >
                        <!-- 👉 confirm password -->
                        <VTextField
                          v-model="confirmPassword"
                          :type="isConfirmPasswordVisible ? 'text' : 'password'"
                          :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                          label="Confirm New Password"
                          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
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
  </VDialog>
</template>
