<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden bg-primary text-white">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/55"></div>
         </div>
         <div class="relative container mx-auto px-6 py-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
               <p class="uppercase tracking-[0.14em] text-xs font-bold text-white/80">Pháp lý doanh nghiệp</p>
               <h1 class="my-4 text-4xl/tight font-extrabold tracking-tight">
                  Đồng hành cùng doanh nghiệp trong thủ tục phá sản &amp; phục hồi
               </h1>
               <p class="text-white/85 text-lg leading-relaxed max-w-xl mb-7">
                  Cập nhật thông báo phá sản từ các tòa án, tin tức pháp lý và tư vấn chuyên sâu về quản lý,
                  thanh lý tài sản doanh nghiệp.
               </p>
               <div class="flex flex-wrap gap-3.5">
                  <NuxtLink to="/dich-vu"
                     class="h-12 inline-flex items-center px-6 rounded-lg bg-white text-primary font-bold">
                     Xem dịch vụ
                  </NuxtLink>
                  <NuxtLink to=""
                     class="h-12 inline-flex items-center px-6 rounded-lg border-[1.5px] border-white/60 text-white font-semibold">
                     Liên hệ tư vấn
                  </NuxtLink>
               </div>
            </div>

            <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl p-6 shadow-2xl">
               <span class="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Tiêu
                  điểm</span>
               <h3 class="mt-3.5 mb-2 text-xl font-extrabold leading-snug">
                  TAND TP.HCM mở thủ tục phá sản với doanh nghiệp bất động sản lớn phía Nam
               </h3>
               <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  Quản tài viên đã được chỉ định để kiểm kê và quản lý tài sản sau quyết định của tòa án.
               </p>
               <div class="border-t border-gray-200 dark:border-gray-800 pt-3.5 flex flex-col gap-3">
                  <NuxtLink to="/tin-tuc" class="text-sm font-semibold hover:text-primary transition-colors">Sửa đổi
                     Luật Phá sản 2014: 5 điểm mới cần biết</NuxtLink>
                  <NuxtLink to="/tin-tuc" class="text-sm font-semibold hover:text-primary transition-colors">Thứ tự ưu
                     tiên thanh toán khi phá sản</NuxtLink>
               </div>
            </div>
         </div>
      </section>

      <section class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-6 py-9 grid grid-cols-2 md:grid-cols-4">
            <div v-for="(s, i) in stats" :key="s.label" class="text-center px-4"
               :class="i > 0 ? 'md:border-l border-gray-200 dark:border-gray-800' : ''">
               <div class="text-4xl font-extrabold text-primary tracking-tight leading-none">{{ s.value }}</div>
               <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ s.label }}</div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-6 py-10 grid lg:grid-cols-[1fr_340px] gap-9 items-start">
         <div>
            <div class="flex items-center gap-2.5 mb-5">
               <span class="w-1 h-5.5 bg-primary rounded-sm"></span>
               <h2 class="text-xl font-extrabold">Tin tức</h2>
            </div>
            <div class="flex flex-col gap-5">
               <article v-for="post in news" :key="post.title"
                  class="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                  <div class="ph w-52 shrink-0 flex items-center justify-center overflow-hidden">
                     <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-5">
                     <span
                        class="inline-block bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">{{
                           post.tag }}</span>
                     <h3 class="mt-2.5 mb-2 text-lg font-bold leading-snug">
                        <NuxtLink to="/tin-tuc" class="hover:text-primary transition-colors">{{ post.title }}</NuxtLink>
                     </h3>
                     <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{{ post.excerpt }}</p>
                     <div class="text-xs text-gray-500 dark:text-gray-400">{{ post.time }}</div>
                  </div>
               </article>
            </div>
         </div>

         <aside class="flex flex-col gap-5">
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
               <div class="flex items-center gap-2.5 mb-1.5">
                  <span class="w-1 h-4.5 bg-primary rounded-sm"></span>
                  <h3 class="text-[15px] font-extrabold">Thông báo phá sản mới</h3>
               </div>
               <div v-for="(a, i) in announcements.slice(0, 3)" :key="a.no" class="py-3.5"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  <div class="text-[11px] font-semibold text-primary">{{ a.court }}</div>
                  <NuxtLink to="/thong-bao-pha-san"
                     class="block my-1.5 text-sm font-semibold leading-snug hover:text-primary transition-colors">{{
                        a.title }}</NuxtLink>
                  <div class="text-[11px] text-gray-500 dark:text-gray-400">{{ a.date }}</div>
               </div>
            </div>

            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5">
               <h3 class="text-[15px] font-extrabold mb-3.5">Dịch vụ của chúng tôi</h3>
               <NuxtLink v-for="(svc, i) in services" :key="svc.title" :to="svc.link"
                  class="flex items-center justify-between py-2.5 text-sm font-semibold hover:text-primary transition-colors"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  {{ svc.title }}<span class="text-primary">→</span>
               </NuxtLink>
            </div>
         </aside>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-6 py-12">
            <div class="text-center mb-8">
               <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Chúng tôi làm gì</p>
               <h2 class="mt-3 mb-2 text-3xl font-extrabold tracking-tight">Dịch vụ của chúng tôi</h2>
               <p class="text-gray-500 dark:text-gray-400">Đồng hành trọn quá trình phá sản và phục hồi doanh nghiệp.
               </p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
               <NuxtLink v-for="svc in services" :key="svc.title" :to="svc.link" class="group flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6
           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                     {{ svc.n }}
                  </div>
                  <h3 class="text-[17px] font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                     {{ svc.title }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3.5">
                     {{ svc.desc }}
                  </p>
                  <div
                     class="text-sm font-semibold text-primary inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                     Tìm hiểu
                     <span class="transition-transform duration-300 group-hover:translate-x-1">
                        →
                     </span>
                  </div>
               </NuxtLink>
            </div>
         </div>
      </section>

      <section class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-6 py-12">
            <div class="flex flex-wrap items-end justify-between gap-4 mb-5">
               <div class="flex items-center gap-2.5">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-2xl font-extrabold tracking-tight">Thông báo phá sản</h2>
               </div>
            </div>

            <div class="flex flex-wrap gap-2.5 mb-4">
               <button v-for="court in courts" :key="court" type="button"
                  class="h-9 px-4 inline-flex items-center rounded-full text-[13px] font-semibold border transition-all"
                  :class="court === activeCourt
                     ? 'bg-primary text-white border-primary'
                     : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
                  @click="activeCourt = court">
                  {{ court }}
               </button>
            </div>

            <div class="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
               <div
                  class="hidden md:grid grid-cols-[210px_1fr_160px_170px_100px] gap-4 items-center px-5 py-3.5 bg-gray-100 dark:bg-gray-800/40 uppercase tracking-wide text-[11px] font-bold text-gray-500 dark:text-gray-400">
                  <div>Tòa án</div>
                  <div>Nội dung thông báo</div>
                  <div>Loại</div>
                  <div>Số quyết định</div>
                  <div>Ngày</div>
               </div>
               <div v-for="(a, i) in filteredAnnouncements" :key="a.no"
                  class="grid md:grid-cols-[210px_1fr_160px_170px_100px] gap-1.5 md:gap-4 md:items-center px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  <div class="text-[13px] font-semibold text-primary">{{ a.court }}</div>
                  <NuxtLink to="/thong-bao-pha-san"
                     class="text-sm font-semibold leading-snug hover:text-primary transition-colors">{{ a.title }}
                  </NuxtLink>
                  <div><span
                        class="inline-block bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">{{
                           a.type }}</span></div>
                  <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ a.no }}</div>
                  <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ a.date }}</div>
               </div>
            </div>

            <div class="mt-4.5 text-center">
               <NuxtLink to="/thong-bao-pha-san"
                  class="inline-flex items-center h-10.5 px-6 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                  Xem tất cả thông báo →
               </NuxtLink>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
