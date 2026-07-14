<template>
   <div class="min-h-screen relative">
      <div class="fixed top-0 left-0 z-10 w-full bg-white dark:bg-neutral-900">
         <LayoutHeader />
      </div>
      <div class="relative bg-gray-100 dark:bg-transparent mt-20">
         <slot />
         <button :class="[
            'hidden md:flex fixed bottom-8 right-10 w-11.5 h-11.5 justify-center items-center rounded-full dark:text-black bg-gray-200 hover:text-white hover:bg-primary z-5 transition-all duration-500',
            scrollY > 400
               ? 'opacity-100 '
               : 'opacity-0  pointer-events-none'
         ]" @click="y -= y">
            <UIcon name="maki:arrow" class="-rotate-90 cursor-pointer" />
         </button>
      </div>
      <LayoutFooter />
   </div>
</template>

<script setup>
const { y } = useWindowScroll({ behavior: 'smooth' });
const scrollY = computed(() => y.value)
</script>
