<script setup lang="ts">
const PHONE = '0966643359'
const PHONE_DISPLAY = '0966 643 359'
const ZALO = `https://zalo.me/${PHONE}`
</script>

<template>
   <div class="fixed z-5 hidden md:flex flex-col gap-3.5 right-10 bottom-24">

      <a :href="ZALO" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo"
         class="group relative flex w-12 h-12 justify-center items-center rounded-full bg-[#0068ff] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
         <span class="absolute inset-0 rounded-full bg-[#0068ff] opacity-70 animate-ping motion-reduce:hidden"></span>
         <UIcon name="i-lucide-message-circle" class="relative w-5.5 h-5.5" />
      </a>

      <a :href="`tel:${PHONE}`" :aria-label="`Gọi điện: ${PHONE_DISPLAY}`"
         class="group relative flex w-12 h-12 justify-center items-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
         <span
            class="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping motion-reduce:hidden [animation-delay:0.6s]"></span>
         <UIcon name="i-lucide-phone" class="relative w-5.5 h-5.5" />
         <span
            class="pointer-events-none absolute right-full mr-3.5 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-gray-700 text-white text-sm font-semibold px-3 py-1.5 shadow-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            {{ PHONE_DISPLAY }}
         </span>
      </a>
   </div>
</template>
