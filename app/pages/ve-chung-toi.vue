<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0 hero-img">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-4 sm:px-6 lg:px-9 py-7 sm:py-9 lg:py-11 max-w-3xl text-center">
            <p class="uppercase tracking-[0.14em] text-xs font-bold text-white/85">Về chúng tôi</p>
            <h1
               class="mt-2 mb-2.5 text-xl sm:text-2xl lg:text-3xl/tight font-extrabold tracking-tight text-white">
               Chuyên gia đồng hành cùng doanh nghiệp trong giai đoạn khó khăn
            </h1>
            <p class="text-white/82 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
               Công ty Hợp danh Quản lý và thanh lý tài sản Việt Nam là một đơn vị hoạt động chuyên nghiệp trong lĩnh
               vực Dịch vụ tư vấn,
               tổ chức quản lý và thanh lý tài sản, quyền tài sản, quyền sử dụng đất, vật tư, thiết bị hàng hóa và các
               dịch vụ khác liên quan
               đến tổ chức đấu giá, tư vấn đầu tư, tư vấn quản lý dự án đầu tư trong và ngoài nước.
            </p>
         </div>
      </section>

      <section class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
         <div
            class="container mx-auto px-4 sm:px-6 lg:px-9 py-12 sm:py-16 max-w-6xl grid grid-cols-1 lg:grid-cols-[0.85fr_1.3fr] gap-10 lg:gap-14 items-start">
            <div class="lg:sticky lg:top-24">
               <div v-reveal.left>
                  <div class="flex items-center gap-2.5 mb-4">
                     <span class="w-1 h-6 bg-primary rounded-sm"></span>
                     <p class="uppercase tracking-[0.14em] text-sm font-bold text-primary">Thư ngỏ</p>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold mb-4">
                     Kính gửi Quý Khách hàng
                  </h2>
                  <p class="text-[15px] leading-6.5 text-gray-500 dark:text-gray-400 mb-6">
                     Công ty Hợp danh Quản lý và Thanh lý tài sản Việt Nam (VAML) gửi lời chào trân trọng
                     và hợp tác đến Quý Khách hàng.
                  </p>
               </div>
               <ul class="space-y-4">
                  <li v-for="(f, i) in letterFacts" :key="f.label" v-reveal.left
                     :style="{ '--reveal-delay': i * 90 + 'ms' }" class="flex items-start gap-3.5">
                     <div
                        class="flex-none w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <UIcon :name="f.icon" class="w-5 h-5 shrink-0" />
                     </div>
                     <div>
                        <div class="text-[15px] font-bold leading-6">{{ f.label }}</div>
                        <div class="text-[13.5px] leading-6 text-gray-500 dark:text-gray-400">{{ f.desc }}</div>
                     </div>
                  </li>
               </ul>
            </div>

            <div
               class="relative bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-9 overflow-hidden">
               <span class="absolute inset-x-0 top-0 h-1 bg-primary"></span>
               <UIcon name="i-lucide-mail-open"
                  class="absolute -top-4 -right-4 w-32 h-32 text-primary/5 dark:text-primary/10 pointer-events-none" />
               <div class="relative space-y-3">
                  <p v-for="(p, i) in letter" :key="i" v-reveal :style="{ '--reveal-delay': i * 80 + 'ms' }"
                     class="text-[15px] sm:text-[15.5px] leading-6.5 sm:leading-7 text-gray-600 dark:text-gray-300">
                     {{ p }}
                  </p>
                  <p v-reveal :style="{ '--reveal-delay': letter.length * 80 + 'ms' }"
                     class="text-[15px] sm:text-[15.5px] leading-6.5 font-semibold text-gray-900 dark:text-gray-100">
                     Trân trọng và mong sớm được phục vụ Quý Cơ quan, khách hàng!
                  </p>
               </div>
               <div v-reveal
                  class="relative mt-6 pt-5 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4 flex-wrap">
                  <div class="flex items-center gap-3">
                     <div
                        class="h-11 w-11 px-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0">
                        <img src="/images/logo.png" alt="Quản Tài Viên VN" class="h-full w-auto object-contain" />
                     </div>
                     <div>
                        <div
                           class="text-[12.5px] uppercase tracking-[0.12em] font-semibold text-gray-400 dark:text-gray-500">
                           Chủ tịch HĐTV</div>
                        <div class="font-bold text-base">Bùi Phan Anh</div>
                     </div>
                  </div>
                  <UIcon name="i-lucide-pen-line" class="w-6 h-6 text-primary/40" />
               </div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-4 sm:px-6 lg:px-9 py-10 sm:py-14">
         <div v-reveal class="text-center mb-8">
            <p class="uppercase tracking-[0.14em] text-sm font-bold text-primary">Hành trình</p>
            <h2 class="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">Lịch sử hình thành và phát triển</h2>
         </div>
         <ol class="grid md:grid-cols-3 gap-8 md:gap-0">
            <li v-for="(h, i) in history" :key="h.title" v-reveal :style="{ '--reveal-delay': i * 90 + 'ms' }"
               class="text-center">
               <div class="flex items-center justify-center">
                  <span class="hidden md:block h-0.5 flex-1"
                     :class="i > 0 ? 'bg-gray-200 dark:bg-gray-800' : ''"></span>
                  <div
                     class="flex-none w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/10">
                     <UIcon :name="h.icon" class="w-5 h-5 shrink-0" />
                  </div>
                  <span class="hidden md:block h-0.5 flex-1"
                     :class="i < history.length - 1 ? 'bg-gray-200 dark:bg-gray-800' : ''"></span>
               </div>
               <h3 class="mt-4 text-[15px] sm:text-lg font-bold">{{ h.title }}</h3>
               <p class="mt-1.5 text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-500 dark:text-gray-400 md:px-5">
                  {{ h.description }}</p>
            </li>
         </ol>
      </section>

      <section class="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-4 sm:px-6 lg:px-9 py-9 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-8">
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
            <div v-for="(e, i) in expertise" :key="e.title" v-reveal :style="{ '--reveal-delay': (i % 3) * 90 + 'ms' }"
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

      <section class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-4 sm:px-6 lg:px-9 py-12 sm:py-16 max-w-6xl">
            <div v-reveal class="mb-9 max-w-2xl mx-auto text-center">
               <p class="uppercase tracking-[0.14em] text-sm font-bold text-primary">Bộ máy tổ chức</p>
               <h2 class="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">Cơ cấu tổ chức</h2>
            </div>
            <div v-reveal class="rounded-2xl overflow-hidden max-w-4xl mx-auto mb-10">
               <img src="/images/ve-chung-toi.png" alt="Sơ đồ bộ máy tổ chức VAML" class="w-full h-auto" />
            </div>
            <div class="flex flex-wrap justify-center gap-5">
                  <div v-for="(g, i) in orgStructure" :key="g.group" v-reveal
                     :style="{ '--reveal-delay': (i % 3) * 90 + 'ms' }"
                     class="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                     <div class="flex items-center gap-3">
                        <div
                           class="flex-none w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                           <UIcon :name="g.icon" class="w-5.5 h-5.5 shrink-0" />
                        </div>
                        <h3 class="text-[16px] font-extrabold leading-snug">{{ g.group }}</h3>
                     </div>
                     <div class="mt-4 flex flex-col gap-2">
                        <UPopover v-for="unit in g.units" :key="unit.name" mode="hover"
                           :content="{ align: 'start' }">
                           <button type="button"
                              class="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-left text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                              {{ unit.name }}
                              <UIcon name="i-lucide-chevron-right" class="w-4 h-4 shrink-0 text-gray-400" />
                           </button>

                           <template #content>
                              <div class="p-4.5 w-80 sm:w-96">
                                 <div class="flex items-center gap-2 mb-1.5">
                                    <span class="w-1 h-4.5 bg-primary rounded-sm"></span>
                                    <p class="text-sm font-bold">{{ unit.name }}</p>
                                 </div>
                                 <p class="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
                                    {{ unit.role }}
                                 </p>
                                 <ul class="space-y-1.5">
                                    <li v-for="duty in unit.duties" :key="duty"
                                       class="flex items-start gap-2 text-[13.5px] leading-relaxed">
                                       <UIcon name="i-lucide-check"
                                          class="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                                       {{ duty }}
                                    </li>
                                 </ul>
                              </div>
                           </template>
                        </UPopover>
                     </div>
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