interface Announcement {
   court: string
   title: string
   type: string
   no: string
   date: string
}

useHead({ title: 'Trang chủ' })

const stats = [
   { value: '1.248', label: 'Vụ việc đã cập nhật' },
   { value: '860', label: 'Doanh nghiệp được hỗ trợ' },
   { value: '210', label: 'Quản tài viên hành nghề' },
   { value: '34', label: 'Tỉnh / thành phủ sóng' }
]

const news = [
   { tag: 'Pháp luật', title: 'Quy trình chỉ định và thù lao của quản tài viên theo quy định mới', excerpt: 'Những thay đổi về điều kiện hành nghề, phạm vi trách nhiệm và cách tính thù lao của quản tài viên.', time: '5 giờ trước' },
   { tag: 'Doanh nghiệp', title: 'Hội nghị chủ nợ: điều kiện hợp lệ và quyền biểu quyết', excerpt: 'Vai trò của hội nghị chủ nợ trong việc thông qua phương án phục hồi hoạt động kinh doanh.', time: 'Hôm qua' },
   { tag: 'Phân tích', title: 'Nguyên tắc định giá tài sản trong thủ tục phá sản', excerpt: 'Phương pháp định giá, tổ chức thẩm định và bán đấu giá tài sản để bảo đảm quyền lợi các bên.', time: '2 ngày trước' }
]

