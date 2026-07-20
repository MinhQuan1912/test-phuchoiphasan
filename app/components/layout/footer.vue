<template>
   <div class="bg-gray-100 dark:bg-transparent ">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9">
         <div class="pt-8 lg:pt-20 pb-8 lg:pb-15 gap-8 lg:gap-10 flex flex-col lg:flex-row justify-between">
            <div class="flex flex-col gap-4 w-full lg:w-100 shrink-0">
               <iframe class="w-full h-56 sm:h-64 lg:h-full rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.728202024494!2d105.81463617804927!3d21.003529538748154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac848e7a6067%3A0x8b03cbf87b7af8ab!2zVG_DoCBuaMOgIFbDom4gTmFt!5e0!3m2!1svi!2s!4v1783931240823!5m2!1svi!2s"
                  loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div class="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-10">
               <div class="flex flex-col gap-6 flex-1 sm:grow-[1.6] basis-[calc(50%-1rem)] sm:basis-0">
                  <p class="text-xl leading-7 font-medium">Liên hệ</p>
                  <div class="flex flex-col justify-between gap-4">
                     <div class="flex items-center gap-2">
                        <UIcon name="mdi:address-marker-outline" class="w-6 h-6 shrink-0" />
                        <p class="leading-6">P899, Tòa nhà Vân Nam, số 26 Đường Láng, phường Đống Đa, thành phố Hà Nội</p>
                     </div>
                     <a href="mailto:exclusive@gmail.com" class="flex items-center gap-2">
                        <UIcon name="ic:outline-email" class="w-6 h-6" />
                        <p class="leading-6 hover:text-primary ease">Quantaivietnam@gmail.com</p>
                     </a>
                     <div class="flex items-center gap-2">
                        <UIcon name="boxicons:phone" class="h-6 w-6" />
                        <p class="leading-6 hover:text-primary ease">096 664 3359</p>
                     </div>
                  </div>
               </div>
               <div class="flex flex-col gap-6 flex-1 basis-[calc(50%-1rem)] sm:basis-0">
                  <p class="text-xl leading-7 font-medium">Danh mục</p>
                  <div class="flex flex-col justify-between gap-4">
                     <template v-for="item in categories">
                        <NuxtLink :to="item.to" class="leading-6 hover:text-primary">{{ item.label }}</NuxtLink>
                     </template>
                  </div>
               </div>
               <div class="flex flex-col gap-6 flex-1 basis-[calc(50%-1rem)] sm:basis-0">
                  <p class="text-xl leading-7 font-medium">Dịch vụ</p>
                  <div class="flex flex-col justify-between gap-4">
                     <template v-for="item in service">
                        <NuxtLink :to="item.to" class="leading-6 hover:text-primary">{{ item.label }}</NuxtLink>
                     </template>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>

const categories = ref([
   { label: 'Trang chủ', to: '/' },
   { label: 'Thông báo phá sản', to: '/thong-bao-pha-san' },
   { label: 'Tin tức', to: '/tin-tuc' },
   { label: 'Câu hỏi thường gặp', to: '/cau-hoi-thuong-gap' },
   { label: 'Về chúng tôi', to: '/ve-chung-toi' },
])
const service = ref([
   { label: 'Phá sản', to: '/dich-vu/pha-san' },
   { label: 'Phục hồi', to: '/dich-vu/phuc-hoi' },
   { label: 'Tư vấn', to: '/dich-vu/tu-van' },
   { label: 'Quản lý tài sản', to: '/dich-vu/quan-ly-tai-san' },
])

</script>