const letter = [
   'VAML là một tổ chức chuyên nghiệp hoạt động trong lĩnh vực dịch vụ tư vấn, quản lý và thanh lý tài sản. VAML được thành lập ngày 10/9/2015, là doanh nghiệp tiên phong hoạt động trong lĩnh vực quản lý và thanh lý tài sản tại Việt Nam ngay khi Luật Phá sản số 51/2014/QH13 được Quốc hội thông qua ngày 19/06/2014, có hiệu lực từ ngày 01/01/2015.',
   'Công ty vinh dự được nhiều Tòa án, Thẩm phán, Tập đoàn, đơn vị, tổ chức nhà nước tin cậy, tín nhiệm chỉ định tư vấn, quản lý, thanh lý tài sản có tính chất đặc biệt. Nhằm mục đích thực hiện chủ trương xã hội hóa hoạt động quản lý, thanh lý tài sản; với đội ngũ 16 Quản tài viên, 04 Luật sư, 08 Kiểm toán viên, Kế toán viên… có kỹ năng, trình độ trong thực hiện tư vấn, quản lý, thanh lý tài sản; kết hợp với đội ngũ cố vấn có thâm niên và kinh nghiệm hàng đầu Việt Nam trong các lĩnh vực tư pháp, kiểm toán, kế toán, phân tích tài chính. Với hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực tư vấn quản lý, thanh lý tài sản, xử lý nợ xấu, VAML đã và đang giải quyết các vụ việc phá sản doanh nghiệp trên khắp cả nước.',
   'VAML luôn nỗ lực để trở thành đối tác tin cậy và đồng hành cùng các Tòa án, Thẩm phán, Quý khách hàng trong thực hiện tư vấn phục hồi, quản lý, thanh lý tài sản. Chúng tôi khẳng định vị thế dẫn đầu trong lĩnh vực tư vấn phục hồi, quản lý và thanh lý tài sản; luôn cung cấp dịch vụ cho Tòa án, các cơ quan có thẩm quyền và khách hàng với tinh thần tận tâm, nhanh chóng và hiệu quả.'
]