const services = [
   { n: '01', title: 'Phá sản', desc: 'Hỗ trợ nộp đơn, mở thủ tục và đại diện trong suốt quá trình giải quyết phá sản.', link: '/dich-vu/pha-san' },
   { n: '02', title: 'Phục hồi', desc: 'Xây dựng và triển khai phương án phục hồi hoạt động kinh doanh khả thi.', link: '/dich-vu/phuc-hoi' },
   { n: '03', title: 'Tư vấn', desc: 'Tư vấn quyền, nghĩa vụ của chủ nợ, con nợ và các bên liên quan trong vụ việc.', link: '/dich-vu/tu-van' },
   { n: '04', title: 'Quản lý tài sản', desc: 'Kiểm kê, định giá, bảo quản và thanh lý tài sản minh bạch, đúng quy định pháp luật.', link: '/dich-vu/quan-ly-tai-san' }
]

const announcements: Announcement[] = [
   { court: 'TAND TP.HCM', title: 'Công ty CP Đầu tư Nam Phú', type: 'Mở thủ tục', no: '151/2026/QĐ-MTTPS', date: '13/07/2026' },
   { court: 'TAND tỉnh Bình Dương', title: 'Công ty TNHH Thương mại ABC', type: 'Mở thủ tục', no: '145/2026/QĐ-MTTPS', date: '12/07/2026' },
   { court: 'TAND TP. Hà Nội', title: 'Công ty CP Xây dựng Đại Phát', type: 'Hội nghị chủ nợ', no: '132/2026/TB-TA', date: '11/07/2026' },
   { court: 'TAND TP. Hà Nội', title: 'Công ty TNHH Công nghệ Minh Quang', type: 'Mở thủ tục', no: '129/2026/QĐ-MTTPS', date: '10/07/2026' },
   { court: 'TAND tỉnh Đồng Nai', title: 'Công ty TNHH Dệt may Hồng Ân', type: 'Tuyên bố phá sản', no: '118/2026/QĐ-TBPS', date: '09/07/2026' },
   { court: 'TAND TP.HCM', title: 'Công ty CP Địa ốc Tân Thành', type: 'Bán đấu giá', no: '110/2026/TB-QTV', date: '08/07/2026' },
   { court: 'TAND tỉnh Bình Dương', title: 'Công ty TNHH Gỗ Phú Thịnh', type: 'Tuyên bố phá sản', no: '140/2026/QĐ-TBPS', date: '07/07/2026' },
   { court: 'TAND tỉnh Đồng Nai', title: 'Công ty CP Thực phẩm Tân Tiến', type: 'Hội nghị chủ nợ', no: '121/2026/TB-TA', date: '06/07/2026' },
   { court: 'TAND TP. Đà Nẵng', title: 'Công ty CP Du lịch Biển Xanh', type: 'Mở thủ tục', no: '098/2026/QĐ-MTTPS', date: '05/07/2026' },
   { court: 'TAND TP. Đà Nẵng', title: 'Công ty TNHH Vận tải Trường Sơn', type: 'Bán đấu giá', no: '092/2026/TB-QTV', date: '03/07/2026' }
]

const activeCourt = ref('Tất cả')
const email = ref('')

const courts = computed(() => ['Tất cả', ...new Set(announcements.map((a) => a.court))])

const filteredAnnouncements = computed(() =>
   activeCourt.value === 'Tất cả'
      ? announcements
      : announcements.filter((a) => a.court === activeCourt.value)
)

</script>

<style scoped>
.ph {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.09) 0 10px, transparent 10px 20px), rgb(231 240 252);
}

.dark .ph {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
