<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="fixed top-0 left-0 h-0.75 bg-primary z-20 transition-[width] duration-100"
         :style="{ width: progress + '%' }"></div>

      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 pt-11 pb-12">
         <div class="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-10 lg:gap-12 items-start">
            <article class="min-w-0">
         <nav class="text-base text-gray-500 dark:text-gray-400 mb-5">
            <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
            <span class="opacity-60 mx-1">/</span>
            <NuxtLink to="/tin-tuc" class="hover:text-primary transition-colors">Tin tức</NuxtLink>
            <span class="opacity-60 mx-1">/</span>
            <span>{{ article.category }}</span>
         </nav>
         <h1 class="mt-4 mb-5 text-3xl sm:text-4xl/tight font-extrabold tracking-tight">{{ article.title }}</h1>

         <div class="flex items-center gap-3.5 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div
               class="ph-round w-11 h-11 rounded-full overflow-hidden flex items-center justify-center">
               <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
            </div>
            <div>
               <div class="text-base font-bold">{{ article.author }}</div>
               <div class="text-[15px] text-gray-500 dark:text-gray-400">{{ article.role }} · {{ article.date }} · {{
                  article.readingTime }}</div>
            </div>
         </div>

         <div
            class="ph aspect-video my-7 rounded-2xl overflow-hidden flex items-center justify-center">
            <img src="https://picsum.photos/300/200" alt="" class="w-full h-full object-cover" />
         </div>

         <p class="mb-5 text-[21px] leading-relaxed font-medium">
            Dự thảo sửa đổi Luật Phá sản đang thu hút sự quan tâm lớn của cộng đồng doanh nghiệp, với nhiều thay đổi về
            trình tự, thủ tục và vai trò của các bên trong quá trình giải quyết phá sản.
         </p>
         <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
            Sau gần một thập kỷ áp dụng, Luật Phá sản 2014 đã bộc lộ một số điểm cần điều chỉnh để phù hợp hơn với thực
            tiễn hoạt động của doanh nghiệp và thông lệ quốc tế. Những sửa đổi lần này tập trung vào việc rút ngắn thời
            gian, tăng tính minh bạch và bảo vệ tốt hơn quyền lợi của các bên liên quan.
         </p>

         <h2 class="mt-9 mb-3.5 text-2xl font-extrabold tracking-tight">Những thay đổi trọng tâm</h2>
         <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
            Dưới đây là năm điểm mới đáng chú ý nhất mà doanh nghiệp, chủ nợ và người lao động cần đặc biệt lưu ý:
         </p>
         <ol class="mb-6 pl-6 list-decimal text-[18.5px] leading-loose text-gray-500 dark:text-gray-400 space-y-3">
            <li><strong class="text-gray-900 dark:text-gray-100">Rút ngắn thời gian giải quyết:</strong> quy định rõ hơn
               về thời hạn từng giai đoạn, hạn chế tình trạng vụ việc kéo dài nhiều năm.</li>
            <li><strong class="text-gray-900 dark:text-gray-100">Mở rộng quyền của quản tài viên:</strong> tăng thẩm
               quyền trong quản lý, giám sát và định giá tài sản.</li>
            <li><strong class="text-gray-900 dark:text-gray-100">Ưu tiên phương án phục hồi:</strong> khuyến khích tái
               cơ cấu, phục hồi hoạt động thay vì thanh lý ngay.</li>
            <li><strong class="text-gray-900 dark:text-gray-100">Bảo vệ người lao động:</strong> làm rõ thứ tự ưu tiên
               thanh toán lương, trợ cấp và bảo hiểm xã hội.</li>
            <li><strong class="text-gray-900 dark:text-gray-100">Số hóa thủ tục:</strong> cho phép nộp đơn và công bố
               thông tin phá sản trên nền tảng điện tử.</li>
         </ol>

         <blockquote
            class="my-7 py-5 px-6 border-l-4 border-primary bg-gray-100 dark:bg-gray-900 rounded-r-xl text-[19px] leading-relaxed italic">
            "Việc ưu tiên phương án phục hồi sẽ giúp nhiều doanh nghiệp có cơ hội tái cấu trúc và tiếp tục hoạt động,
            thay vì buộc phải chấm dứt tồn tại."
         </blockquote>

         <h2 class="mt-9 mb-3.5 text-2xl font-extrabold tracking-tight">Tác động đối với doanh nghiệp</h2>
         <p class="mb-5 text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
            Với các quy định mới, doanh nghiệp gặp khó khăn tài chính sẽ có thêm công cụ pháp lý để xử lý nợ một cách
            chủ
            động. Chủ nợ cũng được bảo đảm quyền tiếp cận thông tin đầy đủ và kịp thời hơn thông qua hệ thống công bố
            điện tử.
         </p>
         <p class="text-[18.5px] leading-8 text-gray-500 dark:text-gray-400">
            Tuy nhiên, để tận dụng hiệu quả những thay đổi này, doanh nghiệp nên chủ động tham vấn quản tài viên và luật
            sư ngay từ giai đoạn đầu, tránh để tình trạng mất khả năng thanh toán kéo dài quá lâu.
         </p>

         <div class="flex flex-wrap gap-2.5 my-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <span class="text-base font-semibold self-center">Chủ đề:</span>
            <NuxtLink v-for="tag in article.tags" :key="tag" to="/tin-tuc"
               class="h-8 inline-flex items-center px-3.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-[15px] hover:border-primary hover:text-primary transition-colors">
               {{ tag }}
            </NuxtLink>
         </div>

            </article>

            <aside class="lg:sticky lg:top-24">
               <div class="flex items-center gap-2.5 mb-5">
                  <span class="w-1 h-6 bg-primary rounded-sm"></span>
                  <h2 class="text-xl font-extrabold tracking-tight">Bài viết liên quan</h2>
               </div>
               <div class="flex flex-col gap-4">
                  <NuxtLink v-for="post in related" :key="post.title" :to="`/tin-tuc/${post.slug}`"
                     class="group flex items-stretch bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
                     <div class="ph w-40 shrink-0 overflow-hidden">
                        <img src="https://picsum.photos/300/200" alt=""
                           class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                     </div>
                     <div class="min-w-0 flex-1 p-3.5 flex flex-col justify-center">
                        <h3 class="text-base font-extrabold leading-snug tracking-tight group-hover:text-primary transition-colors">
                           {{ post.title }}</h3>
                        <div class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{{ post.time }}</div>
                     </div>
                  </NuxtLink>
               </div>
            </aside>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">

