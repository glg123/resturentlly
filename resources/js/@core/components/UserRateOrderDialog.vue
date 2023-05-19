<script setup>
import axios from "@axios"
import {useThemeConfig} from "@core/composable/useThemeConfig"

const route = useRoute()
const router = useRouter()
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  orderId: {
    type: Number,
    required: true,
  },
  orderRestaurantName: {
    type: String,
    required: true,
  },
  orderMealName: {
    type: String,
    required: true,
  },
})
const price_rate = ref(0)
const service_rate = ref(0)
const food_rate = ref(0)
const note = ref('')
const emit = defineEmits(['update:isDialogVisible'])
const {isAppRtl} = useThemeConfig()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const refVForm = ref()
const errors = ref('')
const sendRate = () => {

  loading.value = true
  disabled.value = true
  let token = localStorage.getItem('accessToken')
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Accept'] = 'application/json'
  if (isAppRtl.value === true) {
    axios.defaults.headers.common['Language'] = 'ar'

  } else {
    axios.defaults.headers.common['Language'] = 'en'

  }

  axios.defaults.headers.common['type'] = 'Customer'
  axios.defaults.headers.common['role'] = 'customer'
  axios.defaults.headers.common['auth'] = 'Bearer ' + token
  axios.post('customer/send/rate', {
    price_rate: price_rate.value,
    service_rate: service_rate.value,
    food_rate: food_rate.value,
    note: note.value,
    order_id: props.orderId,
    token,
  })
    .then(r => {

      console.log(r.data)
      isTrue.value = true
      loading.value = false
      disabled.value = false
      dialogModelValueUpdate(false)
      emit('update:counter', 10)

    })
    .catch(e => {
      console.log(e.response.data.message)

      errors.value = e.response.data.message
      isError.value = true
      loading.value = false
      disabled.value = false
    })
}




const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
const required = val => {

  if (String(val).trim().length === 0) {
    return t('This field is required')
  } else {
    return true
  }

}
</script>

<template>
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
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 560"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)"/>

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-5">
          {{ $t('rate_order') }}
        </VCardTitle>

        <p>
          {{ props.orderRestaurantName }} : {{ props.orderMealName }}
        </p>
      </VCardItem>

      <VCardText class="text-center">
        <VRow>
          <VCol cols="5">
            <h3>{{ $t('price_rate') }}</h3>
          </VCol>
          <VCol cols="7">
            <VRating
              v-model="price_rate"
              half-increments
              hover
            />
          </VCol>
          <!-- !SECTION -->
        </VRow>
        <VRow>
          <VCol cols="5">
            <h3>{{ $t('service_rate') }}</h3>
          </VCol>
          <VCol cols="7">
            <VRating
              v-model="service_rate"
              half-increments
              hover
            />
          </VCol>
          <!-- !SECTION -->
        </VRow>
        <VRow>
          <VCol cols="5">
            <h3>{{ $t('food_rate') }}</h3>
          </VCol>
          <VCol cols="7">
            <VRating
              v-model="food_rate"
              half-increments
              hover
            />
          </VCol>
          <!-- !SECTION -->
        </VRow>
      </VCardText>
      <VCardText class="px-15">

        <div class="d-flex justify-space-between flex-wrap">

          <VCardText class="text-center">
            <VTextarea
              v-model="note"
              :label="$t('note')"
              rows="5"
              columns="20"
              :rules="[required]"
            />
          </VCardText>


        </div>
        <VCol
          cols="12"
          class="d-flex flex-wrap justify-center gap-4"
        >
          <VBtn
            color="success"
            variant="tonal"
            @click="sendRate"
          >
            {{ $t('rate_meal_order') }}
          </VBtn>
        </VCol>
      </VCardText>
    </VCard>
  </VDialog>
</template>
