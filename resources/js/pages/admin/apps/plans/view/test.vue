<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"
import axios from "@axios"

const adminListStore = useAdminListStore()
const route = useRoute()
const userData = ref()

const fetchAboutData = () => {
  adminListStore.getSingleRole(Number(route.params.id)).then(response => {
    userData.value = response.data
  })
}

watch(route, fetchAboutData, { immediate: true })
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

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

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
                  v-model="userData.role_name_ar"
                  :label="$t('title_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="userData.role_name_en"
                  :label="$t('title_en')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VSelect
                  v-model="userData.status"
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
</route>
