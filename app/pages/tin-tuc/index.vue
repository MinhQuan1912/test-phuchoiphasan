<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0">
               <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-4 sm:px-6 lg:px-9 py-14">
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2.5">Tin tức</h1>
            <p class="text-[16.5px] leading-relaxed text-white/82 max-w-2xl">
               Cập nhật thời sự, quy định pháp luật và phân tích chuyên sâu về phá sản, phục hồi doanh nghiệp.
            </p>
         </div>
      </section>

      <section class="container mx-auto px-4 sm:px-6 lg:px-9 pt-7 pb-2">
         <div class="flex flex-wrap gap-2.5 mt-4 mb-7">
            <button v-for="cat in categories" :key="cat" type="button"
               class="h-9 px-4 inline-flex items-center rounded-full text-[13px] font-semibold border transition-all"
               :class="cat === activeCategory
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
               @click="activeCategory = cat">
               {{ cat }}
            </button>
         </div>

         <NuxtLink v-if="featured" to="/tin-tuc/bai-viet"
            class="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden mb-9">
            <div
               class="aspect-16/10 flex items-center justify-center">
               <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
            </div>
            <div class="p-9 flex flex-col justify-center">
               <span class="self-start bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{{
                  featured.tag }}</span>
               <h2 class="mt-3.5 mb-3 text-2xl font-extrabold leading-snug tracking-tight">{{ featured.title }}</h2>
               <p class="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4">{{ featured.excerpt }}</p>
               <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ featured.meta }}</div>
            </div>
         </NuxtLink>

         <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="post in rest" :key="post.title" to="/tin-tuc/bai-viet"
               class="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
               <div
                  class="aspect-video flex items-center justify-center">
                  <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
               </div>
               <div class="p-[18px] flex flex-col flex-1">
                  <span
                     class="self-start bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">{{
                     post.tag }}</span>
                  <h3 class="mt-3 mb-2 text-base font-bold leading-snug">{{ post.title }}</h3>
                  <p class="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">{{ post.excerpt }}</p>
                  <div class="mt-auto text-xs text-gray-500 dark:text-gray-400">{{ post.meta }}</div>
               </div>
            </NuxtLink>
         </div>

         <div v-if="!filtered.length" class="text-center py-14 text-gray-500 dark:text-gray-400">
            Chưa có bài viết trong chuyên mục này.
         </div>

         <div v-else class="mt-9 mb-2 text-center">
            <button type="button"
               class="inline-flex items-center h-11 px-6 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
               Xem thêm bài viết
            </button>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
interface Post {
   tag: string
   title: string
   excerpt: string
   meta: string
}

useHead({ title: 'Tin tức' })

const categories = ['Tất cả', 'Thời sự', 'Pháp luật', 'Doanh nghiệp', 'Phân tích', 'Hỏi đáp']

const posts: Post[] = [
   { tag: 'Thời sự', title: 'TAND TP.HCM mở thủ tục phá sản với doanh nghiệp bất động sản lớn phía Nam', excerpt: 'Quyết định được ban hành sau khi doanh nghiệp mất khả năng thanh toán các khoản nợ đến hạn kéo dài.', meta: 'Thời sự · 2 giờ trước' },
   { tag: 'Pháp luật', title: 'Sửa đổi Luật Phá sản 2014: 5 điểm mới doanh nghiệp cần nắm rõ', excerpt: 'Những thay đổi quan trọng về trình tự, thủ tục và vai trò của các bên trong quá trình giải quyết phá sản.', meta: 'Pháp luật · 4 giờ trước' },
   { tag: 'Phân tích', title: 'Tái cơ cấu nợ thành công: bài học từ một doanh nghiệp sản xuất', excerpt: 'Hành trình từ bờ vực mất khả năng thanh toán đến phục hồi hoạt động ổn định trở lại.', meta: 'Phân tích · Hôm qua' },
   { tag: 'Pháp luật', title: 'Quy trình chỉ định và thù lao của quản tài viên theo quy định mới', excerpt: 'Điều kiện hành nghề, phạm vi trách nhiệm và cách tính thù lao của quản tài viên.', meta: 'Pháp luật · 5 giờ trước' },
   { tag: 'Pháp luật', title: 'Thứ tự ưu tiên thanh toán khi doanh nghiệp bị tuyên bố phá sản', excerpt: 'Nguyên tắc phân chia tài sản và bảo vệ quyền lợi các nhóm chủ nợ khác nhau.', meta: 'Pháp luật · 7 giờ trước' },
   { tag: 'Doanh nghiệp', title: 'Hội nghị chủ nợ: điều kiện hợp lệ và quyền biểu quyết', excerpt: 'Vai trò của hội nghị chủ nợ trong việc thông qua phương án phục hồi hoạt động kinh doanh.', meta: 'Doanh nghiệp · Hôm qua' },
   { tag: 'Hỏi đáp', title: 'Phân biệt phá sản và giải thể doanh nghiệp dưới góc nhìn pháp lý', excerpt: 'Hai khái niệm dễ nhầm lẫn nhưng khác biệt về bản chất, thủ tục và hệ quả pháp lý.', meta: 'Hỏi đáp · 2 ngày trước' },
   { tag: 'Doanh nghiệp', title: 'Bảo vệ quyền lợi người lao động khi doanh nghiệp mất khả năng chi trả', excerpt: 'Các khoản lương, trợ cấp và bảo hiểm xã hội được ưu tiên xử lý như thế nào.', meta: 'Doanh nghiệp · 2 ngày trước' },
   { tag: 'Phân tích', title: 'Nguyên tắc định giá tài sản trong thủ tục phá sản', excerpt: 'Phương pháp định giá, tổ chức thẩm định và bán đấu giá tài sản minh bạch.', meta: 'Phân tích · 3 ngày trước' }
]

const activeCategory = ref('Tất cả')
const query = ref('')

const filtered = computed(() => {
   const q = query.value.trim().toLowerCase()
   return posts.filter((p) => {
      const matchCat = activeCategory.value === 'Tất cả' || p.tag === activeCategory.value
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchCat && matchQuery
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

.dark .ph {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
