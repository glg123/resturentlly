<script setup>
const props = defineProps({

  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  planId: {
    type: Number,
    required: true,
  },


})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

const number = ref('')
const name = ref('')
const expiry = ref('')
const cvv = ref('')



const formSubmit = () => {

}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 600"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-15">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 font-weight-medium mb-4">
        Add New Card
        </VCardTitle>
        <p class="mb-0">
         Add your saved card details
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Card Number -->
            <VCol cols="12">
            <VTextField
              v-model="number"
              label="Card Number"
              type="number"
            />
          </VCol>

            <!-- 👉 Card Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Name"
              />
            </VCol>

            <!-- 👉 Card Expiry -->
            <VCol
              cols="6"
              md="3"
            >
              <VTextField
                v-model="expiry"
                label="Expiry Date"
              />
            </VCol>

            <!-- 👉 Card CVV -->
            <VCol
              cols="6"
              md="3"
            >
              <VTextField
                v-model="cvv"
                type="password"
                label="CVV Code"
              />
            </VCol>



            <!-- 👉 Card actions -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:isDialogVisible', false)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
