<template>
   <div class="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9">
         <div class="pt-8 lg:pt-12 pb-8 lg:pb-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            <!-- Cột 1: Giới thiệu -->
            <div class="flex flex-col gap-6">
               <p class="text-xl leading-7 font-medium text-white">Giới thiệu</p>
               <p class="text-[15px] leading-7 text-gray-200">
                  Công ty Hợp danh Quản lý và Thanh lý tài sản Việt Nam (VAML)
               </p>
               <ul class="flex flex-col gap-2.5">
                  <li v-for="info in about" :key="info.label" class="flex items-center gap-2.5 text-[15px]">
                     <UIcon :name="info.icon" class="w-5 h-5 shrink-0 text-primary" />
                     <span class="text-gray-300">{{ info.label }}:</span>
                     <span class="text-gray-300 font-medium">{{ info.value }}</span>
                  </li>
               </ul>
            </div>

            <!-- Cột 2: Liên hệ -->
            <div class="flex flex-col gap-6">
               <p class="text-xl leading-7 font-medium text-white">Liên hệ</p>
               <div class="flex flex-col gap-4">
                  <div class="flex items-start gap-2">
                     <UIcon name="mdi:address-marker-outline" class="w-6 h-6 shrink-0 text-primary" />
                     <p class="leading-6">P899, Tòa nhà Vân Nam, số 26 Đường Láng, phường Đống Đa, Hà Nội</p>
                  </div>
                  <a href="mailto:Quantaivietnam@gmail.com"
                     class="flex items-center gap-2 hover:text-primary transition-colors">
                     <UIcon name="ic:outline-email" class="w-6 h-6 shrink-0 text-primary" />
                     <p class="leading-6">Quantaivietnam@gmail.com</p>
                  </a>
                  <a href="tel:0966643359" class="flex items-center gap-2 hover:text-primary transition-colors">
                     <UIcon name="boxicons:phone" class="h-6 w-6 shrink-0 text-primary" />
                     <p class="leading-6">0966 643 359</p>
                  </a>
               </div>
            </div>

            <!-- Cột 3: Dịch vụ -->
            <div class="flex flex-col gap-6">
               <p class="text-xl leading-7 font-medium text-white">Dịch vụ</p>
               <div class="flex flex-col gap-4">
                  <NuxtLink v-for="item in service" :key="item.to" :to="item.to"
                     class="leading-6 hover:text-primary transition-colors">{{ item.label }}</NuxtLink>
               </div>
            </div>

            <!-- Cột 4: Bản đồ -->
            <div class="flex flex-col gap-6">
               <p class="text-xl leading-7 font-medium text-white">Trụ sở chính</p>
               <div class="flex flex-1 min-h-45 p-2 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                  <iframe class="w-full flex-1 rounded-xl border-0" title="Bản đồ trụ sở VAML"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.728202024494!2d105.81463617804927!3d21.003529538748154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac848e7a6067%3A0x8b03cbf87b7af8ab!2zVG_DoCBuaMOgIFbDom4gTmFt!5e0!3m2!1svi!2s!4v1783931240823!5m2!1svi!2s"
                     loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>

const about = ref([
   { icon: 'i-lucide-user-round', label: 'Giám đốc', value: 'Bùi Phan Anh' },
   { icon: 'i-lucide-calendar-days', label: 'Thành lập', value: '10/09/2015' },
   { icon: 'i-lucide-badge-check', label: 'Mã số DN', value: '0106987347' },
])

const service = ref([
   { label: 'Phá sản', to: '/dich-vu/pha-san' },
   { label: 'Phục hồi', to: '/dich-vu/phuc-hoi' },
   { label: 'Tư vấn', to: '/dich-vu/tu-van' },
   { label: 'Quản lý tài sản', to: '/dich-vu/quan-ly-tai-san' },
])

</script>
