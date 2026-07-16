<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
         <div class="absolute inset-0">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover object-center" />
         </div>
         <div class="absolute inset-0 hero-overlay"></div>
         <div class="relative container mx-auto px-9 py-14 max-w-3xl text-center">
            <p class="uppercase tracking-[0.14em] text-xs font-bold text-white/85">Hỗ trợ &amp; giải đáp</p>
            <h1 class="mt-3 mb-3 text-[42px] font-extrabold tracking-tight text-white">Câu hỏi thường gặp</h1>
            <p class="text-white/82 leading-relaxed max-w-lg mx-auto mb-7">
               Giải đáp các thắc mắc phổ biến về thủ tục phá sản, quản tài viên, quyền của chủ nợ và người lao động.
            </p>

            <div class="relative max-w-lg mx-auto">
               <UIcon name="material-symbols:search"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
               <input v-model="searchQuery" type="text" placeholder="Nhập từ khóa câu hỏi..." class="w-full h-13 rounded-xl border border-white/25 bg-white
                     pl-12 pr-4 text-[15px] text-gray-900 outline-none shadow-2xl" />
            </div>
         </div>
      </section>

      <section class="container mx-auto px-9 pt-10 pb-2 max-w-5xl">
         <div class="flex flex-wrap gap-2.5 justify-center mb-7">
            <button v-for="cat in categories" :key="cat" type="button"
               class="h-9 px-4 inline-flex items-center rounded-full text-[13px] font-semibold border transition-all"
               :class="cat === activeCategory
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary'"
               @click="activeCategory = cat">
               {{ cat }}
            </button>
         </div>

         <div v-if="filteredFaqs.length" class="space-y-3">
            <UAccordion :items="accordionItems" type="multiple" class="space-y-3 text-lg" :ui="{ label: 'text-xl' }">

               <template #body="{ item }">
                  <div class="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                     {{ item.answer }}
                  </div>
               </template>
            </UAccordion>
         </div>

         <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
            <p class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1.5">Không tìm thấy câu hỏi phù hợp</p>
            <p class="text-sm">Thử từ khóa khác hoặc chọn chủ đề "Tất cả".</p>
         </div>
      </section>

      <section class="container mx-auto px-9 pt-6 pb-14 max-w-5xl">
         <div class="bg-primary text-white rounded-2xl px-9 py-8 flex flex-wrap items-center justify-between gap-6">
            <div>
               <h3 class="text-xl font-extrabold mb-1.5">Chưa tìm thấy câu trả lời?</h3>
               <p class="text-white/85 leading-relaxed">
                  Đội ngũ quản tài viên và luật sư của chúng tôi sẵn sàng tư vấn miễn phí.
               </p>
            </div>
            <div class="flex flex-wrap gap-3">
               <NuxtLink to="/"
                  class="h-11 inline-flex items-center px-5 rounded-lg bg-white text-primary font-bold">
                  Liên hệ tư vấn
               </NuxtLink>
               <a href="tel:19006789"
                  class="h-11 inline-flex items-center px-5 rounded-lg border-[1.5px] border-white/60 text-white font-semibold">
                  Gọi 1900 6789
               </a>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
interface Faq {
   id: number
   category: string
   q: string
   a: string
}

useHead({ title: 'Câu hỏi thường gặp' })

const categories = [
   'Tất cả',
   'Thủ tục phá sản',
   'Quản tài viên',
   'Chủ nợ & người lao động',
   'Chi phí & thời gian'
]

