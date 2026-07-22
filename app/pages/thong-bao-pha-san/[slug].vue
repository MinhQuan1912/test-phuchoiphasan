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
                  <NuxtLink to="/thong-bao-pha-san" class="hover:text-primary transition-colors">Thông báo phá sản
                  </NuxtLink>
                  <span class="opacity-60 mx-1">/</span>
                  <span>{{ data.type }}</span>
               </nav>
               <h1 class="mt-4 mb-5 text-3xl sm:text-4xl/tight font-extrabold tracking-tight">{{ data.title }}</h1>

               <div class="flex items-center gap-3.5 pb-6 border-b border-gray-200 dark:border-gray-800">
                  <div class="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                     <UIcon name="material-symbols:gavel-rounded" class="w-5.5 h-5.5" />
                  </div>
                  <div>
                     <div class="text-base font-bold">Thông báo phá sản</div>
                     <div class="text-[15px] text-gray-500 dark:text-gray-400">{{ data.type }} · {{ data.date }}</div>
                  </div>
               </div>

               <div class="ph aspect-video my-7 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
               </div>

               <p class="mb-5 text-[21px] leading-relaxed font-medium">
                  {{ summary }}
               </p>
               <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
                  Thông báo được ban hành ngày {{ data.date }}. Doanh nghiệp {{ data.title }} có trụ sở tại
                  {{ data.address }}.
               </p>
               <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
                  Quản tài viên phụ trách vụ việc: <strong class="text-gray-900 dark:text-gray-100">{{ data.manager
                     }}</strong>. Các chủ nợ và bên liên quan liên hệ quản tài viên để được hướng dẫn thực hiện quyền và
                  nghĩa vụ của mình theo quy định của Luật Phá sản.
               </p>

               <h2 class="mt-9 mb-3.5 text-2xl font-extrabold tracking-tight">Lưu ý cho các bên liên quan</h2>
               <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
                  {{ guidance }}
               </p>

               <blockquote
                  class="my-7 py-5 px-6 border-l-4 border-primary bg-gray-100 dark:bg-gray-900 rounded-r-xl text-[19px] leading-relaxed italic">
                  Đây là thông tin đăng tải mang tính tham khảo. Giá trị pháp lý căn cứ theo văn bản gốc do cơ quan có
                  thẩm quyền ban hành.
               </blockquote>

               <div class="flex flex-wrap gap-2.5 my-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <span class="text-base font-semibold self-center">Chủ đề:</span>
                  <NuxtLink v-for="tag in tags" :key="tag" to="/thong-bao-pha-san"
                     class="h-8 inline-flex items-center px-3.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-[15px] hover:border-primary hover:text-primary transition-colors">
                     {{ tag }}
                  </NuxtLink>
               </div>
            </article>

            <aside class="lg:sticky lg:top-24">
               <div class="flex items-center gap-2.5 mb-5">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-xl font-extrabold tracking-tight">Thông báo liên quan</h2>
               </div>
               <div class="flex flex-col gap-4">
                  <NuxtLink v-for="a in related" :key="a.slug" :to="`/thong-bao-pha-san/${a.slug}`"
                     class="group flex items-stretch bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                     <div class="ph w-40 shrink-0 overflow-hidden">
                        <img src="https://picsum.photos/300/200" alt=""
                           class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                     </div>
                     <div class="min-w-0 flex-1 p-3.5 flex flex-col justify-center">
                        <h3 class="text-base font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors">
                           {{ a.title }}</h3>
                        <div class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{{ a.type }} · {{ a.date }}</div>
                     </div>
                  </NuxtLink>
               </div>
            </aside>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { announcements, getAnnouncementBySlug, announcementSummary } from '~/utils/announcements'

// Mỗi slug là một instance riêng để setup chạy lại khi điều hướng client-side.
definePageMeta({ key: (route) => route.path })

const route = useRoute()

const announcement = computed(() => getAnnouncementBySlug(String(route.params.slug)))

if (!announcement.value) {
   throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy thông báo', fatal: true })
}

// Đã kiểm tra ở trên nên chắc chắn tồn tại tại thời điểm render.
const data = announcement.value!

const summary = announcementSummary(data)

const guidance = data.type === 'Tuyên bố phá sản'
   ? 'Tài sản còn lại của doanh nghiệp được thanh lý và phân chia theo thứ tự ưu tiên quy định tại Luật Phá sản. Chủ nợ theo dõi các thông báo phân chia tài sản tiếp theo của quản tài viên để bảo đảm quyền lợi.'
   : 'Chủ nợ thực hiện việc nộp giấy đòi nợ cho quản tài viên trong thời hạn 30 ngày kể từ ngày đăng thông báo, kèm theo tài liệu, chứng cứ chứng minh khoản nợ. Quá thời hạn có thể ảnh hưởng đến quyền lợi khi phân chia tài sản.'

const tags = [data.type]

// Ưu tiên các thông báo cùng loại, lấy tối đa 3 mục.
const related = [...announcements]
   .filter((a) => a.slug !== data.slug)
   .sort((a, b) => Number(b.type === data.type) - Number(a.type === data.type))
   .slice(0, 3)

useHead({ title: `${data.title} – Thông báo phá sản` })

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

<style scoped>
.ph {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.09) 0 12px, transparent 12px 24px), rgb(231 240 252);
}

.dark .ph {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
