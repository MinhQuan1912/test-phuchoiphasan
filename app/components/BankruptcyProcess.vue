<template>
   <section class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9 py-12 sm:py-16">

         <header v-reveal class="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <p
               class="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-primary">
               <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
               Theo Luật Phục hồi, Phá sản 2025
            </p>
            <h2
               class="mt-3.5 font-sans text-4xl sm:text-5xl lg:text-[52px]/[1.1] font-extrabold tracking-tight text-gray-900 dark:text-white">
               Quy trình phá sản
            </h2>
         </header>

         <div ref="trackRef" class="relative max-w-3xl mx-auto">
            <div ref="railRef" class="absolute left-8.75 w-0.5 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            <div ref="fillRef"
               class="absolute left-8.75 w-0.5 h-0 rounded-full bg-primary transition-[height] duration-1000 ease-out motion-reduce:transition-none">
            </div>

            <div v-for="s in steps" :key="s.idx" ref="stepRefs" v-reveal :style="{ '--reveal-delay': s.delay }"
               class="relative grid grid-cols-[72px_1fr] gap-4 mb-4">
               <div class="flex justify-center items-center">
                  <div
                     class="relative z-1 w-14 h-14 shrink-0 rounded-full bg-primary text-white inline-flex items-center justify-center border-4 border-white dark:border-gray-900">
                     <UIcon :name="s.icon" class="size-7" />
                  </div>
               </div>

               <div
                  class="relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6">
                  <div class="relative">
                     <h3
                        class="font-sans text-lg font-extrabold leading-snug tracking-tight">
                        {{ s.title }}
                     </h3>
                     <p v-for="(ln, k) in s.lines" :key="k"
                        class="mt-1.5 flex gap-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                        <span class="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary/60"></span>
                        <span>{{ ln }}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div v-reveal
            class="relative max-w-3xl mx-auto mt-8 bg-primary text-white rounded-2xl p-6 sm:p-8 overflow-hidden">
            <UIcon name="i-lucide-scale"
               class="absolute -bottom-6 -right-6 w-32 h-32 text-white/10 pointer-events-none" />
            <div class="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
               <div>
                  <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">Cần hỗ trợ thực hiện thủ tục phá
                     sản?
                  </h3>
                  <p class="text-[15px] leading-relaxed text-white/85">
                     Quản tài viên &amp; luật sư đồng hành trọn 11 bước quy trình.
                  </p>
               </div>
               <NuxtLink to="/lien-he"
                  class="btn-anim group inline-flex items-center gap-2 h-11 px-5 shrink-0 rounded-lg bg-white text-primary text-[15px] font-bold">
                  Liên hệ tư vấn
                  <UIcon name="i-lucide-arrow-right"
                     class="w-4.5 h-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
               </NuxtLink>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
interface RawStep { title: string; lines: string[]; icon: string }

