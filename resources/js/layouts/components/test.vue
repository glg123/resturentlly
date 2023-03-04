<script>
const date = new Date()
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
export default {
  name: "App",
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      time: '',
      date: '',
      timer: undefined,
    }
  },
  // eslint-disable-next-line vue/component-api-style
  beforeMount() {
    // this.timer = setInterval(this.setDateTime, 1000);
    this.timer = setInterval(this.updateTime, 1000)
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    zeroPadding(num, digit) {
      let zero = ''
      for(var i = 0; i < digit; i++) {
        zero += '0'
      }

      return (zero + num).slice(-digit)
    },
    updateTime() {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' +  this.zeroPadding(cd.getMinutes(), 2) + ':' +  this.zeroPadding(cd.getSeconds(), 2)
      this.date =  this.zeroPadding(cd.getFullYear(), 4) + '-' +  this.zeroPadding(cd.getMonth()+1, 2) + '-' +  this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
    },
  },
  // eslint-disable-next-line vue/component-api-style
  beforeUnmount() {
  //  clearInterval(this.timer)
  },
}
</script>

<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>


<style  scoped>
#clock {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #282b2c;
  font-size: 60px;
  letter-spacing: 7px;
  z-index: 10000;
}
.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
</style>
