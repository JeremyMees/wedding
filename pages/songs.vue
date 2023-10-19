<script setup lang="ts">
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const songs = useCollection(collection(db, 'songs'))
</script>

<template>
  <NuxtLayout>
    <div v-for="i in 50" :key="i">
      {{ songs }}
    </div>
  </NuxtLayout>
</template>
