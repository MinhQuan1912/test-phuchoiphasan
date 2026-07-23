<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9 pt-9 pb-12 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-9">
         <div class="flex flex-col">
            <div v-reveal class="flex items-center gap-6 border-b border-gray-200 dark:border-gray-800 mb-7">
               <button v-for="tab in tabs" :key="tab.key" type="button"
                  class="relative -mb-px pb-3 text-xl font-extrabold tracking-tight transition-colors border-b-2"
                  :class="activeTab === tab.key
                     ? 'text-primary border-primary'
                     : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-100'"
                  @click="activeTab = tab.key">
                  {{ tab.label }}
               </button>
            </div>

            <section v-if="activeTab === 'news'">
               <div v-reveal>
                  <h3 class="text-lg font-extrabold mb-3.5">Mới cập nhật</h3>
                  <div class="flex flex-wrap gap-2.5 mb-5">
                     <button v-for="cat in categories" :key="cat" type="button"
                        class="h-9 px-4 inline-flex items-center rounded-full text-[15px] font-semibold border transition-all"
                        :class="cat === activeCategory
                           ? 'bg-primary text-white border-primary'
                           : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
                        @click="activeCategory = cat">
                        {{ cat }}
                     </button>
                  </div>

                  <div class="grid sm:grid-cols-2 gap-6">
                     <NuxtLink v-for="post in paged" :key="post.title" to="/tin-tuc/bai-viet"
                        class="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                        <div class="aspect-video overflow-hidden">
                           <img src="https://picsum.photos/300/200" alt=""
                              class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                        </div>
                        <div class="p-4.5 flex flex-col flex-1">
                           <h4
                              class="mb-2 text-lg font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif">
                              {{ post.title }}</h4>
                           <p class="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">{{ post.excerpt
                           }}</p>
                           <div class="mt-auto text-sm text-gray-500 dark:text-gray-400">{{ post.meta }}</div>
                        </div>
                     </NuxtLink>
                  </div>

                  <div v-if="!filtered.length" class="text-center py-14 text-gray-500 dark:text-gray-400">
                     Chưa có bài viết trong chuyên mục này.
                  </div>

                  <div v-else-if="filtered.length > PAGE_SIZE" class="mt-8 flex justify-center">
                     <UPagination v-model:page="page" :total="filtered.length" :items-per-page="PAGE_SIZE" />
                  </div>
               </div>
            </section>

            <section v-else>
               <div v-reveal class="grid sm:grid-cols-2 gap-6">
                  <NuxtLink v-for="e in events" :key="e.title" to="/tin-tuc/bai-viet"
                     class="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                     <div class="aspect-video overflow-hidden">
                        <img src="https://picsum.photos/300/200" alt=""
                           class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                     </div>
                     <div class="p-4.5 flex flex-col flex-1">
                        <span class="self-start text-[13px] font-semibold px-2.5 py-1 rounded-full"
                           :class="e.upcoming ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'">
                           {{ e.upcoming ? 'Sắp diễn ra' : 'Đã diễn ra' }}
                        </span>
                        <h3
                           class="mt-3 mb-2 text-lg font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif">
                           {{ e.title }}</h3>
                        <p class="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">{{ e.desc }}</p>
                        <div class="mt-auto text-sm text-gray-500 dark:text-gray-400">{{ e.date }} · {{ e.place }}</div>
                     </div>
                  </NuxtLink>
               </div>
            </section>
         </div>

         <aside class="self-start flex flex-col gap-6 w-full">
            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4.5">
               <h2 class="text-lg font-extrabold tracking-tight mb-3">Tìm kiếm bài viết</h2>
               <div class="relative">
                  <UIcon name="material-symbols:search"
                     class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input v-model="query" type="text" placeholder="Tìm kiếm"
                     class="w-full h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-10 pr-3 text-[15px] outline-none transition-colors focus:border-primary" />
               </div>
            </div>

            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
               <div class="px-4.5 py-4 border-b border-gray-200 dark:border-gray-800">
                  <div class="flex items-center gap-2">
                     <UIcon name="material-symbols:gavel-rounded" class="w-5 h-5 text-primary" />
                     <h2 class="text-lg font-extrabold tracking-tight">Văn bản pháp luật</h2>
                  </div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                     Cập nhật quy định về quản lý, thanh lý tài sản
                  </p>
               </div>
               <div class="divide-y divide-gray-200 dark:divide-gray-800">
                  <a v-for="doc in legalDocs" :key="doc.code" href="#"
                     class="group block px-4.5 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                     <span
                        class="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-1.5">{{
                        doc.code }}</span>
                     <div
                        class="text-[15px] font-semibold leading-snug group-hover:text-primary transition-colors">
                        {{ doc.title }}</div>
                     <div class="mt-1 text-[13px] text-gray-500 dark:text-gray-400">Hiệu lực: {{ doc.effective }}</div>
                  </a>
               </div>
               <div class="px-4.5 py-3 border-t border-gray-200 dark:border-gray-800">
                  <a href="#"
                     class="group text-[15px] font-semibold text-primary inline-flex items-center gap-1 transition-all duration-300 hover:gap-2">
                     Xem tất cả văn bản
                     <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
               </div>
            </div>

            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
               <div class="px-4.5 py-4 border-b border-gray-200 dark:border-gray-800">
                  <h2 class="text-lg font-extrabold tracking-tight">Xem nhiều</h2>
               </div>
               <div class="px-4.5 divide-y divide-gray-200 dark:divide-gray-800">
                  <NuxtLink v-for="post in popular" :key="post.title" to="/tin-tuc/bai-viet"
                     class="group flex items-center gap-3.5 py-3.5">
                     <div class="shrink-0 w-24 aspect-video rounded-lg overflow-hidden">
                        <img src="https://picsum.photos/300/200" alt=""
                           class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                     </div>
                     <div class="min-w-0">
                        <h4
                           class="text-[15px] font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif line-clamp-2">
                           {{ post.title }}</h4>
                        <div class="mt-1 text-[13px] text-gray-500 dark:text-gray-400">{{ post.meta }}</div>
                     </div>
                  </NuxtLink>
               </div>
            </div>
         </aside>
      </div>
   </div>
