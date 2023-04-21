<script setup>
import {useI18n} from "vue-i18n"
import {useRoute} from "vue-router"
import axios from "@axios"

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token

const route = useRoute()
const router = useRouter()
const props = defineProps({
  confirmationMsg: {
    type: String,
    required: true,
  },
  base_url: {
    type: String,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
const {t} = useI18n()
const emit = defineEmits([
  'update:isDialogVisible',
  'confirm',
  'onConfirmation',
  'update:counter',
])

const updateModelValue = val => {
  emit('update:isDialogVisible', val)
}

const onConfirmation = () => {
  emit('confirm', true)
  emit('renderComponent', true)
  console.log(props.base_url,props.id)
  let url=''
  url=props.base_url.replace(':id',props.id)
  console.log(url,'url')
  updateModelValue(false)

  axios.post(url, {
    token,
  })
    .then(r => {

      console.log(r.data)
      emit('update:counter', 10)

      //    window.location.reload()
      //   return   router.replace('/admin/apps/permission/list/')
      //  router.replace(route.query.to ? String(route.query.to) : '/admin/apps/permission/list/')
    })
    .catch(e => {
      console.log(e.response.data.message)
      errors.value = e.response.data.message

    })
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
          {{ t('Confirm') }}
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          {{ t('Cancel') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
