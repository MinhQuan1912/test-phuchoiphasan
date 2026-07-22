<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-4 sm:px-6 lg:px-9 py-20 sm:py-28">
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2.5">Thông báo phá sản</h1>
            <p class="text-[18.5px] leading-relaxed text-white/82 max-w-2xl">
               Tra cứu các quyết định mở thủ tục và tuyên bố phá sản đối với doanh nghiệp mất khả năng thanh toán.
            </p>
         </div>
      </section>

      <section class="container mx-auto px-4 sm:px-6 lg:px-9 pt-7 pb-2">
         <div class="flex flex-wrap gap-2.5 mb-4">
            <button v-for="type in typeFilters" :key="type" type="button"
               class="h-9 px-4 inline-flex items-center rounded-full text-[15px] font-semibold border transition-all"
               :class="type === activeType
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
               @click="activeType = type">
               {{ type }}
            </button>
         </div>

         <div class="mb-7 text-[15px] text-gray-500 dark:text-gray-400">
            Tìm thấy <strong class="text-gray-900 dark:text-gray-100">{{ filtered.length }}</strong> thông báo
         </div>

         <NuxtLink v-if="featured" :to="`/thong-bao-pha-san/${featured.slug}`"
            class="group grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden mb-9 transition-all hover:border-primary/40 hover:shadow-md">
            <div class="aspect-16/10 overflow-hidden">
               <img src="https://picsum.photos/300/200" alt=""
                  class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
            </div>
            <div class="p-9 flex flex-col justify-center">
               <span class="self-start bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">{{
                  featured.type }}</span>
               <h2 class="mt-3.5 mb-3 text-2xl font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors">
                  {{ featured.title }}</h2>
               <p class="text-[17px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4">{{
                  announcementSummary(featured) }}</p>
               <div class="text-[15px] text-gray-500 dark:text-gray-400">{{ featured.date }}</div>
            </div>
         </NuxtLink>

         <div v-if="rest.length" v-reveal class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="a in rest" :key="a.slug" :to="`/thong-bao-pha-san/${a.slug}`"
               class="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
               <div class="aspect-video overflow-hidden">
                  <img src="https://picsum.photos/300/200" alt=""
                     class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
               </div>
               <div class="p-4.5 flex flex-col flex-1">
                  <span class="self-start bg-primary/10 text-primary text-[13px] font-semibold px-2.5 py-1 rounded-full">{{
                     a.type }}</span>
                  <h3 class="mt-3 mb-2 text-lg font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors">
                     {{ a.title }}</h3>
                  <p class="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{{ a.address }}</p>
                  <div class="mt-auto text-sm text-gray-500 dark:text-gray-400">{{ a.date }}</div>
               </div>
            </NuxtLink>
         </div>

         <div v-if="!filtered.length" class="text-center py-14">
            <div class="text-lg font-bold mb-1.5">Không tìm thấy thông báo phù hợp</div>
            <div class="text-base text-gray-500 dark:text-gray-400">Thử từ khóa khác hoặc chọn loại "Tất cả".</div>
         </div>

         <div v-else class="mt-9 mb-2 text-center">
            <button type="button"
               class="btn-anim inline-flex items-center h-11 px-6 rounded-lg border border-gray-200 dark:border-gray-800 text-base font-semibold hover:border-primary hover:text-primary">
               Xem thêm thông báo
            </button>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
import { announcements, announcementSummary, ANNOUNCEMENT_TYPES } from '~/utils/announcements'

useHead({ title: 'Thông báo phá sản' })

const query = ref('')
const activeType = ref('Tất cả')

const typeFilters = ['Tất cả', ...ANNOUNCEMENT_TYPES]

const filtered = computed(() => {
   const q = query.value.trim().toLowerCase()
   return announcements.filter((a) => {
      const matchType = activeType.value === 'Tất cả' || a.type === activeType.value
      const matchQuery = !q || a.title.toLowerCase().includes(q)
      return matchType && matchQuery
   })
})

const featured = computed(() => filtered.value[0] ?? null)
const rest = computed(() => filtered.value.slice(1))
</script>

<style scoped>
.hero-overlay {
   background: linear-gradient(90deg,
         rgba(8, 16, 30, 0.9) 0%,
         rgba(8, 16, 30, 0.75) 35%,
         rgba(8, 16, 30, 0.3) 65%,
         transparent 100%);
}
</style>