const raw: RawStep[] = [
   { icon: 'i-lucide-file-text', title: 'Nộp đơn yêu cầu phá sản', lines: ['Chủ nợ, người mắc nợ hoặc doanh nghiệp, hợp tác xã có quyền yêu cầu mở thủ tục phá sản.'] },
   { icon: 'i-lucide-landmark', title: 'Tòa án tiếp nhận, xem xét, thụ lý / không thụ lý đơn phá sản', lines: ['Tòa án xem xét đơn và tài liệu kèm theo, ra Thông báo thụ lý hoặc không thụ lý đơn yêu cầu mở thủ tục phá sản.'] },
   { icon: 'i-lucide-user-check', title: 'Chỉ định Quản tài viên, doanh nghiệp quản lý, thanh lý tài sản', lines: ['Thẩm phán chỉ định Quản tài viên hoặc doanh nghiệp quản lý, thanh lý tài sản tham gia vụ việc.', 'Thực hiện quản lý tài sản, giám sát hoạt động doanh nghiệp và hỗ trợ thủ tục phá sản.'] },
   { icon: 'i-lucide-clipboard-list', title: 'Kiểm kê tài sản doanh nghiệp', lines: ['Doanh nghiệp phá sản có trách nhiệm chủ động kiểm kê tài sản.', 'Trường hợp việc kiểm kê không khách quan, Quản tài viên tiến hành kiểm kê theo đề nghị của Tòa án nhân dân.'] },
   { icon: 'i-lucide-file-check', title: 'Ban hành quyết định, thông báo mở thủ tục phá sản', lines: ['Tòa án nhân dân ban hành Quyết định mở thủ tục phá sản và thông báo cho các bên liên quan.'] },
   { icon: 'i-lucide-users', title: 'Tiếp nhận, xác minh danh sách chủ nợ, người mắc nợ', lines: ['Quản tài viên tiếp nhận thông tin về chủ nợ, người mắc nợ.', 'Quản tài viên xác minh, lập danh sách chủ nợ, người mắc nợ.'] },
   { icon: 'i-lucide-handshake', title: 'Triệu tập, mở Hội nghị chủ nợ, công nhận Nghị quyết của Hội nghị chủ nợ', lines: ['Quản tài viên triệu tập Hội nghị chủ nợ.', 'Tổ chức Hội nghị để thảo luận, biểu quyết các vấn đề liên quan.', 'Tòa án công nhận Nghị quyết của Hội nghị chủ nợ.'] },
   { icon: 'i-lucide-gavel', title: 'Tuyên bố phá sản', lines: ['Tòa án ra Quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản.'] },
   { icon: 'i-lucide-banknote', title: 'Thi hành quyết định tuyên bố phá sản (định giá, bán tài sản)', lines: ['Quản tài viên tổ chức định giá tài sản.', 'Tổ chức bán tài sản theo quy định pháp luật để thanh toán nợ.'] },
   { icon: 'i-lucide-scale', title: 'Phân chia tài sản theo thứ tự ưu tiên', lines: ['Phân chia tài sản thu được để thanh toán cho các chủ nợ theo thứ tự ưu tiên luật định.'] },
   { icon: 'i-lucide-flag', title: 'Kết thúc thi hành quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản', lines: ['Tòa án ra Quyết định chấm dứt thi hành Quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản.'] },
]

const steps = raw.map((s, i) => ({
   idx: i,
   icon: s.icon,
   title: s.title,
   lines: s.lines,
   delay: `${(i % 4) * 90}ms`,
}))
const trackRef = ref<HTMLElement | null>(null)
const railRef = ref<HTMLElement | null>(null)
const fillRef = ref<HTMLElement | null>(null)
const stepRefs = ref<HTMLElement[]>([])

let firstCenter = 0
let range = 0
let onScroll: (() => void) | null = null
let onResize: (() => void) | null = null

onMounted(() => {
   const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
   const track = trackRef.value
   const rail = railRef.value
   const fill = fillRef.value
   if (!track || !rail || !fill) return

   const layout = () => {
      const rows = stepRefs.value.filter(Boolean)
      if (rows.length < 2) return
      const centerOf = (el: HTMLElement) => el.offsetTop + el.offsetHeight / 2
      firstCenter = centerOf(rows[0]!)
      range = Math.max(centerOf(rows[rows.length - 1]!) - firstCenter, 0)
      rail.style.top = `${firstCenter}px`
      rail.style.height = `${range}px`
      fill.style.top = `${firstCenter}px`
   }

   const update = () => {
      const trackTop = track.getBoundingClientRect().top
      const progressed = Math.min(Math.max(window.innerHeight * 0.6 - (trackTop + firstCenter), 0), range)
      fill.style.height = `${progressed}px`
   }

   layout()
   if (reduceMotion) {
      fill.style.height = `${range}px`
      return
   }

   onScroll = update
   onResize = () => { layout(); update() }
   window.addEventListener('scroll', onScroll, { passive: true })
   window.addEventListener('resize', onResize)
   update()
})

onBeforeUnmount(() => {
   if (onScroll) window.removeEventListener('scroll', onScroll)
   if (onResize) window.removeEventListener('resize', onResize)
})
</script>


