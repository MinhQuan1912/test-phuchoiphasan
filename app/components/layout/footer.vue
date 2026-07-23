<template>
   <div class="bg-gray-100 dark:bg-transparent ">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9">
         <div class="pt-8 lg:pt-12 pb-8 lg:pb-15 gap-8 lg:gap-10 flex flex-col lg:flex-row justify-between">
            <div class="w-full flex flex-wrap sm:flex-nowrap gap-8 sm:gap-10">
               <div class="flex flex-col gap-6 flex-1 sm:grow-[1.8] basis-full sm:basis-0">
                  <p class="text-xl leading-7 font-medium">Giới thiệu</p>
                  <p class="text-[15px] leading-7 text-gray-600 dark:text-gray-400">
                     Công ty Hợp danh Quản lý và Thanh lý tài sản Việt Nam (VAML) — đơn vị chuyên nghiệp trong
                     tư vấn, tổ chức quản lý và thanh lý tài sản, quyền tài sản theo thủ tục phá sản trên phạm vi
                     toàn quốc.
                  </p>
               </div>
               <div class="flex flex-col gap-6 flex-1 sm:grow-[1.4] basis-[calc(50%-1rem)] sm:basis-0">
                  <p class="text-xl leading-7 font-medium">Liên hệ</p>
                  <div class="flex flex-col justify-between gap-4">
                     <div class="flex items-center gap-2">
                        <UIcon name="mdi:address-marker-outline" class="w-6 h-6 shrink-0" />
                        <p class="leading-6">P899, Tòa nhà Vân Nam, số 26 Đường Láng, phường Đống Đa, Hà Nội</p>
                     </div>
                     <div class="flex items-center gap-2">
                        <UIcon name="ic:outline-email" class="w-6 h-6" />
                        <p class="leading-6">Quantaivietnam@gmail.com</p>
                     </div>
                     <div class="flex items-center gap-2">
                        <UIcon name="boxicons:phone" class="h-6 w-6" />
                        <p class="leading-6">0966 643 359</p>
                     </div>
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

const service = ref([
   { label: 'Phá sản', to: '/dich-vu/pha-san' },
   { label: 'Phục hồi', to: '/dich-vu/phuc-hoi' },
   { label: 'Tư vấn', to: '/dich-vu/tu-van' },
   { label: 'Quản lý tài sản', to: '/dich-vu/quan-ly-tai-san' },
])

</script>
