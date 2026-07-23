<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9 pt-9 pb-12 grid lg:grid-cols-[minmax(0,1fr)_340px] gap-9">
         <div class="flex flex-col">
            <div v-if="filteredFaqs.length" v-reveal class="space-y-5">
               <NuxtLink v-for="(f, i) in filteredFaqs" :key="f.id" v-reveal :to="`/cau-hoi-thuong-gap/${f.slug}`"
                  :style="{ '--reveal-delay': i * 60 + 'ms' }"
                  class="group grid sm:grid-cols-[230px_minmax(0,1fr)] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5">
                  <div class="relative aspect-video sm:aspect-auto sm:h-full overflow-hidden">
                     <img :src="`https://picsum.photos/seed/faq-${f.id}/460/300`" alt=""
                        class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                  <div class="p-5 sm:p-6 flex flex-col">
                     <h2
                        class="text-lg font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif">
                        {{ f.q }}</h2>
                     <p class="mt-2.5 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">{{ f.a
                     }}</p>
                     <span
                        class="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2">
                        Xem chi tiết
                        <UIcon name="i-lucide-arrow-right" class="w-4 h-4 shrink-0" />
                     </span>
                  </div>
               </NuxtLink>
            </div>

            <div v-else
               class="text-center py-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl">
               <UIcon name="i-lucide-search-x" class="w-10 h-10 text-gray-300 dark:text-gray-600 mb-3" />
               <p class="text-lg font-bold mb-1.5">Không tìm thấy câu hỏi phù hợp</p>
               <p class="text-base text-gray-500 dark:text-gray-400">
                  Thử từ khóa khác hoặc
                  <NuxtLink to="/lien-he" class="font-semibold text-primary hover:underline underline-offset-2">
                     gửi câu hỏi cho chúng tôi</NuxtLink>.
               </p>
            </div>
         </div>

         <aside class="self-start lg:sticky lg:top-24 flex flex-col gap-6 w-full">
            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4.5">
               <h2 class="text-lg font-extrabold tracking-tight mb-3">Tìm kiếm câu hỏi</h2>
               <div class="relative">
                  <UIcon name="material-symbols:search"
                     class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input v-model="searchQuery" type="text" placeholder="Nhập từ khóa..."
                     class="w-full h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-10 pr-3 text-[15px] outline-none transition-colors focus:border-primary" />
               </div>
               <p v-if="searchQuery.trim()" class="mt-2.5 text-sm text-gray-500 dark:text-gray-400">
                  <strong class="text-gray-900 dark:text-gray-100">{{ filteredFaqs.length }}</strong> câu hỏi phù hợp
               </p>
            </div>

            <div v-reveal class="relative bg-primary text-white rounded-2xl p-6 overflow-hidden">
               <UIcon name="i-lucide-message-circle-question"
                  class="absolute -bottom-6 -right-6 w-32 h-32 text-white/10 pointer-events-none" />
               <div class="relative">
                  <h2 class="text-xl font-extrabold tracking-tight mb-2">Chưa tìm thấy câu trả lời?</h2>
                  <p class="text-[15px] leading-relaxed text-white/85 mb-5">
                     Để lại thông tin trên trang liên hệ, đội ngũ quản tài viên sẽ tư vấn miễn phí trong vòng 24 giờ
                     làm việc.
                  </p>
                  <NuxtLink to="/lien-he"
                     class="btn-anim group inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-white text-primary text-[15px] font-bold">
                     Gửi yêu cầu tư vấn
                     <UIcon name="i-lucide-arrow-right"
                        class="w-4.5 h-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </NuxtLink>
                  <div class="mt-5 pt-4 border-t border-white/20 flex items-center gap-3">
                     <div class="shrink-0 w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                        <UIcon name="boxicons:phone" class="w-4.5 h-4.5" />
                     </div>
                     <div>
                        <div class="text-xs text-white/70">Hotline hỗ trợ</div>
                        <div class="text-[15px] font-bold">0966 643 359</div>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </div>
   </div>
</template>

<script setup lang="ts">
import { faqs } from '~/utils/faqs'

useHead({ title: 'Câu hỏi thường gặp' })

const searchQuery = ref('')

const filteredFaqs = computed(() => {
   const q = searchQuery.value.trim().toLowerCase()
   return faqs.filter((item) => !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
})
</script>
