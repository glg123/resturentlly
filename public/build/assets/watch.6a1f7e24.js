import{U as _,o as p,l as g,bd as E}from"./main.a5f2feaa.js";const S={name:"App",data(){return{time:"",date:"",timer:void 0}},beforeMount(){this.timer=setInterval(this.updateTime,1e3)},mounted(){for(var t=document.getElementsByClassName("diallines"),e=document.getElementsByClassName("clock")[0],a=1;a<60;a++)e.innerHTML+="<div class='diallines'></div>",t[a].style.transform="rotate("+6*a+"deg)"},methods:{updateTime(){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=new Date,a=e.getHours(),s=e.getMinutes(),n=e.getSeconds(),o=e.getDate(),d=e.getMonth()+1,r=e.getFullYear(),c=a*30+s*(360/720),i=s*6+n*(360/3600),l=n*6,v=document.querySelector(".hour-hand"),u=document.querySelector(".minute-hand"),m=document.querySelector(".second-hand"),f=document.querySelector(".date"),h=document.querySelector(".day"),y=t[e.getDay()];d<9&&(d="0"+d),v.style.transform="rotate("+c+"deg)",u.style.transform="rotate("+i+"deg)",m.style.transform="rotate("+l+"deg)",f.innerHTML=o+"/"+d+"/"+r,h.innerHTML=y}}},M={class:"clock"},T=E('<div data-v-2ef2e26e><div class="info date" data-v-2ef2e26e></div><div class="info day" data-v-2ef2e26e></div></div><div class="dot" data-v-2ef2e26e></div><div data-v-2ef2e26e><div class="hour-hand" data-v-2ef2e26e></div><div class="minute-hand" data-v-2ef2e26e></div><div class="second-hand" data-v-2ef2e26e></div></div><div data-v-2ef2e26e><span class="h3" data-v-2ef2e26e>3</span><span class="h6" data-v-2ef2e26e>6</span><span class="h9" data-v-2ef2e26e>9</span><span class="h12" data-v-2ef2e26e>12</span></div><div class="diallines" data-v-2ef2e26e></div>',5),k=[T];function D(t,e,a,s,n,o){return p(),g("div",M,k)}const x=_(S,[["render",D],["__scopeId","data-v-2ef2e26e"]]);export{x as default};
