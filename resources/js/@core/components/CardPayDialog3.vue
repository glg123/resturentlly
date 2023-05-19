<script setup>
import { onBeforeMount } from "vue"
import axios from "@axios"
import { useThemeConfig } from "@core/composable/useThemeConfig"
import { useI18n } from "vue-i18n"
import VueCookies from "vue-cookies"
import {useAppAbility} from "@/plugins/casl/useAppAbility";

const { isAppRtl } = useThemeConfig()
const props = defineProps({

  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  planId: {
    type: Number,
    required: true,
  },
  upgrade: {
    type: Number,
    required: true,
  },

})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
onBeforeMount(() => {
  expirationDate()
})
const number = ref('')
const name = ref('')
const expiry = ref('')
const years = ref([])
const monthSelection = ref('')
const yearSelection = ref('')
const cardNumber = ref('')
const cardVadid = ref('')
const cardType = ref('')
const cvv = ref('')
const btnClassName = ref('')
const cardHolder = ref('')
const refForm = ref()
const regx = ref(
  [
    {name: 'Visa', logo: 'https://seeklogo.com/images/V/visa-logo-CF29426B98-seeklogo.com.png', re: '^4'},
    {
      name: 'Hipercard',
      logo: 'https://cdn.worldvectorlogo.com/logos/hipercard.svg',
      re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/
    },
    {
      name: 'MasterCard',
      logo: 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-novo-3.png',
      re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/
    },
    {
      name: 'Discover',
      logo: 'https://i.pinimg.com/originals/b3/d7/85/b3d7853a11dcc8c424866915ddd4d3e3.png',
      re: /^(6011|65|64[4-9]|622)/
    },
    {
      name: 'Elo',
      logo: 'https://seeklogo.com/images/E/elo-logo-0B17407ECC-seeklogo.com.png',
      re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/
    },
    {
      name: 'American Express',
      logo: 'https://ccard-generator.com/assets/images/cardmedium/american-express.png',
      re: /^3[47]\d{13,14}$/
    },
  ],
)
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const errors = ref({})
const timeToExpire = ref(9)
const ability = useAppAbility()
const Months = ref([
  {title: '0' + 1},
  {title: '0' + 2},
  {title: '0' + 3},
  {title: '0' + 4},
  {title: '0' + 5},
  {title: '0' + 6},
  {title: '0' + 7},
  {title: '0' + 8},
  {title: '0' + 9},
  {title: 10},
  {title: 11},
  {title: 12},
])

