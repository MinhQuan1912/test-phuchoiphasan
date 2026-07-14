<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section class="border-b border-gray-200 dark:border-gray-800 bg-gray-100/70 dark:bg-gray-900/40">
         <div class="container mx-auto px-6 py-14 text-center">
            <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Về chúng tôi</p>
            <h1 class="mt-3 mb-3.5 text-4xl font-extrabold tracking-tight">
               Chuyên gia đồng hành cùng doanh nghiệp trong giai đoạn khó khăn
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-[17px] leading-relaxed max-w-2xl mx-auto">
               Quản Tài Viên VN là tổ chức hành nghề quản lý, thanh lý tài sản và tư vấn pháp lý, cung cấp thông tin
               minh bạch về thủ tục phá sản và phục hồi doanh nghiệp trên toàn quốc.
            </p>
         </div>
      </section>

      <section class="container mx-auto px-6 py-14">
         <div class="grid md:grid-cols-2 gap-12 items-center">
            <div
               class="ph aspect-4/3 rounded-2xl overflow-hidden flex items-center justify-center">
               <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
            </div>
            <div>
               <div class="flex items-center gap-2.5 mb-4">
                  <span class="w-1 h-5.5 bg-primary rounded-sm"></span>
                  <h2 class="text-2xl font-extrabold tracking-tight">Câu chuyện của chúng tôi</h2>
               </div>
               <p class="text-[15px] leading-8 text-gray-500 dark:text-gray-400 mb-4">
                  Được thành lập bởi đội ngũ luật sư và quản tài viên nhiều năm kinh nghiệm, chúng tôi ra đời với mong
                  muốn giúp doanh nghiệp, chủ nợ và người lao động tiếp cận thông tin phá sản một cách rõ ràng, kịp thời
                  và đúng luật.
               </p>
               <p class="text-[15px] leading-8 text-gray-500 dark:text-gray-400">
                  Hơn một thập kỷ qua, chúng tôi đã tham gia hàng nghìn vụ việc, từ mở thủ tục, kiểm kê và định giá tài
                  sản đến xây dựng phương án phục hồi, luôn đặt tính minh bạch và quyền lợi hợp pháp của các bên làm
                  trọng tâm.
               </p>
            </div>
         </div>
      </section>

      <section class="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-6 py-9 grid grid-cols-2 md:grid-cols-4">
            <div v-for="(s, i) in stats" :key="s.label" class="text-center px-4"
               :class="i > 0 ? 'md:border-l border-gray-200 dark:border-gray-800' : ''">
               <div class="text-4xl font-extrabold text-primary tracking-tight leading-none">{{ s.value }}</div>
               <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ s.label }}</div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-6 py-14">
         <div class="text-center mb-8">
            <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Giá trị cốt lõi</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight">Nguyên tắc chúng tôi theo đuổi</h2>
         </div>
         <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
            <div v-for="v in values" :key="v.title"
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
               <div
                  class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold mb-4">
                  {{ v.n }}</div>
               <h3 class="text-[17px] font-bold mb-2">{{ v.title }}</h3>
               <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ v.desc }}</p>
            </div>
         </div>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800">
         <div class="container mx-auto px-6 py-14">
            <div class="text-center mb-8">
               <p class="uppercase tracking-[0.14em] text-xs font-bold text-primary">Đội ngũ</p>
               <h2 class="mt-3 text-3xl font-extrabold tracking-tight">Chuyên gia của chúng tôi</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
               <div v-for="member in team" :key="member.name"
                  class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center">
                  <div
                     class="ph-round w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center">
                     <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
                  </div>
                  <h3 class="text-base font-bold mb-1">{{ member.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 leading-snug">{{ member.role }}</p>
               </div>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-6 py-14 ">
         <div class="flex items-center gap-2.5 mb-7">
            <span class="w-1 h-6 bg-primary rounded-sm"></span>
            <h2 class="text-2xl font-extrabold tracking-tight">Quy trình làm việc</h2>
         </div>
         <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
            <div v-for="step in process" :key="step.n"
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
               <div class="text-4xl font-extrabold text-primary/25 leading-none mb-3">{{ step.n }}</div>
               <h3 class="text-base font-bold mb-2">{{ step.title }}</h3>
               <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ step.desc }}</p>
            </div>
         </div>
      </section>

      <section class="container mx-auto px-6 pb-14">
         <div class="bg-primary text-white rounded-2xl px-9 py-9 flex flex-wrap items-center justify-between gap-6">
            <div>
               <h3 class="text-2xl font-extrabold mb-1.5">Cần hỗ trợ về thủ tục phá sản?</h3>
               <p class="text-white/85 leading-relaxed">Liên hệ để được đội ngũ chuyên gia của chúng tôi tư vấn miễn
                  phí.</p>
            </div>
            <div class="flex flex-wrap gap-3">
               <NuxtLink to=""
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
useHead({ title: 'Về chúng tôi' })

const stats = [
   { value: '12+', label: 'Năm kinh nghiệm' },
   { value: '1.248', label: 'Vụ việc đã xử lý' },
   { value: '860', label: 'Doanh nghiệp đồng hành' },
   { value: '34', label: 'Tỉnh / thành phủ sóng' }
]

const values = [
   { n: '01', title: 'Chính trực', desc: 'Minh bạch và trung thực trong từng quyết định, số liệu và báo cáo gửi tòa án.' },
   { n: '02', title: 'Chuyên môn', desc: 'Đội ngũ luật sư và quản tài viên giàu kinh nghiệm, cập nhật quy định mới nhất.' },
   { n: '03', title: 'Tận tâm', desc: 'Đặt quyền lợi hợp pháp của doanh nghiệp, chủ nợ và người lao động lên hàng đầu.' },
   { n: '04', title: 'Đúng luật', desc: 'Tuân thủ nghiêm ngặt Luật Phá sản và các quy định pháp luật liên quan.' }
]

const team = [
   { name: 'Nguyễn Văn A', role: 'Chuyên gia' },
   { name: 'Nguyễn Văn A', role: 'Chuyên gia' },
   { name: 'Nguyễn Văn A', role: 'Chuyên gia' },
   { name: 'Nguyễn Văn A', role: 'Chuyên gia' }
]

const process = [
   { n: '01', title: 'Tiếp nhận & đánh giá', desc: 'Tư vấn ban đầu, đánh giá tình trạng tài chính và khả năng thanh toán của doanh nghiệp.' },
   { n: '02', title: 'Mở thủ tục & kiểm kê', desc: 'Hỗ trợ nộp đơn, chỉ định quản tài viên, kiểm kê và lập danh sách chủ nợ.' },
   { n: '03', title: 'Hội nghị & phương án', desc: 'Tổ chức hội nghị chủ nợ, xây dựng và biểu quyết phương án phục hồi.' },
   { n: '04', title: 'Phục hồi hoặc thanh lý', desc: 'Triển khai phục hồi hoặc thanh lý, phân chia tài sản theo thứ tự ưu tiên.' }
]
</script>

<style scoped>
.ph {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.09) 0 12px, transparent 12px 24px), rgb(231 240 252);
}

.ph-round {
   background: repeating-linear-gradient(135deg, rgba(15, 86, 179, 0.1) 0 8px, transparent 8px 16px), rgb(231 240 252);
}

.dark .ph,
.dark .ph-round {
   background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 10px, transparent 10px 20px), rgb(21 39 68);
}
</style>
