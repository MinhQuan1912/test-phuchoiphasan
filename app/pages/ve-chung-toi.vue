<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0 hero-img">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-4 sm:px-6 lg:px-9 py-16 sm:py-24 lg:py-28 max-w-3xl text-center">
            <p class="uppercase tracking-[0.14em] text-sm font-bold text-white/85">Về chúng tôi</p>
            <h1
               class="mt-3 mb-3.5 text-[26px] sm:text-4xl lg:text-[42px]/tight font-extrabold tracking-tight text-white">
               Chuyên gia đồng hành cùng doanh nghiệp trong giai đoạn khó khăn
            </h1>
            <p class="text-white/82 text-[17px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto">
               Công ty Hợp danh Quản lý và thanh lý tài sản Việt Nam là một đơn vị hoạt động chuyên nghiệp trong lĩnh
               vực Dịch vụ tư vấn,
               tổ chức quản lý và thanh lý tài sản, quyền tài sản, quyền sử dụng đất, vật tư, thiết bị hàng hóa và các
               dịch vụ khác liên quan
               đến tổ chức đấu giá, tư vấn đầu tư, tư vấn quản lý dự án đầu tư trong và ngoài nước.
            </p>
         </div>
      </section>

      <section class="container mx-auto px-4 sm:px-6 lg:px-9 py-10 sm:py-14">
         <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div v-reveal.left
               class="aspect-4/3 rounded-2xl overflow-hidden flex items-center justify-center md:sticky md:top-24">
               <img src="/images/ve-chung-toi.png" alt="" class="w-full h-full  object-center" />
            </div>
            <div v-reveal.right>
               <div class="flex items-center gap-2.5 mb-6">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight">Lịch sử hình thành và phát triển</h2>
               </div>
               <ol class="relative">
                  <li v-for="(h, i) in history" :key="h.title" class="flex gap-4 sm:gap-5">
                     <div class="flex-none flex flex-col items-center">
                        <div
                           class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/10">
                           <UIcon :name="h.icon" class="w-5 h-5 shrink-0" />
                        </div>
                        <span v-if="i < history.length - 1"
                           class="w-0.5 flex-1 bg-gray-200 dark:bg-gray-800 my-1"></span>
                     </div>
                     <div class="pb-8 last:pb-0">
                        <h3 class="text-[15px] sm:text-lg font-bold leading-10">{{ h.title }}</h3>
                        <p class="text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-500 dark:text-gray-400">
                           {{ h.description }}</p>
                     </div>
                  </li>
               </ol>
            </div>
         </div>
      </section>

      <section class="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
         <div
            class="container mx-auto px-4 sm:px-6 lg:px-9 py-9 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-8">
            <div v-for="(s, i) in stats" :key="s.label" v-reveal :style="{ '--reveal-delay': i * 90 + 'ms' }"
               class="text-center px-2 sm:px-4"
               :class="i > 0 ? 'md:border-l border-gray-200 dark:border-gray-800' : ''">
               <div class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-none">{{ s.value }}
               </div>
               <div class="mt-2 text-[15px] sm:text-base text-gray-500 dark:text-gray-400">{{ s.label }}</div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-4 sm:px-6 lg:px-9 py-16 max-w-5xl">
         <div v-reveal class="mb-11 max-w-2xl mx-auto text-center">
            <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Năng lực dịch vụ</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight">Lĩnh vực chuyên môn</h2>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="(e, i) in expertise" :key="e.title" v-reveal
               :style="{ '--reveal-delay': (i % 3) * 90 + 'ms' }"
               class="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex gap-4">
               <div class="flex-none w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <UIcon :name="e.icon" class="w-5.5 h-5.5 shrink-0" />
               </div>
               <div>
                  <h3 class="text-[16px] font-extrabold mb-1.5">{{ e.title }}</h3>
                  <p class="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ e.desc }}</p>
               </div>
            </div>
         </div>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-4 sm:px-6 lg:px-9 py-10 sm:py-14">
            <div v-reveal class="text-center mb-7 sm:mb-8">
               <p class="uppercase tracking-[0.14em] text-sm font-bold text-primary">Đội ngũ</p>
               <h2 class="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">Chuyên gia của chúng tôi</h2>
            </div>
            <div v-reveal class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5.5 max-w-4xl mx-auto">
               <UPopover v-for="group in team" :key="group.role" mode="click" :content="{ align: 'center' }">
                  <button type="button"
                     class="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 cursor-pointer">
                     <div
                        class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <UIcon :name="group.icon" class="w-7 h-7 shrink-0" />
                     </div>
                     <div class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-none">
                        {{ group.members.length }}
                     </div>
                     <h3 class="mt-2 text-base sm:text-lg font-bold">{{ group.role }}</h3>
                     <p class="mt-1 text-sm text-gray-400 dark:text-gray-500 inline-flex items-center gap-1">
                        Xem danh sách
                        <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
                     </p>
                  </button>

                  <template #content>
                     <div class="p-5 w-80 sm:w-136">
                        <div class="flex items-center gap-2 mb-3">
                           <span class="w-1 h-5 bg-primary rounded-sm"></span>
                           <p class="text-sm font-bold">{{ group.role }}
                              <span class="text-gray-400 dark:text-gray-500 font-normal">({{ group.members.length
                                 }})</span>
                           </p>
                        </div>
                        <UCarousel v-slot="{ item: page }" :items="chunk(group.members, 3)"
                           :arrows="group.members.length > 3" :dots="group.members.length > 3"
                           :ui="{ item: 'basis-full', prev: 'top-10 -translate-y-1/2 start-1 sm:start-1', next: 'top-10 -translate-y-1/2 end-1 sm:end-1', dots: '-bottom-1' }"
                           class="w-full px-10" :class="group.members.length > 3 ? 'pb-6' : 'pb-1'">
                           <div class="flex justify-center gap-2 sm:gap-4 w-full">
                              <div v-for="name in page" :key="name"
                                 class="flex flex-col items-center text-center gap-2 py-3 px-1 basis-1/3">
                                 <div
                                    class="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                                    <UIcon name="i-lucide-user" class="w-7 h-7 shrink-0" />
                                 </div>
                                 <p class="text-xs font-semibold leading-tight">{{ name }}</p>
                              </div>
                           </div>
                        </UCarousel>
                     </div>
                  </template>
               </UPopover>
            </div>
         </div>
      </section>

      <section class="relative overflow-hidden text-white">
         <img src="/images/bg-quote.png" alt="" class="absolute inset-0 w-full h-full object-cover object-center" />
         <div class="absolute inset-0 quote-overlay"></div>
         <div
            class="container mx-auto px-4 sm:px-6 lg:px-9 py-14 sm:py-16 lg:py-18 max-w-5xl relative grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 sm:gap-12 lg:gap-14 items-center">
            <div v-reveal.left class="relative">
               <UIcon name="i-lucide-quote" class="w-9 h-9 sm:w-11 sm:h-11 text-white/25 mb-3 sm:mb-4" />
               <div class="flex items-center gap-3.5 mb-4 sm:mb-5">
                  <span class="w-8.5 h-0.5 bg-white/50"></span>
                  <span class="uppercase tracking-[0.2em] text-xs font-semibold text-white/70">Tôn chỉ hành động</span>
               </div>
               <p
                  class="text-2xl sm:text-3xl lg:text-[33px] font-bold leading-snug sm:leading-[1.32] tracking-tight text-balance">
                  Quản lý và thanh lý tài sản một cách
                  hiệu quả nhất,
                  phục vụ tối đa nhu cầu và lợi ích của khách hàng.
               </p>
            </div>
            <div v-reveal.right class="bg-white/7 border border-white/15 rounded-2xl p-6 sm:p-7.5">
               <p class="text-[15px] sm:text-[15.5px] leading-loose text-white/90">
                  Cam kết <strong class="font-semibold text-white">cung cấp các dịch vụ một cách chuyên nghiệp</strong>
                  đã trở
                  thành phương châm, giá trị và niềm tin của VAML — một phần không thể tách rời trong văn hóa Công ty,
                  đòi hỏi
                  chúng tôi không ngừng tự đổi mới và phát triển.
               </p>
               <div class="mt-5.5 pt-5 border-t border-white/15 flex items-center gap-3">
                  <div class="h-10 w-10 px-2.5 rounded-lg bg-white flex items-center justify-center shrink-0">
                     <img src="/images/logo.png" alt="Quản Tài Viên VN" class="h-full w-auto object-contain" />
                  </div>
                  <div>
                     <div class="font-semibold text-sm">Bùi Phan Anh</div>
                     <div class="text-[12.5px] text-white/60">Giám đốc công ty</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
