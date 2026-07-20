<template>
   <div class="container mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 lg:h-20">
         <div class="flex justify-between items-center gap-4 h-10">
            <NuxtLink to="/" class="shrink-0">
               <img src="/images/logo.png" alt="Logo" class="h-20">
            </NuxtLink>
            <nav class="hidden lg:flex items-center gap-6">
               <template v-for="item in nav" :key="item.name">
                  <NuxtLink v-if="item.link" :to="item.link" class="
                           relative flex items-center h-9 font-bold
                           after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary
                           after:transition-[width] after:duration-400 after:ease-out
                        " :class="isActive(item.link) ? 'after:w-full' : 'after:w-0 hover:after:w-full'">
                     {{ item.name }}
                  </NuxtLink>

                  <div v-else class="group relative">
                     <div class="relative h-9 flex items-center justify-between gap-2 hover:cursor-pointer
                           after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary font-bold
                           after:transition-[width] after:duration-300 after:ease-out"
                        :class="isDropdownActive(item) ? 'after:w-full text-primary' : 'after:w-0 group-hover:after:w-full'">
                        <p>{{ item.name }}</p>
                        <UIcon name="weui:arrow-filled"
                           class="rotate-90 group-hover:-rotate-90 transition-all duration-200 ease-in-out" />
                     </div>
                     <ul
                        class="bg-dark absolute top-full -left-3 py-2 opacity-0 invisible transition-all duration-200 ease group-hover:opacity-100 group-hover:visible  bg-white shadow-md rounded-xl w-50">
                        <li v-for="sub in item.items" :key="sub.link" class="flex h-10 items-center">
                           <NuxtLink :to="sub.link"
                              class="px-4 w-full h-full font-bold flex items-center text-base hover:bg-gray-100 hover:cursor-pointer border-l-4 hover:border-primary hover:text-primary"
                              :class="isActive(sub.link) ? 'border-primary text-primary bg-gray-50' : 'border-transparent text-gray-700'">
                              {{ sub.name }}
                           </NuxtLink>
                        </li>
                     </ul>
                  </div>
               </template>
            </nav>
         </div>
         <div class="flex items-center gap-2 sm:gap-4">
            <div class="flex items-center">
               <input ref="searchInput" v-model="searchQuery" type="text" placeholder="Tìm kiếm..." class="h-8 rounded-md border border-gray-300 px-3 text-base outline-none
                        transition-all duration-300 ease-out focus:border-primary"
                  :class="showSearch ? 'w-36 sm:w-48 opacity-100 mr-2' : 'w-0 opacity-0 mr-0 px-0'" @keyup.enter="onSearch" />
               <UTooltip text="Tìm kiếm">
                  <button class="flex items-center justify-center w-8 h-8 shrink-0" @click="toggleSearch">
                     <UIcon name="material-symbols:search" class="w-6 h-6" />
                  </button>
               </UTooltip>
            </div>
            <UColorModeButton class="w-8 h-8 shrink-0" />
            <NuxtTime :datetime="Date.now()" weekday="long" locale="vi-VN" year="numeric" month="numeric"
               day="numeric" class="hidden xl:block" />
            <button class="lg:hidden flex items-center justify-center w-9 h-9 shrink-0" aria-label="Mở menu"
               @click="mobileOpen = true">
               <UIcon name="material-symbols:menu-rounded" class="w-7 h-7" />
            </button>
         </div>
      </div>
   </div>

   <Teleport to="body">
      <Transition name="fade">
         <div v-if="mobileOpen" class="fixed inset-0 z-50 bg-black/50 lg:hidden" @click="mobileOpen = false" />
      </Transition>
      <Transition name="slide">
         <aside v-if="mobileOpen"
            class="fixed top-0 right-0 z-50 h-full w-[82%] max-w-xs bg-white dark:bg-neutral-900 shadow-xl flex flex-col lg:hidden">
            <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
               <div class="flex items-center gap-2">
                  <img src="/favicon.ico" alt="Logo" class="h-8">
                  <span class="font-bold">Menu</span>
               </div>
               <button class="flex items-center justify-center w-9 h-9" aria-label="Đóng menu"
                  @click="mobileOpen = false">
                  <UIcon name="material-symbols:close-rounded" class="w-6 h-6" />
               </button>
            </div>
            <nav class="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5">
               <template v-for="item in nav" :key="item.name">
                  <NuxtLink v-if="item.link" :to="item.link" class="px-3 h-11 flex items-center rounded-lg font-bold"
                     :class="isActive(item.link) ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
                     @click="mobileOpen = false">
                     {{ item.name }}
                  </NuxtLink>
                  <div v-else>
                     <div class="px-3 pt-3 pb-1 text-sm font-bold uppercase tracking-wide text-gray-400">{{ item.name }}
                     </div>
                     <NuxtLink v-for="sub in item.items" :key="sub.link" :to="sub.link"
                        class="pl-6 pr-3 h-10 flex items-center rounded-lg font-semibold text-base"
                        :class="isActive(sub.link) ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
                        @click="mobileOpen = false">
                        {{ sub.name }}
                     </NuxtLink>
                  </div>
               </template>
            </nav>
         </aside>
      </Transition>
   </Teleport>
</template>

<script setup lang="ts">
const nav = ref([
   { name: 'Trang chủ', link: '/' },
   {
      name: 'Dịch vụ',
      items: [
         { name: 'Phá sản', link: '/dich-vu/pha-san' },
         { name: 'Phục hổi', link: '/dich-vu/phuc-hoi' },
         { name: 'Tư vấn', link: '/dich-vu/tu-van' },
         { name: 'Quản lý tài sản', link: '/dich-vu/quan-ly-tai-san' }
      ]
   },
   { name: 'Thông báo phá sản', link: '/thong-bao-pha-san' },
   { name: 'Tin tức', link: '/tin-tuc' },
   { name: 'Câu hỏi thường gặp', link: '/cau-hoi-thuong-gap' },
   { name: 'Về chúng tôi', link: '/ve-chung-toi' }
])

const route = useRoute()

function isActive(link: string) {
   if (link === '/') return route.path === '/'
   return route.path === link || route.path.startsWith(link + '/')
}

function isDropdownActive(item: any) {
   return item.items?.some((sub: any) => isActive(sub.link))
}

const showSearch = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const mobileOpen = ref(false)

watch(mobileOpen, (open) => {
   if (import.meta.client) {
      document.body.style.overflow = open ? 'hidden' : ''
   }
})

watch(() => route.path, () => {
   mobileOpen.value = false
})

onBeforeUnmount(() => {
   if (import.meta.client) document.body.style.overflow = ''
})

function toggleSearch() {
   showSearch.value = !showSearch.value
   if (showSearch.value) {
      nextTick(() => {
         searchInput.value?.focus()
      })
   } else {
      searchQuery.value = ''
   }
}

function onSearch() {
   if (!searchQuery.value.trim()) return
   navigateTo(`/tim-kiem?q=${encodeURIComponent(searchQuery.value)}`)
   showSearch.value = false
   searchQuery.value = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
   transition: transform 0.28s ease;
}

.slide-enter-from,
.slide-leave-to {
   transform: translateX(100%);
}
</style>
