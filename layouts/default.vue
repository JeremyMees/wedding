<!-- <script setup lang="ts"></script> -->

<template>
  <div class="flex flex-col min-h-screen container relative">
    <div class="fancy-shadow" />
    <div class="grow overflow-y-auto pb-20 pt-6">
      <slot />
    </div>
    <Navbar />
  </div>
</template>
