<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="fixed top-0 left-0 h-0.75 bg-primary z-20 transition-[width] duration-100"
         :style="{ width: progress + '%' }"></div>

      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 pt-11 pb-12">
         <div class="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-10 lg:gap-12 items-start">
            <article class="min-w-0">
               <nav class="text-base text-gray-500 dark:text-gray-400 mb-5">
                  <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
                  <span class="opacity-60 mx-1">/</span>
                  <NuxtLink to="/cau-hoi-thuong-gap" class="hover:text-primary transition-colors">Câu hỏi thường gặp
                  </NuxtLink>
               </nav>
               <h1 class="mt-4 mb-7 text-3xl sm:text-4xl/tight font-extrabold tracking-tight font-serif">{{ faq.q }}
               </h1>

               <div class="aspect-video mb-7 rounded-2xl overflow-hidden">
                  <img :src="`https://picsum.photos/seed/faq-${faq.id}/1200/675`" alt=""
                     class="w-full h-full object-cover object-center" />
               </div>

               <p class="mb-5 text-[21px] leading-relaxed font-medium">{{ faq.a }}</p>

               <blockquote
                  class="my-7 py-5 px-6 border-l-4 border-primary bg-gray-100 dark:bg-gray-900 rounded-r-xl text-[19px] leading-relaxed">
                  Nội dung trên mang tính tham khảo chung theo quy định của Luật Phá sản 2014. Với từng tình huống cụ
                  thể, doanh nghiệp nên trao đổi trực tiếp với quản tài viên để được hướng dẫn chính xác.
               </blockquote>
            </article>

            <aside class="lg:sticky lg:top-24">
               <div class="flex items-center gap-2.5 mb-5">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-xl font-extrabold tracking-tight">Câu hỏi khác</h2>
               </div>
               <div class="flex flex-col gap-4">
                  <NuxtLink v-for="r in related" :key="r.slug" :to="`/cau-hoi-thuong-gap/${r.slug}`"
                     class="group flex items-stretch bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                     <div class="w-40 shrink-0 overflow-hidden">
                        <img :src="`https://picsum.photos/seed/faq-${r.id}/300/200`" alt=""
                           class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                     </div>
                     <div class="min-w-0 flex-1 p-3.5 flex flex-col justify-center">
                        <h3
                           class="text-base font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif">
                           {{ r.q }}</h3>
                     </div>
                  </NuxtLink>
               </div>
            </aside>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { faqs, getFaqBySlug } from '~/utils/faqs'

definePageMeta({ key: r => r.path })

const route = useRoute()
const faq = getFaqBySlug(route.params.slug as string)

if (!faq) {
   throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy câu hỏi', fatal: true })
}

useHead({ title: faq.q })

const related = faqs.filter((f) => f.slug !== faq.slug).slice(0, 4)

const progress = ref(0)

function onScroll() {
   const max = document.documentElement.scrollHeight - window.innerHeight || 1
   progress.value = Math.min(100, Math.max(0, (window.scrollY / max) * 100))
}

onMounted(() => {
   window.addEventListener('scroll', onScroll, { passive: true })
   onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