const faqs: Faq[] = [
   { id: 1, category: 'Thủ tục phá sản', q: 'Doanh nghiệp mất khả năng thanh toán được hiểu như thế nào?', a: 'Là tình trạng doanh nghiệp không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán. Đây là căn cứ để yêu cầu mở thủ tục phá sản.' },
   { id: 2, category: 'Thủ tục phá sản', q: 'Ai có quyền và nghĩa vụ nộp đơn yêu cầu mở thủ tục phá sản?', a: 'Chủ nợ không có bảo đảm hoặc có bảo đảm một phần, người lao động và công đoàn, cổ đông hoặc nhóm cổ đông có quyền nộp đơn. Đồng thời, người đại diện theo pháp luật của doanh nghiệp có nghĩa vụ nộp đơn khi doanh nghiệp mất khả năng thanh toán.' },
   { id: 3, category: 'Thủ tục phá sản', q: 'Trình tự giải quyết một vụ phá sản gồm những bước nào?', a: 'Gồm: nộp đơn và thụ lý đơn; ra quyết định mở thủ tục phá sản; kiểm kê tài sản và lập danh sách chủ nợ; triệu tập Hội nghị chủ nợ; áp dụng thủ tục phục hồi hoặc tuyên bố phá sản; và cuối cùng là thanh lý, phân chia tài sản.' },
   { id: 4, category: 'Thủ tục phá sản', q: 'Phá sản khác giải thể doanh nghiệp ở điểm nào?', a: 'Giải thể là việc chấm dứt hoạt động một cách chủ động khi doanh nghiệp vẫn có khả năng thanh toán; còn phá sản do tòa án giải quyết khi doanh nghiệp mất khả năng thanh toán, theo trình tự tố tụng chặt chẽ.' },
   { id: 5, category: 'Quản tài viên', q: 'Quản tài viên là ai và đảm nhiệm công việc gì?', a: 'Quản tài viên là cá nhân hành nghề quản lý, thanh lý tài sản trong quá trình giải quyết phá sản. Họ quản lý tài sản, giám sát hoạt động kinh doanh, đại diện cho doanh nghiệp trong một số giao dịch và báo cáo cho thẩm phán.' },
   { id: 6, category: 'Quản tài viên', q: 'Điều kiện để hành nghề quản tài viên là gì?', a: 'Cá nhân là luật sư, kiểm toán viên, hoặc người có trình độ cử nhân luật, kinh tế, kế toán, tài chính với ít nhất 05 năm kinh nghiệm, được cấp chứng chỉ hành nghề quản tài viên theo quy định.' },
   { id: 7, category: 'Quản tài viên', q: 'Thù lao của quản tài viên do ai chi trả?', a: 'Thù lao được xác định trên cơ sở giá trị tài sản thu được và mức độ phức tạp của vụ việc, do thẩm phán quyết định và được chi trả từ tài sản của doanh nghiệp mất khả năng thanh toán.' },
   { id: 8, category: 'Chủ nợ & người lao động', q: 'Quyền lợi của người lao động được xử lý ra sao khi doanh nghiệp phá sản?', a: 'Các khoản tiền lương, trợ cấp thôi việc, bảo hiểm xã hội và các quyền lợi khác của người lao động được ưu tiên thanh toán trước các khoản nợ không có bảo đảm.' },
   { id: 9, category: 'Chủ nợ & người lao động', q: 'Thứ tự ưu tiên thanh toán khi phân chia tài sản?', a: 'Lần lượt: chi phí phá sản; khoản nợ lương và quyền lợi người lao động; nghĩa vụ tài chính với Nhà nước và các khoản nợ khác; cuối cùng là phần còn lại cho chủ sở hữu.' },
   { id: 10, category: 'Chủ nợ & người lao động', q: 'Hội nghị chủ nợ được coi là hợp lệ khi nào?', a: 'Hội nghị chủ nợ hợp lệ khi có số chủ nợ tham gia đại diện cho ít nhất 51% tổng số nợ không có bảo đảm và có sự tham gia của quản tài viên.' },
   { id: 11, category: 'Chi phí & thời gian', q: 'Một vụ phá sản thường kéo dài bao lâu?', a: 'Thời gian phụ thuộc vào quy mô tài sản, số lượng chủ nợ và mức độ tranh chấp; thực tế thường kéo dài từ vài tháng đến vài năm.' },
   { id: 12, category: 'Chi phí & thời gian', q: 'Chi phí phá sản bao gồm những khoản nào?', a: 'Bao gồm lệ phí nộp đơn, chi phí thù lao quản tài viên và các chi phí phục vụ kiểm kê, định giá, bảo quản và bán tài sản của doanh nghiệp.' }
]

const searchQuery = ref('')
const activeCategory = ref('Tất cả')
const openIds = ref<number[]>([])

const filteredFaqs = computed(() => {
   const q = searchQuery.value.trim().toLowerCase()
   return faqs.filter((item) => {
      const matchCat = activeCategory.value === 'Tất cả' || item.category === activeCategory.value
      const matchQuery = !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      return matchCat && matchQuery
   })
})

const accordionItems = computed(() =>
   filteredFaqs.value.map(item => ({
      label: item.q,
      answer: item.a
   }))
)

function isOpen(id: number) {
   return openIds.value.includes(id)
}

</script>

<style scoped>
.hero-overlay {
   background: linear-gradient(90deg,
         rgba(8, 16, 30, 0.9) 0%,
         rgba(8, 16, 30, 0.75) 35%,
         rgba(8, 16, 30, 0.3) 65%,
         transparent 100%);
}

.h-13 {
   height: 3.25rem;
}

.faq-enter-active,
.faq-leave-active {
   transition: opacity 0.2s ease, transform 0.2s ease;
}

.faq-enter-from,
.faq-leave-to {
   opacity: 0;
   transform: translateY(-4px);
}
</style>