const article = {
   category: 'Pháp luật',
   title: 'Sửa đổi Luật Phá sản 2014: 5 điểm mới doanh nghiệp cần nắm rõ',
   author: 'Trần Thị Mai',
   role: 'Luật sư cấp cao',
   date: '13/07/2026',
   readingTime: '8 phút đọc',
   tags: ['Luật Phá sản 2014', 'Phá sản', 'Phục hồi doanh nghiệp']
}

useHead({ title: article.title })

const related = [
   { slug: 'thu-lao-quan-tai-vien', title: 'Quy trình chỉ định và thù lao của quản tài viên theo quy định mới', time: '5 giờ trước' },
   { slug: 'hoi-nghi-chu-no', title: 'Hội nghị chủ nợ: điều kiện hợp lệ và quyền biểu quyết', time: 'Hôm qua' },
   { slug: 'dinh-gia-tai-san', title: 'Nguyên tắc định giá tài sản trong thủ tục phá sản', time: '3 ngày trước' }
]

const progress = ref(0)

function onScroll() {
   const max = document.documentElement.scrollHeight - window.innerHeight || 1
   progress.value = Math.min(100, Math.max(0, (window.scrollY / max) * 100))
}

onMounted(() => {
   window.addEventListener('scroll', onScroll, { passive: true })
   onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
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