const letterFacts = [
   { icon: 'i-lucide-flag', label: 'Tiên phong từ 10/9/2015', desc: 'Doanh nghiệp đầu tiên hoạt động ngay khi Luật Phá sản 51/2014/QH13 có hiệu lực.' },
   { icon: 'i-lucide-users', label: '28+ nhân sự chuyên môn', desc: '16 Quản tài viên, 04 Luật sư, 08 Kiểm toán viên – Kế toán viên cùng đội ngũ cố vấn hàng đầu.' },
   { icon: 'i-lucide-shield-check', label: 'Được Tòa án tín nhiệm', desc: 'Nhiều Tòa án, Thẩm phán, tổ chức nhà nước chỉ định xử lý các vụ việc có tính chất đặc biệt.' }
]

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

const orgStructure = [
   {
      group: 'Khối Quản trị',
      icon: 'i-lucide-landmark',
      units: [
         {
            name: 'Hội đồng thành viên',
            role: 'Cơ quan quyết định cao nhất của VAML.',
            duties: [
               'Quyết định chiến lược phát triển, mô hình tổ chức',
               'Thông qua kế hoạch tài chính, đầu tư, mở chi nhánh',
               'Bổ nhiệm, miễn nhiệm Ban Giám đốc',
               'Thông qua quy chế nội bộ, phân quyền quản lý',
               'Quyết định các giao dịch lớn, dự án trọng điểm'
            ]
         },
         {
            name: 'Ban Giám đốc',
            role: 'Điều hành hoạt động thường xuyên của Công ty theo nghị quyết HĐTV.',
            duties: [
               'Tổ chức thực hiện chiến lược kinh doanh',
               'Quản lý hoạt động các khối và chi nhánh',
               'Ký kết hợp đồng dịch vụ quản lý, phá sản, tái cơ cấu',
               'Kiểm soát rủi ro, tuân thủ pháp luật',
               'Báo cáo Hội đồng thành viên'
            ]
         }
      ]
   },
   {
      group: 'Chi nhánh',
      icon: 'i-lucide-map-pin',
      units: [
         {
            name: 'Chi nhánh TP. Hồ Chí Minh',
            role: 'Đại diện Công ty tại khu vực phía Nam; triển khai dịch vụ quản lý tài sản, phá sản, phục hồi doanh nghiệp theo ủy quyền.',
            duties: [
               'Phát triển thị trường, đầu mối làm việc với khách hàng',
               'Thực hiện các vụ việc phá sản, tái cơ cấu theo phân công',
               'Phối hợp với trụ sở chính',
               'Quản lý nhân sự, tài sản tại chi nhánh',
               'Báo cáo định kỳ về hoạt động'
            ]
         }
      ]
   },
   {
      group: 'Khối Vận hành, Hỗ trợ',
      icon: 'i-lucide-settings',
      units: [
         {
            name: 'Phòng Hành chính – Nhân sự',
            role: 'Quản trị nguồn nhân lực và hành chính tổng hợp.',
            duties: [
               'Tuyển dụng, đào tạo, đánh giá nhân sự',
               'Quản lý hợp đồng lao động, chế độ tiền lương',
               'Xây dựng nội quy, quy chế lao động',
               'Quản lý văn thư, lưu trữ, tài sản; tổ chức hậu cần'
            ]
         },
         {
            name: 'Phòng Kế toán – Tài chính',
            role: 'Quản lý tài chính, kế toán và dòng tiền.',
            duties: [
               'Hạch toán kế toán; lập báo cáo tài chính, thuế',
               'Quản lý ngân sách; kiểm soát thanh toán, công nợ',
               'Theo dõi chi phí từng vụ việc phá sản / tái cơ cấu',
               'Phối hợp kiểm toán'
            ]
         },
         {
            name: 'Phòng Pháp chế',
            role: 'Tham mưu pháp lý và kiểm soát tuân thủ.',
            duties: [
               'Thẩm định pháp lý hợp đồng, giao dịch, hồ sơ nghiệp vụ',
               'Tư vấn pháp luật về phục hồi, phá sản, quản lý & thanh lý tài sản',
               'Kiểm soát rủi ro pháp lý; hoàn thiện quy chế, quy trình nội bộ',
               'Đại diện pháp lý theo ủy quyền; cập nhật quy định pháp luật mới'
            ]
         }
      ]
   },
   {
      group: 'Khối Phục hồi doanh nghiệp',
      icon: 'i-lucide-refresh-cw',
      units: [
         {
            name: 'Phòng Tái cơ cấu doanh nghiệp',
            role: 'Xây dựng phương án phục hồi, tái cơ cấu doanh nghiệp.',
            duties: [
               'Đánh giá hoạt động tài chính của doanh nghiệp',
               'Xây dựng phương án phục hồi, tái cơ cấu',
               'Đề xuất tổ chức lại sản xuất – kinh doanh',
               'Theo dõi, giám sát thực hiện phương án'
            ]
         },
         {
            name: 'Phòng Quản lý, giám sát hoạt động DN',
            role: 'Giám sát doanh nghiệp tuân thủ pháp luật và quy chế phối hợp đã ký kết.',
            duties: [
               'Theo dõi hoạt động sản xuất – kinh doanh',
               'Kiểm tra dòng tiền',
               'Báo cáo cho Tòa án, chủ nợ',
               'Kiến nghị điều chỉnh phương án; phát hiện rủi ro, vi phạm'
            ]
         }
      ]
   },
   {
      group: 'Khối Nghiệp vụ phá sản',
      icon: 'i-lucide-gavel',
      units: [
         {
            name: 'Phòng Nghiệp vụ phá sản',
            role: 'Tổ chức thực hiện thủ tục phá sản theo quy định pháp luật.',
            duties: [
               'Tiếp nhận hồ sơ phá sản; phối hợp Tòa án, Quản tài viên',
               'Lập danh sách chủ nợ; quản lý tài sản doanh nghiệp',
               'Tổ chức hội nghị chủ nợ',
               'Báo cáo tiến độ'
            ]
         },
         {
            name: 'Phòng Xử lý, thanh lý tài sản',
            role: 'Xử lý, bán tài sản theo Nghị quyết HNCN và đề nghị của Chấp hành viên trong các vụ việc phá sản.',
            duties: [
               'Kiểm kê tài sản; phối hợp thẩm định giá',
               'Lập phương án bán',
               'Tổ chức đấu giá',
               'Lập báo cáo quyết toán'
            ]
         }
      ]
   }
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
