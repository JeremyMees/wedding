<template>
  <nav class="bg-white shadow-lg shadow-pink-200 rounded-xl fixed bottom-2 left-2 right-2">
    <div class="py-3 flex items-center justify-center gap-10">
      <NuxtLink
        to="/images"
        active-class="!text-pink-600"
        class="flex flex-col items-center text-slate-700"
      >
        <Icon name="ph:image" class="w-6 h-6" />
        <span class="text-[10px]">Images</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        active-class="!text-pink-600"
        class="flex flex-col items-center text-slate-700"
      >
        <Icon name="tabler:home" class="w-6 h-6" />
        <span class="text-[10px]">Home</span>
      </NuxtLink>
      <NuxtLink
        to="/songs"
        active-class="!text-pink-600"
        class="flex flex-col items-center text-slate-500"
      >
        <Icon name="ri:music-line" class="w-6 h-6" />
        <span class="text-[10px]">Songs</span>
      </NuxtLink>
    </div>
  </nav>
</template>
