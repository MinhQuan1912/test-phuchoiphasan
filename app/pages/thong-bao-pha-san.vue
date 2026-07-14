<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-9 pt-14 pb-12">
            <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2.5">Thông báo phá sản</h1>
            <p class="text-[16.5px] leading-relaxed text-white/82 max-w-2xl">
               Tra cứu các quyết định mở thủ tục, triệu tập hội nghị chủ nợ, bán đấu giá và tuyên bố phá sản do tòa án
               nhân dân các cấp ban hành.
            </p>
         </div>
      </section>

      <section class="container mx-auto px-9 pt-7">
         <div class="flex flex-wrap gap-3 items-center justify-between">
            <div class="relative flex-1 min-w-[280px] max-w-[440px]">
               <UIcon name="material-symbols:search"
                  class="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-500" />
               <input v-model="query" type="text" placeholder="Tìm theo tên doanh nghiệp hoặc số quyết định..."
                  class="w-full h-11 rounded-[10px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pl-[42px] pr-3.5 text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <div class="relative">
               <select v-model="activeCourt"
                  class="h-11 rounded-[10px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pl-3.5 pr-9 text-sm outline-none cursor-pointer appearance-none focus:border-primary transition-colors">
                  <option v-for="c in courts" :key="c" :value="c">{{ c }}</option>
               </select>
               <UIcon name="material-symbols:keyboard-arrow-down"
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
         </div>

         <div class="flex flex-wrap gap-2.5 mt-4">
            <button v-for="t in types" :key="t" type="button"
               class="h-9 px-4 inline-flex items-center rounded-full text-[13px] font-semibold border transition-all"
               :class="t === activeType
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
               @click="activeType = t">
               {{ t }}
            </button>
         </div>

         <div class="mt-4 text-[13px] text-gray-500 dark:text-gray-400">
            Tìm thấy <strong class="text-gray-900 dark:text-gray-100">{{ filtered.length }}</strong> thông báo
         </div>
      </section>

      <section class="container mx-auto px-9 pt-3.5 pb-2">
         <div class="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
            <div
               class="hidden md:grid grid-cols-[200px_1fr_150px_170px_110px] gap-4 items-center px-5 py-3.5 bg-gray-100 dark:bg-gray-800/40 uppercase tracking-wide text-[11px] font-bold text-gray-500 dark:text-gray-400">
               <div>Tòa án</div>
               <div>Doanh nghiệp / nội dung</div>
               <div>Loại</div>
               <div>Số quyết định</div>
               <div>Ngày</div>
            </div>

            <template v-if="filtered.length">
               <div v-for="(a, i) in filtered" :key="a.no"
                  class="grid md:grid-cols-[200px_1fr_150px_170px_110px] gap-1.5 md:gap-4 md:items-center px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  <div class="text-[13px] font-semibold text-primary">{{ a.court }}</div>
                  <NuxtLink :to="`/thong-bao-pha-san/${a.slug}`"
                     class="text-[14.5px] font-semibold leading-snug hover:text-primary transition-colors">{{ a.title }}
                  </NuxtLink>
                  <div><span
                        class="inline-block bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">{{
                        a.type }}</span></div>
                  <div class="text-[13px] text-gray-500 dark:text-gray-400 font-mono">{{ a.no }}</div>
                  <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ a.date }}</div>
               </div>
            </template>
            <div v-else class="px-5 py-12 text-center border-t border-gray-200 dark:border-gray-800">
               <div class="text-base font-bold mb-1.5">Không tìm thấy thông báo phù hợp</div>
               <div class="text-sm text-gray-500 dark:text-gray-400">Thử từ khóa khác, chọn tòa án hoặc loại "Tất cả".
               </div>
            </div>
         </div>

         <nav v-if="filtered.length" class="flex items-center justify-center gap-2 mt-6.5" aria-label="Phân trang">
            <button type="button"
               class="w-[38px] h-[38px] flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400"
               disabled>‹</button>
            <button v-for="p in 3" :key="p" type="button"
               class="w-[38px] h-[38px] flex items-center justify-center rounded-lg text-sm transition-colors" :class="p === page
                  ? 'bg-primary text-white font-semibold'
                  : 'border border-gray-200 dark:border-gray-800 hover:border-primary'" @click="page = p">
               {{ p }}
            </button>
            <button type="button"
               class="w-[38px] h-[38px] flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-lg text-sm hover:border-primary transition-colors">›</button>
         </nav>
      </section>
   </div>