useHead({ title: 'Về chúng tôi' })

const chunk = <T,>(arr: T[], size: number): T[][] =>
   Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))

const stats = [
   { value: '10', label: 'Năm kinh nghiệm' },
   { value: '50+', label: 'Vụ việc đã và đang xử lý' },
   { value: '100+', label: 'Doanh nghiệp đồng hành' },
   { value: '34', label: 'Tỉnh / thành phủ sóng' }
]

const team = [
   {
      role: 'Quản tài viên',
      icon: 'i-lucide-briefcase',
      members: [
         'Bùi Phan Anh', 'Dương Kim Sơn', 'Lê Vĩnh Thụy', 'Nguyễn Văn Linh',
         'Đào Văn Thắng', 'Võ Thị Hồng Hạnh', 'Nguyễn Đình Minh', 'Nguyễn Hồng Thái',
         'Nguyễn Quốc Thành', 'Lưu Đức Vượng', 'Nguyễn Mạnh Hoàng Sang', 'Nguyễn Thị Nhược Ý',
         'Nguyễn Thị Hằng', 'Bùi Thị Hải Yến', 'Lê Ngọc Trung', 'Nguyễn Thị Hồng Liên'
      ]
   },
   {
      role: 'Luật sư',
      icon: 'i-lucide-scale',
      members: [
         'Bùi Phan Anh', 'Lê Vĩnh Thụy', 'Ngô Vũ Văn Hà', 'Nguyễn Quốc Thành'
      ]
   },
   {
      role: 'Kiểm toán viên',
      icon: 'i-lucide-calculator',
      members: [
         'Lê Việt Hưng', 'Đoàn Văn Hồng', 'Trần Ngọc Hùng', 'Trần Thị Trinh',
         'Nguyễn Văn Hoàng', 'Lê Thị Hoài An', 'Huỳnh Thị Bảo Khám', 'Chu Hoàng Vĩnh'
      ]
   }
]

