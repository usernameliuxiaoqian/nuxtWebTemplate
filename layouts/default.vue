<template>
  <div>
    <StHeader />

    <main class="content-container" ref="container">
      <NuxtPage></NuxtPage>
    </main>

    <StFooter />
  </div>
</template>

<script lang="ts" setup>
import StHeader from '~/components/Header/index.vue'
import StFooter from '~/components/Footer/index.vue'
</script>
