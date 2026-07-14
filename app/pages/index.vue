<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-9 pt-[70px] pb-[60px]">
            <div class="max-w-[720px]">
               <p class="uppercase tracking-[0.16em] text-xs font-bold text-white/80">Cổng thông tin phá sản &amp; phục
                  hồi doanh nghiệp</p>
               <h1 class="my-4 text-[46px]/tight font-extrabold tracking-tight text-white">
                  Thông tin phá sản minh bạch, cập nhật theo từng quyết định của tòa án
               </h1>
               <p class="mb-7 text-lg leading-relaxed text-white/85 max-w-xl">
                  Tra cứu thông báo phá sản, theo dõi tin tức pháp lý và nhận tư vấn chuyên sâu về quản lý, thanh lý tài
                  sản doanh nghiệp trên toàn quốc.
               </p>
               <div class="flex flex-wrap gap-3.5 mb-8">
                  <NuxtLink to="/thong-bao-pha-san"
                     class="h-12 inline-flex items-center px-6 rounded-lg bg-white text-primary font-bold">
                     Tra cứu thông báo
                  </NuxtLink>
                  <NuxtLink to="/"
                     class="h-12 inline-flex items-center px-6 rounded-lg border-[1.5px] border-white/55 text-white font-semibold">
                     Xem dịch vụ
                  </NuxtLink>
               </div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-9 pt-11 pb-3 grid lg:grid-cols-[1fr_380px] gap-11 items-start">
         <div>
            <div class="flex items-center gap-2.5 mb-5">
               <span class="w-1 h-5.5 bg-primary rounded-sm"></span>
               <h2 class="text-xl font-extrabold">Tin nổi bật</h2>
            </div>

            <NuxtLink :to="`/tin-tuc/${featured.slug}`" class="block">
               <div class="aspect-[16/8.2] rounded-2xl flex items-center justify-center">
                  <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
               </div>
               <span
                  class="inline-block mt-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{{
                     featured.tag }}</span>
               <h3 class="mt-3 mb-2.5 text-[27px] font-extrabold leading-snug tracking-tight">{{ featured.title }}</h3>
               <p class="mb-2.5 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{{ featured.excerpt }}</p>
               <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ featured.meta }}</div>
            </NuxtLink>

            <div class="h-px bg-gray-200 dark:bg-gray-800 my-6.5"></div>

            <NuxtLink v-for="post in secondary" :key="post.slug" :to="`/tin-tuc/${post.slug}`"
               class="flex gap-4.5 mb-5.5 last:mb-0">
               <div class="w-45 shrink-0 aspect-16/10 rounded-xl flex items-center justify-center">
                  <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
               </div>
               <div>
                  <span
                     class="inline-block bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">{{
                        post.tag }}</span>
                  <h4 class="mt-2 mb-1.5 text-[17px] font-bold leading-snug">{{ post.title }}</h4>
                  <p class="mb-2.5 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{{ post.excerpt }}
                  </p>
                  <div class="text-xs text-gray-500 dark:text-gray-400">{{ post.time }}</div>
               </div>
            </NuxtLink>
         </div>

         <aside>
            <div class="flex items-center gap-2.5 mb-1.5">
               <span class="w-1 h-5 bg-primary rounded-sm"></span>
               <h3 class="text-[17px] font-extrabold">Mới cập nhật</h3>
            </div>
            <NuxtLink v-for="(item, i) in latest" :key="item.slug" :to="`/tin-tuc/${item.slug}`"
               class="flex gap-3 py-3.5 group" :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
               <span class="font-extrabold text-[15px] text-primary min-w-5">{{ String(i + 1).padStart(2, '0') }}</span>
               <div>
                  <div class="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">{{
                     item.title }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ item.meta }}</div>
               </div>
            </NuxtLink>
         </aside>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800 mt-8">
         <div class="container mx-auto px-9 py-12">
            <div class="text-center mb-8">
               <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Chúng tôi làm gì</p>
               <h2 class="mt-3 text-3xl font-extrabold tracking-tight">Dịch vụ của chúng tôi</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
               <NuxtLink v-for="svc in services" :key="svc.title" :to="svc.link" class="group flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6
           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div
                     class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
         <div class="container mx-auto px-9 py-12">
            <div class="flex flex-wrap items-end justify-between gap-4 mb-4.5">
               <div class="flex items-center gap-2.5">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-2xl font-extrabold tracking-tight">Thông báo phá sản mới nhất</h2>
               </div>
               <NuxtLink to="/thong-bao-pha-san" class="text-[13px] font-semibold text-primary">Xem tất cả →</NuxtLink>
            </div>

            <div class="flex flex-wrap gap-2.5 mb-3.5">
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
                  class="hidden md:grid grid-cols-[210px_1fr_160px_170px_100px] gap-4 items-center px-[18px] py-3.5 bg-gray-100 dark:bg-gray-800/40 uppercase tracking-wide text-[11px] font-bold text-gray-500 dark:text-gray-400">
                  <div>Tòa án</div>
                  <div>Nội dung thông báo</div>
                  <div>Loại</div>
                  <div>Số quyết định</div>
                  <div>Ngày</div>
               </div>
               <div v-for="(a, i) in announcementsPreview" :key="a.no"
                  class="grid md:grid-cols-[210px_1fr_160px_170px_100px] gap-1.5 md:gap-4 md:items-center px-[18px] py-[15px] hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
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
         </div>
      </section>

      <section class="container mx-auto px-9 pb-12">
         <div class="bg-primary text-white rounded-2xl p-9 flex flex-wrap items-center justify-between gap-6">
            <div>
               <h3 class="text-2xl font-extrabold mb-1.5">Cần hỗ trợ về thủ tục phá sản?</h3>
               <p class="text-white/85 leading-relaxed">Liên hệ để được đội ngũ chuyên gia tư vấn miễn phí.</p>
            </div>
            <div class="flex flex-wrap gap-3">
               <NuxtLink to="/"
                  class="h-11 inline-flex items-center px-5 rounded-lg bg-white text-primary font-bold">Liên hệ tư vấn
               </NuxtLink>
               <a href="tel:19006789"
                  class="h-11 inline-flex items-center px-5 rounded-lg border-[1.5px] border-white/60 text-white font-semibold">Gọi
                  1900 6789</a>
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

