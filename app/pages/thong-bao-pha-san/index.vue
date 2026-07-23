<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9 pt-7 pb-12 grid lg:grid-cols-[250px_minmax(0,1fr)] gap-7">
         <aside v-reveal class="self-start lg:sticky lg:top-24 w-full">
            <div
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
               <div
                  class="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                     <UIcon name="i-lucide-sliders-horizontal" class="w-4.5 h-4.5 text-primary" />
                     <h2 class="text-base font-extrabold tracking-tight">Bộ lọc</h2>
                  </div>
                  <button v-if="isFiltering" type="button"
                     class="text-[13px] font-semibold text-primary hover:underline underline-offset-2"
                     @click="resetFilters">
                     Đặt lại
                  </button>
               </div>

               <div class="p-4 border-b border-gray-200 dark:border-gray-800">
                  <div class="relative">
                     <UIcon name="material-symbols:search"
                        class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                     <input v-model="query" type="text" placeholder="Tìm kiếm"
                        class="w-full h-9 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary" />
                  </div>
               </div>

               <div class="p-4 border-b border-gray-200 dark:border-gray-800">
                  <div class="text-xs uppercase tracking-[0.08em] font-bold text-gray-400 dark:text-gray-500 mb-2">
                     Loại thông báo</div>
                  <div class="space-y-0.5">
                     <button v-for="type in typeFilters" :key="type" type="button"
                        class="w-full flex items-center h-8.5 px-2.5 rounded-lg text-sm transition-colors"
                        :class="type === activeType
                           ? 'bg-primary/10 text-primary font-bold'
                           : 'text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/40'"
                        @click="activeType = type">
                        <span class="truncate">{{ type }}</span>
                     </button>
                  </div>
               </div>

               <div class="p-4">
                  <div class="text-xs uppercase tracking-[0.08em] font-bold text-gray-400 dark:text-gray-500 mb-2">
                     Tòa chuyên trách</div>
                  <div class="space-y-0.5">
                     <button v-for="court in courtFilters" :key="court" type="button"
                        class="w-full flex items-center h-8.5 px-2.5 rounded-lg text-sm transition-colors"
                        :class="court === activeCourt
                           ? 'bg-primary/10 text-primary font-bold'
                           : 'text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/40'"
                        @click="activeCourt = court">
                        <span class="truncate">{{ court }}</span>
                     </button>
                  </div>
               </div>
            </div>
         </aside>
         <div class="flex flex-col">
            <div v-if="paged.length" v-reveal class="grid sm:grid-cols-2 gap-6">
               <NuxtLink v-for="a in paged" :key="a.slug" :to="`/thong-bao-pha-san/${a.slug}`"
                  class="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                  <div class="aspect-video overflow-hidden">
                     <img src="https://picsum.photos/300/200" alt=""
                        class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                  <div class="p-4.5 flex flex-col flex-1">
                     <span
                        class="self-start bg-primary/10 text-primary text-[13px] font-semibold px-2.5 py-1 rounded-full">{{
                        a.type }}</span>
                     <h3
                        class="mt-3 mb-2 text-lg font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif">
                        {{ a.title }}</h3>
                     <p class="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{{
                        a.address }}</p>
                     <div class="mt-auto text-sm text-gray-500 dark:text-gray-400">{{ a.date }} · {{ a.court }}</div>
                  </div>
               </NuxtLink>
            </div>

            <div v-if="!filtered.length" class="text-center py-14">
               <div class="text-lg font-bold mb-1.5">Không tìm thấy thông báo phù hợp</div>
               <div class="text-base text-gray-500 dark:text-gray-400">Thử từ khóa khác hoặc bấm "Đặt lại" bộ lọc.</div>
            </div>

            <div v-else-if="filtered.length > PAGE_SIZE" class="mt-9 flex justify-center">
               <UPagination v-model:page="page" :total="filtered.length" :items-per-page="PAGE_SIZE" />
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { announcements, ANNOUNCEMENT_TYPES, ANNOUNCEMENT_COURTS } from '~/utils/announcements'

useHead({ title: 'Thông báo phá sản' })

const query = ref('')
const activeType = ref('Tất cả')
const activeCourt = ref('Tất cả')

const typeFilters = ['Tất cả', ...ANNOUNCEMENT_TYPES]
const courtFilters = ['Tất cả', ...ANNOUNCEMENT_COURTS]

const filtered = computed(() => {
   const q = query.value.trim().toLowerCase()
   return announcements.filter((a) => {
      const matchType = activeType.value === 'Tất cả' || a.type === activeType.value
      const matchCourt = activeCourt.value === 'Tất cả' || a.court === activeCourt.value
      const matchQuery = !q || a.title.toLowerCase().includes(q)
      return matchType && matchCourt && matchQuery
   })
})

const isFiltering = computed(() =>
   activeType.value !== 'Tất cả' || activeCourt.value !== 'Tất cả' || !!query.value.trim())

function resetFilters() {
   activeType.value = 'Tất cả'
   activeCourt.value = 'Tất cả'
   query.value = ''
}

const PAGE_SIZE = 6
const page = ref(1)
const paged = computed(() => filtered.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
watch([activeType, activeCourt, query], () => { page.value = 1 })
</script>