</template>

<script setup lang="ts">
interface Post {
   tag: string
   title: string
   excerpt: string
   meta: string
}

useHead({ title: 'Tin tức và sự kiện' })

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

const popular = posts.slice(0, 5)

const events = [
   { date: '28/07/2026', upcoming: true, title: 'Hội thảo "Thực tiễn quản lý, thanh lý tài sản trong thủ tục phá sản"', place: 'Khách sạn Melia, Hà Nội', desc: 'Chia sẻ kinh nghiệm xử lý tài sản từ các vụ việc thực tế, với sự tham gia của quản tài viên, luật sư và đại diện tòa án.' },
   { date: '15/08/2026', upcoming: true, title: 'Tọa đàm trực tuyến: Doanh nghiệp cần chuẩn bị gì trước nguy cơ mất khả năng thanh toán', place: 'Trực tuyến qua Zoom', desc: 'Giải đáp trực tiếp các câu hỏi của doanh nghiệp về trình tự, thủ tục và phương án tái cơ cấu nợ.' },
   { date: '20/06/2026', upcoming: false, title: 'Lễ ký kết hợp tác chiến lược với các tổ chức tín dụng về xử lý nợ xấu', place: 'Trụ sở VAML, Hà Nội', desc: 'Thiết lập cơ chế phối hợp trong việc quản lý, định giá và thanh lý tài sản bảo đảm.' },
   { date: '05/05/2026', upcoming: false, title: 'Chương trình đào tạo nội bộ: Kỹ năng kiểm kê và định giá tài sản doanh nghiệp', place: 'Trụ sở VAML, Hà Nội', desc: 'Nâng cao nghiệp vụ cho đội ngũ quản tài viên về quy trình kiểm kê, phân loại và định giá tài sản.' }
]

const legalDocs = [
   { code: 'Luật 51/2014/QH13', title: 'Luật Phá sản', effective: '01/01/2015' },
   { code: 'NĐ 22/2015/NĐ-CP', title: 'Quy định chi tiết về quản tài viên và hành nghề quản lý, thanh lý tài sản', effective: '06/04/2015' },
   { code: 'NQ 03/2016/NQ-HĐTP', title: 'Hướng dẫn thi hành một số quy định của Luật Phá sản', effective: '16/08/2016' },
   { code: 'TT 224/2016/TT-BTC', title: 'Quy định mức thu, chế độ thu, nộp và quản lý phí phá sản', effective: '01/01/2017' }
]

const tabs = [
   { key: 'news', label: 'Tin tức' },
   { key: 'events', label: 'Sự kiện' }
] as const

const activeTab = ref<'news' | 'events'>('news')

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

const PAGE_SIZE = 10
const page = ref(1)
const paged = computed(() => filtered.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
watch([activeCategory, query], () => { page.value = 1 })
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
