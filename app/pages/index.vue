<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-4 sm:px-6 lg:px-9 pt-10 pb-8 sm:pt-14 sm:pb-12">
            <div class="max-w-180">
               <p class="uppercase tracking-[0.16em] text-xs font-bold text-white/80">Cổng thông tin quản lý &amp;
                  thanh lý tài sản</p>
               <h1 class="my-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  Thông tin phá sản minh bạch, cập nhật theo từng quyết định của tòa án
                  <nav></nav>
               </h1>
               <p class="mb-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-xl">
                  Tra cứu thông báo phá sản, theo dõi tin tức pháp lý và nhận tư vấn chuyên sâu về quản lý, thanh lý tài
                  sản doanh nghiệp trên toàn quốc.
               </p>
               <div class="flex flex-wrap gap-3.5 mb-2">
                  <NuxtLink to="/thong-bao-pha-san"
                     class="btn-anim h-12 inline-flex items-center px-6 rounded-lg bg-white text-primary font-bold">
                     Tra cứu thông báo
                  </NuxtLink>
                  <NuxtLink to="/"
                     class="btn-anim h-12 inline-flex items-center px-6 rounded-lg border-[1.5px] border-white/55 text-white font-semibold hover:bg-white/10">
                     Xem dịch vụ
                  </NuxtLink>
               </div>
            </div>
         </div>
      </section>

      <section
         class="container mx-auto px-4 sm:px-6 lg:px-9 pt-11 pb-3 grid lg:grid-cols-[1fr_380px] gap-11 items-start">
         <div>
            <div class="flex items-center gap-2.5 mb-5">
               <span class="w-1 h-5.5 bg-primary rounded-sm"></span>
               <h2 class="text-xl font-extrabold">Tin nổi bật</h2>
            </div>

            <NuxtLink v-reveal :to="`/tin-tuc/${featured.slug}`" class="group block">
               <div class="aspect-[16/8.2] rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="https://picsum.photos/300/200" alt=""
                     class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
               </div>
               <span
                  class="inline-block mt-4 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">{{
                     featured.tag }}</span>
               <h3
                  class="mt-3 mb-2.5 text-[27px] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-primary font-serif">
                  {{ featured.title }}</h3>
               <p class="mb-2.5 text-[17px] leading-relaxed text-gray-500 dark:text-gray-400">{{ featured.excerpt }}</p>
               <div class="text-[15px] text-gray-500 dark:text-gray-400">{{ featured.meta }}</div>
            </NuxtLink>

            <div class="h-px bg-gray-200 dark:bg-gray-800 my-6.5"></div>

            <NuxtLink v-for="(post, i) in secondary" :key="post.slug" v-reveal
               :style="{ '--reveal-delay': i * 90 + 'ms' }" :to="`/tin-tuc/${post.slug}`"
               class="group flex flex-col sm:flex-row gap-4 sm:gap-4.5 mb-6 last:mb-0">
               <div class="w-full sm:w-64 lg:w-80 shrink-0 aspect-16/10 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/300/200" alt=""
                     class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
               </div>
               <div>
                  <span
                     class="inline-block bg-primary/10 text-primary text-[13px] font-semibold px-2.5 py-1 rounded-full">{{
                        post.tag }}</span>
                  <h4
                     class="mt-2 mb-1.5 text-[19px] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-primary font-serif">
                     {{ post.title }}</h4>
                  <p class="mb-2.5 text-[17px] leading-relaxed text-gray-500 dark:text-gray-400">{{ post.excerpt }}
                  </p>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ post.time }}</div>
               </div>
            </NuxtLink>
         </div>

         <aside v-reveal.right class="flex flex-col gap-8">
            <div>
               <div class="flex items-center gap-2.5 mb-1.5">
                  <span class="w-1 h-5 bg-primary rounded-sm"></span>
                  <h3 class="text-[19px] font-extrabold">Mới cập nhật</h3>
               </div>
               <NuxtLink v-for="(item, i) in latest" :key="item.slug" :to="`/tin-tuc/${item.slug}`"
                  class="flex gap-3.5 py-3.5 group"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  <div class="w-24 shrink-0 aspect-16/10 rounded-lg overflow-hidden">
                     <img src="https://picsum.photos/300/200" alt=""
                        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                  <div class="min-w-0">
                     <h4
                        class="text-[15px] font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors font-serif line-clamp-2">
                        {{ item.title }}</h4>
                     <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.meta }}</div>
                  </div>
               </NuxtLink>
            </div>

            <div>
               <div class="flex items-center gap-2.5 mb-1.5">
                  <span class="w-1 h-5 bg-primary rounded-sm"></span>
                  <h3 class="text-[19px] font-extrabold">Thông báo mới nhất</h3>
               </div>
               <NuxtLink v-for="(a, i) in latestAnnouncements" :key="a.slug"
                  :to="`/thong-bao-pha-san/${a.slug}`" class="flex gap-3.5 py-3.5 group"
                  :class="i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''">
                  <div class="w-24 shrink-0 aspect-16/10 rounded-lg overflow-hidden">
                     <img src="https://picsum.photos/300/200" alt=""
                        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                  <div class="min-w-0">
                     <h4
                        class="text-[15px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {{ a.title }}</h4>
                     <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ a.type }} · {{ a.date }}</div>
                  </div>
               </NuxtLink>
            </div>
         </aside>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800 mt-8">
         <div class="container mx-auto px-4 sm:px-6 lg:px-9 py-12">
            <div v-reveal class="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
               <p
                  class="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-primary">
                  <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Lĩnh vực hoạt động
               </p>
               <h2
                  class="mt-3.5 text-3xl sm:text-4xl lg:text-[42px]/[1.1] font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Dịch vụ của chúng tôi
               </h2>
            </div>
            <div v-reveal class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
               <NuxtLink v-for="svc in services" :key="svc.title" :to="svc.link" class="group flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6
           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div
                     class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                     {{ svc.n }}
                  </div>
                  <h3 class="text-[19px] font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                     {{ svc.title }}
                  </h3>
                  <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-3.5">
                     {{ svc.desc }}
                  </p>
                  <div
                     class="text-base font-semibold text-primary inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                     Tìm hiểu
                     <span class="transition-transform duration-300 group-hover:translate-x-1">
                        →
                     </span>
                  </div>
               </NuxtLink>
            </div>
         </div>
      </section>

      <BankruptcyProcess />

   </div>``
</template>

<script setup lang="ts">
import { announcements } from '~/utils/announcements'

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

const latestAnnouncements = announcements.slice(0, 5)

const services = [
   { n: '01', title: 'Phá sản', desc: 'Hỗ trợ nộp đơn, mở thủ tục và đại diện trong suốt quá trình giải quyết phá sản.', link: '/dich-vu/pha-san' },
   { n: '02', title: 'Phục hồi', desc: 'Xây dựng và triển khai phương án phục hồi hoạt động kinh doanh khả thi.', link: '/dich-vu/phuc-hoi' },
   { n: '03', title: 'Tư vấn pháp lý', desc: 'Tư vấn quyền, nghĩa vụ của chủ nợ, con nợ và các bên liên quan trong vụ việc.', link: '/dich-vu/tu-van' },
   { n: '04', title: 'Quản lý tài sản', desc: 'Kiểm kê, định giá, bảo quản và thanh lý tài sản minh bạch, đúng quy định.', link: '/dich-vu/quan-ly-tai-san' }
]


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