</template>

<script setup lang="ts">
interface Announcement {
   slug: string
   court: string
   title: string
   type: string
   no: string
   date: string
}

useHead({ title: 'Thông báo phá sản' })

const announcements: Announcement[] = [
   { slug: 'nam-phu', court: 'TAND TP.HCM', title: 'Công ty CP Đầu tư Nam Phú', type: 'Mở thủ tục', no: '151/2026/QĐ-MTTPS', date: '13/07/2026' },
   { slug: 'abc', court: 'TAND tỉnh Bình Dương', title: 'Công ty TNHH Thương mại ABC', type: 'Mở thủ tục', no: '145/2026/QĐ-MTTPS', date: '12/07/2026' },
   { slug: 'dai-phat', court: 'TAND TP. Hà Nội', title: 'Công ty CP Xây dựng Đại Phát', type: 'Hội nghị chủ nợ', no: '132/2026/TB-TA', date: '11/07/2026' },
   { slug: 'minh-quang', court: 'TAND TP. Hà Nội', title: 'Công ty TNHH Công nghệ Minh Quang', type: 'Mở thủ tục', no: '129/2026/QĐ-MTTPS', date: '10/07/2026' },
   { slug: 'hong-an', court: 'TAND tỉnh Đồng Nai', title: 'Công ty TNHH Dệt may Hồng Ân', type: 'Tuyên bố phá sản', no: '118/2026/QĐ-TBPS', date: '09/07/2026' },
   { slug: 'tan-thanh', court: 'TAND TP.HCM', title: 'Công ty CP Địa ốc Tân Thành', type: 'Bán đấu giá', no: '110/2026/TB-QTV', date: '08/07/2026' },
   { slug: 'phu-thinh', court: 'TAND tỉnh Bình Dương', title: 'Công ty TNHH Gỗ Phú Thịnh', type: 'Tuyên bố phá sản', no: '140/2026/QĐ-TBPS', date: '07/07/2026' },
   { slug: 'tan-tien', court: 'TAND tỉnh Đồng Nai', title: 'Công ty CP Thực phẩm Tân Tiến', type: 'Hội nghị chủ nợ', no: '121/2026/TB-TA', date: '06/07/2026' },
   { slug: 'bien-xanh', court: 'TAND TP. Đà Nẵng', title: 'Công ty CP Du lịch Biển Xanh', type: 'Mở thủ tục', no: '098/2026/QĐ-MTTPS', date: '05/07/2026' },
   { slug: 'truong-son', court: 'TAND TP. Đà Nẵng', title: 'Công ty TNHH Vận tải Trường Sơn', type: 'Bán đấu giá', no: '092/2026/TB-QTV', date: '03/07/2026' },
   { slug: 'thanh-dat', court: 'TAND TP.HCM', title: 'Công ty CP Cơ khí Thành Đạt', type: 'Hội nghị chủ nợ', no: '088/2026/TB-TA', date: '02/07/2026' },
   { slug: 'tan-phu', court: 'TAND tỉnh Bình Dương', title: 'Công ty TNHH Nhựa Tân Phú', type: 'Tuyên bố phá sản', no: '081/2026/QĐ-TBPS', date: '01/07/2026' }
]

const types = ['Tất cả', 'Mở thủ tục', 'Hội nghị chủ nợ', 'Bán đấu giá', 'Tuyên bố phá sản']

const query = ref('')
const activeCourt = ref('Tất cả')
const activeType = ref('Tất cả')
const page = ref(1)

const courts = computed(() => ['Tất cả', ...new Set(announcements.map((a) => a.court))])

const filtered = computed(() => {
   const q = query.value.trim().toLowerCase()
   return announcements.filter((a) => {
      const matchCourt = activeCourt.value === 'Tất cả' || a.court === activeCourt.value
      const matchType = activeType.value === 'Tất cả' || a.type === activeType.value
      const matchQuery = !q || a.title.toLowerCase().includes(q) || a.no.toLowerCase().includes(q)
      return matchCourt && matchType && matchQuery
   })
})
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
