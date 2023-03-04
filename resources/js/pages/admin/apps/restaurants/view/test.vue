<script setup>
import * as demoCode from '@/views/demos/forms/form-validation/demoCodeFormValidation'
</script>

<template>
  <VRow>

    <VCol cols="12">
      <!-- 👉 Validation Types -->
      <AppCardCode
        title="Validation Types"
        :code="demoCode.validationTypes"
      >
        <DemoFormValidationValidationTypes />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
