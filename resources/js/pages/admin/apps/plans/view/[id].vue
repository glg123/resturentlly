<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'
import axios from "@axios"
import { useI18n } from "vue-i18n"


const adminListStore = useAdminListStore()
const route = useRoute()
const rolesData = ref([])
const PerPlanData = ref([])
const router = useRouter()

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
const selectedType = ref()

const fetchPlanData = () => {


  axios.get('/single/'+Number(route.params.id)+'/plan', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      PerPlanData.value = response.data
      selectedStatus.value = response.data.status
      selectedType.value = response.data.type


    })


}


const { t } = useI18n()
const selectedStatus = ref()
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
watch(route, fetchPlanData, { immediate: true })
const type = [
  {
    title: t('free'),
    value: 'free',
  },
  {
    title: t('paid'),
    value: 'paid',
  },
]
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)

const refInputEl_logo = ref()

const changeLogo = logo_file => {


  const fileReader = new FileReader()
  const { files } = logo_file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        PerPlanData.logo.value = fileReader.result
    }
  }
}
const sendFrom = () => {

  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('plan/'+Number(route.params.id), {
        name_en: PerPlanData.value.name_en,
        name_ar: PerPlanData.value.name_ar,
        price: PerPlanData.value.price,
        count_emp: PerPlanData.value.count_emp,
        count_branch: PerPlanData.value.count_branch,
        count_interval: PerPlanData.value.count_interval,
        logo: PerPlanData.value.logo,
        status: selectedStatus.value,
        type: selectedType.value,
        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/plans/list/')
      }).catch(e => {
        console.log(e.response.data.message)

        errors.value = e.response.data.message
        isError.value = true
        loading.value = false
        disabled.value = false
      })
    } else {
      /*  setInterval( () => {
          const el = document.querySelector(".test")

          el.scrollIntoView()
        }, 1000)*/
    }


  })


}
const refForm = ref()
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
                md="12"
                cols="12"
              >
                <VCardText class="d-flex">
                  <!-- 👉 Avatar -->
                  <VAvatar
                    rounded
                    size="100"
                    class="me-6"
                    :image="PerPlanData.logo"
                  />

                  <!-- 👉 Upload Photo -->
                  <form
                    ref="refForm_front"
                    class="d-flex flex-column justify-center gap-4"
                  >
                    <div class="d-flex flex-wrap gap-2">
                      <VBtn
                        color="primary"
                        @click="refInputEl_logo?.click()"
                      >
                        <VIcon
                          icon="tabler-cloud-upload"
                          class="d-sm-none"
                        />
                        <span class="d-none d-sm-block">{{ $t('logo') }}</span>
                      </VBtn>

                      <input
                        ref="refInputEl_logo"
                        type="file"
                        name="file_back"
                        accept=".jpeg,.png,.jpg,GIF"
                        hidden
                        @input="changeLogo"
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
                  v-model="PerPlanData.name_ar"
                  :label="$t('name_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerPlanData.name_en"
                  :label="$t('name_en')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerPlanData.price"
                  :label="$t('price')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerPlanData.count_emp"
                  :label="$t('count_emp')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerPlanData.count_interval"
                  :label="$t('count_interval')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PerPlanData.count_branch"
                  :label="$t('count_branch')"
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

              <VCol
                md="6"
                cols="12"
              >
                <VSelect
                  v-model="selectedType"
                  :label="$t('Select Type')"
                  :items="type"
                  clearable
                  clear-icon="tabler-x"
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
 subject: plans_edit
</route>