const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const sendFrom = () => {
  let token = localStorage.getItem('accessToken')
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Accept'] = 'application/json'
  if (isAppRtl.value === true) {
    axios.defaults.headers.common['Language'] = 'ar'
  } else {
    axios.defaults.headers.common['Language'] = 'en'
  }


  axios.defaults.headers.common['type'] = 'User'
  axios.defaults.headers.common['role'] = 'user'
  axios.defaults.headers.common['auth'] = 'Bearer ' + token
  refForm.value?.validate().then(({ valid: isValid }) => {

    if (isValid) {
      loading.value = true
      disabled.value = true
      let url =props.upgrade==0?'client/subscribe/plan':'client/upgrade/subscribe/plan'
      axios.post(url, {

        cardNumber: cardNumber.value,
        cardHolder: cardHolder.value,
        monthSelection: monthSelection.value,
        yearSelection: yearSelection.value,
        cvv: cvv.value,
        plan_id: props.planId,
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
    } else {
      /*  setInterval( () => {
          const el = document.querySelector(".test")

          el.scrollIntoView()
        }, 1000)*/
    }


  })
}
const inputFormat = () => {
  let text = cardNumber.value.split(" ").join("")

  cardVadid.value = text
  if (text.length > 0) {

    text = text.match(new RegExp(/.{1,4}/, 'g')).join(" ")
      .replace(new RegExp(/[^\d]/, 'ig'), " ")
  }

  cardNumber.value = text

  GetCardType(cardVadid.value)

}

const expirationDate = () => {

  let yearNow = new Date().getFullYear()
  for (let i = yearNow; i < yearNow + timeToExpire.value; i++) {
    years.value.push({title: i})
  }

}


const validCreditCard = value => {

  let inputValidate = document.getElementById('cardNumber')
  let numCheck = 0,
    bEven = false

  value = value.toString().replace(new RegExp(/\D/g, ""))
  for (let n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n),
      digit = parseInt(cDigit, 10)

    if (bEven && (digit *= 2) > 9) digit -= 9
    numCheck += digit
    bEven = !bEven
  }
  let len = value.length
  if (numCheck % 10 === 0 && len === 16 && cardType.value) {
    inputValidate.classList.remove('notValid')
    inputValidate.classList.add('valid')
  } else if (!numCheck % 10 === 0 && len === 16) {
    inputValidate.classList.remove('valid')
    inputValidate.classList.add('notValid')
  } else {
    inputValidate.classList.remove('valid')
    inputValidate.classList.remove('notValid')
  }


}


const GetCardType = number => {

  regx.value.forEach(item => {
    if (number.match(item.re) != null) {
      cardType.value = item.logo
      cClass.value = item.name.toLowerCase()
    } else if (!number) {
      cardType.value = ''
      cClass.value = ''
    }
  })

  validCreditCard(number)

}

const mouseDw = () => {

  btnClassName.value = 'btn__active'

}

const mouseUp = () => {

  btnClassName.value = ''

}

const blr = () => {

  // let cr = document.getElementsByClassName('card--credit__card')[0]
  let c2 = document.getElementsByClassName('back')[0]
  // cr.classList.remove('cvv-active')
  c2.classList.remove('cvv-active2')

}

const fcs = () => {


  // let cr = document.getElementsByClassName('card--credit__card')[0]
  let c2 = document.getElementsByClassName('back')[0]
  // cr.classList.add('cvv-active')
  c2.classList.add('cvv-active2')

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
    <DialogCloseBtn @click="dialogModelValueUpdate(false)"/>

    <VCard class="pa-5 pa-sm-15">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <div class="card--credit__card">
          <div class="front">
            <div class="Cheader">
              <div class="card__logo">
                <img v-bind:class='cClass' :src="cardType" alt="">
              </div>
              <div class="card__chip">
                <svg x="0px" y="0px" viewBox="0 0 100 125">
                  <g transform="translate(0,-952.36218)">
                    <path
                      d="M 18,18 C 11.869627,18 7,23.41809 7,30 l 0,40 c 0,6.5819 4.869627,12 11,12 21.333333,0 42.666667,0 64,0 6.130373,0 11,-5.4181 11,-12 L 93,30 C 93,23.41809 88.130373,18 82,18 60.666667,18 39.333333,18 18,18 z m 0,2 23.46875,0 C 37.589245,22.564948 35,27.361832 35,33 l 0,4.6875 C 34.069867,37.259411 33.060307,37 32,37 L 9,37 9,30 c 0,-5.60609 4.050373,-10 9,-10 z m 30,0 4,0 c 6.043676,0 11,5.47378 11,13 0,2.009661 0,4.023816 0,6.03125 -0.251164,0.237363 -0.495555,0.475252 -0.71875,0.75 C 60.845717,41.54836 60,44.04215 60,47 l 0,5 c 0,2.9578 0.845717,5.4204 2.28125,7.1875 C 62.508873,59.467697 62.743321,59.757384 63,60 l 0,7 c 0,7.5263 -4.956311,13 -11,13 l -4,0 C 41.956311,80 37,74.5263 37,67 l 0,-7 c 0.256679,-0.242616 0.491127,-0.532303 0.71875,-0.8125 C 39.154283,57.4204 40,54.9578 40,52 l 0,-5 C 40,44.04215 39.154283,41.54836 37.71875,39.78125 37.491127,39.501051 37.256679,39.241295 37,39 l 0,-6 C 37,25.47378 41.956324,20 48,20 z M 58.53125,20 82,20 c 4.949627,0 9,4.39391 9,10 l 0,7 -23,0 c -1.060307,0 -2.069867,0.259411 -3,0.6875 L 65,33 C 65,27.361832 62.410755,22.564948 58.53125,20 z M 9,39 32,39 c 1.641597,0 3.092532,0.68336 4.1875,2.03125 C 37.282468,42.37914 38,44.41785 38,47 l 0,5 c 0,2.5822 -0.717532,4.5896 -1.8125,5.9375 C 35.092532,59.2854 33.641597,60 32,60 L 9,60 z m 59,0 23,0 0,21 -23,0 C 66.358403,60 64.907468,59.2854 63.8125,57.9375 62.717532,56.5896 62,54.5822 62,52 l 0,-5 c 0,-2.58215 0.717532,-4.62086 1.8125,-5.96875 C 64.907468,39.68336 66.358403,39 68,39 z M 35,61.34375 35,67 c 0,5.625803 2.572319,10.430848 6.4375,13 L 18,80 C 13.050373,80 9,75.6061 9,70 l 0,-8 23,0 c 1.060307,0 2.069867,-0.220772 3,-0.65625 z m 30,0 C 65.930133,61.779228 66.939693,62 68,62 l 23,0 0,8 c 0,5.6061 -4.050373,10 -9,10 L 58.5625,80 C 62.427681,77.430848 65,72.625803 65,67 z"
                      transform="translate(0,952.36218)"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="Cbody">
              <p>{{ cardNumber }}</p>
            </div>
            <div class="Cfooter">
              <div class="name">
                <span>{{t('CARDHOLDER')}}</span>

                <p>{{ cardHolder }}</p>
              </div>
              <div class="expiration__data">
                <span>{{t('EXPIRES')}}</span>
                <p v-if='monthSelection'>{{ monthSelection }} / {{ yearSelection }}</p>

              </div>
            </div>
          </div>
          <div class="back">
            <div class="strip"></div>
            <div class="cvv-container">
              <p>{{ t('cvv') }}: {{ cvv }}</p>
              <div class="cvv-strip"></div>
            </div>
          </div>
        </div>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm ref="refForm">
          <VRow>
            <!-- 👉 Card Number -->
            <VCol cols="12">
              <VTextField
                v-model="cardNumber"
                label="Card Number"
                type="text"
                maxlength="19"
                id="cardNumber"
                :rules="[required]"
                v-on:keyup='inputFormat()'
              />
            </VCol>

            <!-- 👉 Card Name -->
            <VCol
              cols="12"
            >
              <VTextField
                v-model="cardHolder"
                label="Card Name"
                id="cardName"
                :rules="[required]"
                maxlength="25"
              />
            </VCol>

            <!-- 👉 Card Expiry -->

            <VCol
              md="6"
              cols="12"
            >
              <VSelect
                v-model="monthSelection"
                :label="$t('Month')"
                :items="Months"
                :rules="[required]"
                name="expirationDate__month"
                clear-icon="tabler-x"
              />
            </VCol>

            <VCol
              md="6"
              cols="3"
            >
              <VSelect
                v-model="yearSelection"
                :label="$t('Year')"
                :items="years"
                :rules="[required]"
                name="expirationDate__year"
                clear-icon="tabler-x"
              />
            </VCol>
            <!-- 👉 Card CVV -->
            <VCol
              cols="6"
              md="3"
            >
              <VTextField
                v-model='cvv'
                type="text"
                maxlength="4"
                id="cvvInput"
                @focus="fcs()"
                @blur="blr()"
                :rules="[required]"
                label="CVV Code"
              />
            </VCol>


            <!-- 👉 Card actions -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                type="submit"
                :loading="loading"
                :disabled="disabled"
                @click.prevent="sendFrom"
                @mousedown='mouseDw'
                @mouseup='mouseUp'
                :class='btnClassName'

              >
                {{ $t('subscribe') }}
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

<style>
.btn__active {
  bottom: 6%;
}

.cvv-active {
  transform: rotateY(180deg);
}

.cvv-active2 {
  transform: rotateY(0deg) !important;
}

.card--credit__card {
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtX-QkYwDKEXw_jriWgI5vplXUadOusPHRitOZKZCfBqJqK7IU");
  background-size: cover;
  position: relative;
  z-index: 2;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.front {
  width: 350px;
  height: 200px;
}

.Cheader {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row-reverse;
}

.card__chip {
  width: 55px;
  height: 40px;
  background: #D4AF37;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-left: 5px;
  margin-top: 5px;
}

.card__chip svg {
  width: 58px;
  height: 80px;
  position: relative;
  top: 7px;
}

.Cbody {
  width: 100%;
  height: 33px;
  position: absolute;
  bottom: 40%;
  display: flex;
  align-items: center;
}

.Cbody p {
  font-size: 25px;
  margin-left: 8%;
  color: white;
}

.Cfooter {
  width: 95%;
  height: 33px;
  position: absolute;
  bottom: 6%;
  margin-left: 5px;
  display: flex;
  align-items: center;
}

.Cfooter .name {
  width: 70%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.name p {
  position: absolute;
  left: 0;
  top: 0;
}

.name span {
  font-size: 10px;
  position: absolute;
  left: 0;
  top: -15px;
}

.expiration__data {
  width: 30%;
  height: 100%;
  color: white;
}

.expiration__data p {
  position: absolute;
  right: 0;
  top: 0;
}

.expiration__data span {
  font-size: 10px;
  position: absolute;
  right: 7px;
  top: -15px;
}

.valid {
  border-color: #4BB54380;
  box-shadow: 0 0 2px #4BB54380;
  background: #4BB54310;
}

.valid:focus {
  border-color: #4bb54310;
  box-shadow: 0 0 2px #4BB543;
}

.notValid {
  border-color: #D8000C;
  box-shadow: 0 0 2px #D8000C;
  background: #d800bb10;
}

.notValid:focus {
  border-color: #D8000C;
  box-shadow: 0 0 2px #D8000C;
  background: #d800bb10;
}

.front {
  width: 350px;
  height: 200px;
}

.front,
.back {
  position: absolute;
  backface-visibility: hidden;
}

.back {
  width: 350px;
  height: 200px;
  color: white;
  transform: rotateY(180deg);
  border-radius: 10px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtX-QkYwDKEXw_jriWgI5vplXUadOusPHRitOZKZCfBqJqK7IU");
  background-size: cover;
  z-index: 2;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.strip {
  width: 100%;
  height: 40px;
  background: linear-gradient(135deg, #404040, #1a1a1a);
  position: relative;
  top: 25px;
}

.cvv-container {
  width: 90%;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cvv-container p {
  z-index: 2;
  position: absolute;
  left: 65%;
  top: 25%;
  color: black;
  margin: 0;
}

.cvv-container .cvv-strip {
  width: 100%;
  height: 35px;
  background: white;
  position: absolute;
  top: 5%;
}

.card__logo {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
  margin-right: 5px;
  margin-top: 5px;
}

img {
  width: 60px;
  height: 40px;
  user-select: none;
}

.visa {
  width: 58px;
  height: 25px;
}

.elo {
  height: 27px;
}
</style>


