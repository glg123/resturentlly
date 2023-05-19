<script setup>
import { useI18n } from "vue-i18n"
import { useThemeConfig } from "@core/composable/useThemeConfig"
import axios from "@axios"
import VueCookies from "vue-cookies"

import { useAppAbility } from '@/plugins/casl/useAppAbility'
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

axios.defaults.headers.common['type'] = 'User'
axios.defaults.headers.common['role'] = 'user'
axios.defaults.headers.common['auth'] = 'Bearer ' + token
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const errors = ref({})
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()
const props = defineProps({
  confirmationMsg: {
    type: String,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})
const { t } = useI18n()
const emit = defineEmits([
  'update:isDialogVisible',
  'confirm',
])

const updateModelValue = val => {
  emit('update:isDialogVisible', val)
}

const onConfirmation = () => {
  loading.value = true
  disabled.value = true
  let url ='client/cancel/subscribe/plan'
  axios.post(url, {
    token,
  })
    .then(r => {


      isTrue.value = true
      loading.value = false
      disabled.value = false
      const { accessToken, userData, userAbilities } = r.data


      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', accessToken)
      VueCookies.set('auth', accessToken)
      router.replace(route.query.to ? String(route.query.to) : '/dashboards/analytics')

    })
    .catch(e => {
      console.log(e)

      errors.value = e
      isError.value = true
      loading.value = false
      disabled.value = false
    })
  emit('confirm', true)
  updateModelValue(false)
}

const onCancel = () => {
  emit('confirm', false)
  emit('update:isDialogVisible', false)
}
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <VDialog
    max-width="500"
    :model-value="props.isDialogVisible"
    @update:model-value="updateModelValue"
  >
    <VCard class="text-center px-10 py-6">
      <VCardText>
        <VBtn
          icon
          variant="outlined"
          color="warning"
          class="mb-4"
          style="width: 88px; height: 88px; pointer-events: none;"
        >
          <span class="text-5xl">!</span>
        </VBtn>

        <h6 class="text-lg font-weight-medium">
          {{ props.confirmationMsg }}
        </h6>
      </VCardText>

      <VCardActions class="align-center justify-center gap-2">
        <VBtn
          variant="elevated"
          @click="onConfirmation"
        >
          {{t('Confirm')}}
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          {{t('Cancel')}}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
