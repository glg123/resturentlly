<script setup>
const route = useRoute()
const router = useRouter()
</script>

<template>
  <h1>meals list</h1>
</template>

<route lang="yaml">
meta:
 layout: default_staff
 action: read
 subject: rest_maneger
</route>