const featured = {
   slug: 'tand-hcm-mo-thu-tuc-pha-san-bds',
   tag: 'Thời sự',
   title: 'TAND TP.HCM mở thủ tục phá sản đối với doanh nghiệp bất động sản lớn phía Nam',
   excerpt: 'Quyết định được ban hành sau khi doanh nghiệp mất khả năng thanh toán các khoản nợ đến hạn kéo dài; quản tài viên đã được chỉ định để kiểm kê và quản lý tài sản.',
   meta: 'Thời sự · 2 giờ trước'
}

const secondary = [
   { slug: 'sua-doi-luat-pha-san-2014', tag: 'Pháp luật', title: 'Sửa đổi Luật Phá sản 2014: 5 điểm mới doanh nghiệp cần nắm rõ', excerpt: 'Quyết định được ban hành sau khi doanh nghiệp mất khả năng thanh toán các khoản nợ đến hạn kéo dài; quản tài viên đã được chỉ định để kiểm kê và quản lý tài sản.', time: '4 giờ trước' },
   { slug: 'tai-co-cau-no-thanh-cong', tag: 'Phân tích', title: 'Tái cơ cấu nợ thành công: bài học từ một doanh nghiệp sản xuất', excerpt: 'Quyết định được ban hành sau khi doanh nghiệp mất khả năng thanh toán các khoản nợ đến hạn kéo dài; quản tài viên đã được chỉ định để kiểm kê và quản lý tài sản.', time: 'Hôm qua' }
]

const latest = [
   { slug: 'thu-lao-quan-tai-vien', title: 'Quy trình chỉ định và thù lao của quản tài viên theo quy định mới', meta: 'Pháp luật · 5 giờ trước' },
   { slug: 'thu-tu-uu-tien-thanh-toan', title: 'Thứ tự ưu tiên thanh toán khi doanh nghiệp bị tuyên bố phá sản', meta: 'Pháp luật · 7 giờ trước' },
   { slug: 'hoi-nghi-chu-no', title: 'Hội nghị chủ nợ: điều kiện hợp lệ và quyền biểu quyết', meta: 'Doanh nghiệp · Hôm qua' },
   { slug: 'phan-biet-pha-san-giai-the', title: 'Phân biệt phá sản và giải thể doanh nghiệp dưới góc nhìn pháp lý', meta: 'Hỏi đáp · Hôm qua' },
   { slug: 'dinh-gia-tai-san', title: 'Nguyên tắc định giá tài sản trong thủ tục phá sản', meta: 'Phân tích · 2 ngày trước' }
]

const services = [
   { n: '01', title: 'Phá sản', desc: 'Hỗ trợ nộp đơn, mở thủ tục và đại diện trong suốt quá trình giải quyết phá sản.', link: '/dich-vu/pha-san' },
   { n: '02', title: 'Phục hồi', desc: 'Xây dựng và triển khai phương án phục hồi hoạt động kinh doanh khả thi.', link: '/dich-vu/phuc-hoi' },
   { n: '03', title: 'Tư vấn pháp lý', desc: 'Tư vấn quyền, nghĩa vụ của chủ nợ, con nợ và các bên liên quan trong vụ việc.', link: '/dich-vu/tu-van' },
   { n: '04', title: 'Quản lý tài sản', desc: 'Kiểm kê, định giá, bảo quản và thanh lý tài sản minh bạch, đúng quy định.', link: '/dich-vu/quan-ly-tai-san' }
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

const courts = computed(() => ['Tất cả', ...new Set(announcements.map((a) => a.court))])

const announcementsPreview = computed(() =>
   (activeCourt.value === 'Tất cả'
      ? announcements
      : announcements.filter((a) => a.court === activeCourt.value)
   ).slice(0, 5)
)

</script>

<style scoped>
.hero-overlay {
   background: linear-gradient(90deg,
         rgba(8, 16, 30, 0.9) 0%,
         rgba(8, 16, 30, 0.75) 35%,
         rgba(8, 16, 30, 0.3) 65%,
         transparent 100%);
}

.ph {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.09) 0 10px, transparent 10px 20px), rgb(231 240 252);
}

.dark .ph {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