const history = [
   { title: '10/09/2015', icon: 'i-lucide-building-2', description: 'Công ty Hợp danh Quản lý và Thanh lý tài sản Việt Nam (VAML) được thành lập theo Giấy chứng nhận đăng ký doanh nghiệp số 0106987347 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp.' },
   { title: '15/08/2016', icon: 'i-lucide-badge-check', description: 'Được Sở Tư pháp thành phố Hà Nội công bố là đơn vị đủ điều kiện quản lý và thanh lý tài sản.' },
   { title: '24/09/2025', icon: 'i-lucide-rocket', description: 'Đăng ký thay đổi thông tin hoạt động để việc triển khai việc quản lý, thanh lý tài sản theo thủ tục phá sản đạt hiệu quả.' }
]

const expertise = [
   { icon: 'i-lucide-landmark', title: 'Quản lý tài sản', desc: 'Quản lý các tài sản của khách hàng, bao gồm bất động sản, thiết bị, phương tiện và các tài sản khác.' },
   { icon: 'i-lucide-refresh-cw', title: 'Tái cơ cấu', desc: 'Xây dựng phương án tái cơ cấu, phục hồi doanh nghiệp; tư vấn sắp xếp lại bộ máy, nhân sự và mô hình kinh doanh hiệu quả.' },
   { icon: 'i-lucide-gavel', title: 'Thanh lý tài sản', desc: 'Bán hoặc chuyển nhượng tài sản không còn giá trị sử dụng, giúp doanh nghiệp thu về giá trị tối ưu.' },
   { icon: 'i-lucide-scale', title: 'Tư vấn định giá tài sản', desc: 'Đánh giá giá trị thực tế của tài sản, đồng thời tư vấn phương án xử lý tối ưu, hiệu quả.' },
   { icon: 'i-lucide-briefcase', title: 'Tư vấn pháp lý & tài chính', desc: 'Tư vấn các vấn đề pháp lý, tài chính liên quan đến tài sản trong giao dịch thanh lý, phá sản và tình huống đặc biệt.' },
   { icon: 'i-lucide-file-warning', title: 'Tư vấn xử lý nợ xấu', desc: 'Tham gia thu hồi nợ hoặc thanh lý tài sản của đối tượng nợ xấu, giúp giải quyết các khoản nợ khó thu hồi.' }
]
</script>

<style scoped>
.hero-overlay {
   background:
      radial-gradient(120% 120% at 50% 40%, rgba(8, 16, 30, 0.55) 0%, rgba(8, 16, 30, 0.82) 100%),
      linear-gradient(180deg, rgba(8, 16, 30, 0.55) 0%, rgba(8, 16, 30, 0.7) 100%);
}

.ph-round {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.1) 0 8px, transparent 8px 16px), rgb(231 240 252);
}

.quote-overlay {
   background: rgba(0, 0, 0, 0.6);
}

.dark .quote-overlay {
   background: rgba(0, 0, 0, 0.72);
}

.dark .ph,
.dark .ph-round {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
