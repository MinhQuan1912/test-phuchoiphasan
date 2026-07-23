<template>
   <div class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-9 pt-9 pb-14 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-7 items-start">
         <div v-reveal
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-9">
            <template v-if="submitted">
               <div
                  class="flex items-start gap-4 bg-primary/5 border border-primary/30 rounded-xl p-6 sm:p-7">
                  <div
                     class="shrink-0 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center">
                     <UIcon name="material-symbols:check-rounded" class="w-6 h-6" />
                  </div>
                  <div>
                     <h3 class="text-xl font-extrabold mb-1.5 text-primary">Đã gửi yêu cầu thành công</h3>
                     <p class="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                        Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc qua email hoặc số
                        điện thoại bạn cung cấp.
                     </p>
                     <button type="button"
                        class="btn-anim h-10 px-5 rounded-lg border border-primary/40 text-primary font-bold text-sm hover:bg-primary/5"
                        @click="reset">
                        Gửi yêu cầu khác
                     </button>
                  </div>
               </div>
            </template>

            <template v-else>
               <h2 class="text-3xl font-extrabold tracking-tight mb-1">Gửi yêu cầu tư vấn</h2>
               <p class="text-sm text-gray-500 dark:text-gray-400 mb-7">
                  Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 24 giờ làm việc.
               </p>

               <div class="mb-5.5">
                  <label class="block text-sm font-bold mb-2.5">Dịch vụ cần tư vấn <span
                        class="text-red-500">*</span></label>
                  <div class="grid sm:grid-cols-2 gap-2.5">
                     <button v-for="svc in services" :key="svc.key" type="button"
                        class="flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] transition-all"
                        :class="form.service === svc.key
                           ? 'border-primary bg-primary/5'
                           : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50'"
                        @click="pickService(svc.key)">
                        <span
                           class="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors"
                           :class="form.service === svc.key ? 'border-primary bg-primary text-white' : 'border-gray-300 dark:border-gray-700'">
                           <UIcon v-if="form.service === svc.key" name="material-symbols:check-rounded"
                              class="w-3.5 h-3.5" />
                        </span>
                        <span class="text-sm font-semibold text-left">{{ svc.label }}</span>
                     </button>
                  </div>
                  <div v-if="form.service === 'khac'" class="mt-2.5">
                     <input v-model="form.serviceOther" type="text"
                        placeholder="Nhập vấn đề bạn cần tư vấn..." class="input-field" />
                  </div>
               </div>

               <div class="grid sm:grid-cols-2 gap-4.5 mb-5.5">
                  <div>
                     <label class="block text-sm font-bold mb-2">Họ và tên <span
                           class="text-red-500">*</span></label>
                     <input v-model="form.name" type="text" placeholder="Nhập tên của bạn
                     " class="input-field" />
                  </div>
                  <div>
                     <label class="block text-sm font-bold mb-2">Số điện thoại <span
                           class="text-red-500">*</span></label>
                     <input v-model="form.phone" type="tel" inputmode="tel" placeholder="Nhập số điện thoại của bạn"
                        class="input-field" />
                  </div>
               </div>

               <div class="mb-5.5">
                  <label class="block text-sm font-bold mb-2">Email <span class="text-red-500">*</span></label>
                  <input v-model="form.email" type="email" inputmode="email" placeholder="Nhập email của bạn"
                     class="input-field" />
               </div>

               <div class="mb-5.5">
                  <label class="block text-sm font-bold mb-2">Nội dung cần tư vấn <span
                        class="text-red-500">*</span></label>
                  <textarea v-model="form.message" rows="5"
                     placeholder="Mô tả ngắn gọn tình huống, doanh nghiệp và vấn đề bạn cần được hỗ trợ..."
                     class="input-field p-3! leading-relaxed" />
               </div>

               <div v-if="error"
                  class="mb-4.5 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-sm font-semibold text-red-700 dark:text-red-400">
                  {{ error }}
               </div>

               <div class="flex flex-wrap items-center gap-4">
                  <button type="button" :disabled="submitting"
                     class="btn-anim h-12 px-8 rounded-lg bg-primary text-white font-bold disabled:opacity-60 disabled:cursor-default"
                     @click="submit">
                     {{ submitting ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn' }}
                  </button>
                  <span class="text-[13px] text-gray-400 dark:text-gray-500">Thông tin của bạn được bảo mật tuyệt
                     đối.</span>
               </div>
            </template>
         </div>

         <aside class="flex flex-col gap-5">
            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
               <h3 class="text-xl font-extrabold tracking-tight mb-4.5">Thông tin liên hệ</h3>
               <div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                  <div v-for="c in contacts" :key="c.label" class="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
                     <div
                        class="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <UIcon :name="c.icon" class="w-5 h-5" />
                     </div>
                     <div class="min-w-0">
                        <div class="text-xs font-semibold text-gray-400 dark:text-gray-500">{{ c.label }}</div>
                        <div class="text-[15px] font-bold wrap-break-word">{{ c.value }}</div>
                     </div>
                  </div>
               </div>
            </div>

            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 overflow-hidden">
               <iframe class="w-full h-55 rounded-xl border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.728202024494!2d105.81463617804927!3d21.003529538748154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac848e7a6067%3A0x8b03cbf87b7af8ab!2zVG_DoCBuaMOgIFbDom4gTmFt!5e0!3m2!1svi!2s!4v1783931240823!5m2!1svi!2s"
                  loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <div v-reveal
               class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
               <h3 class="text-xl font-extrabold tracking-tight mb-3">Giờ làm việc</h3>
               <div
                  class="flex justify-between py-2.5 text-[15px] border-b border-gray-200 dark:border-gray-800">
                  <span class="text-gray-500 dark:text-gray-400">Thứ 2 – Thứ 6</span>
                  <b>08:00 – 17:30</b>
               </div>
               <div class="flex justify-between py-2.5 text-[15px]">
                  <span class="text-gray-500 dark:text-gray-400">Thứ 7</span>
                  <b>08:00 – 12:00</b>
               </div>
            </div>
         </aside>
      </div>
   </div>
</template>

<script setup lang="ts">
interface ServiceOption {
   key: string
   label: string
}

useHead({ title: 'Liên hệ' })

const services: ServiceOption[] = [
   { key: 'pha-san', label: 'Phá sản' },
   { key: 'phuc-hoi', label: 'Phục hồi' },
   { key: 'tu-van', label: 'Tư vấn pháp lý' },
   { key: 'quan-ly-tai-san', label: 'Quản lý tài sản' },
   { key: 'khac', label: 'Khác' }
]

const contacts = [
   { icon: 'boxicons:phone', label: 'Hotline', value: '0966 643 359' },
   { icon: 'ic:outline-email', label: 'Email', value: 'Quantaivietnam@gmail.com' },
   { icon: 'mdi:address-marker-outline', label: 'Văn phòng', value: 'P899, Tòa nhà Vân Nam, số 26 Đường Láng, phường Đống Đa, Hà Nội' }
]

const form = reactive({
   service: '',
   serviceOther: '',
   name: '',
   email: '',
   phone: '',
   message: ''
})

const error = ref('')
const submitting = ref(false)
const submitted = ref(false)

function pickService(key: string) {
   form.service = key
   if (key !== 'khac') form.serviceOther = ''
   error.value = ''
}

function validate(): string {
   if (!form.service) return 'Vui lòng chọn dịch vụ cần tư vấn.'
   if (form.service === 'khac' && !form.serviceOther.trim()) return 'Vui lòng nhập vấn đề bạn cần tư vấn.'
   if (!form.name.trim()) return 'Vui lòng nhập họ và tên.'
   if (!/^[0-9+\s().-]{8,}$/.test(form.phone.trim())) return 'Số điện thoại chưa hợp lệ.'
   if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return 'Email chưa hợp lệ.'
   if (!form.message.trim()) return 'Vui lòng nhập nội dung cần tư vấn.'
   return ''
}

async function submit() {
   const msg = validate()
   if (msg) {
      error.value = msg
      return
   }
   error.value = ''
   submitting.value = true
   try {
      await new Promise(resolve => setTimeout(resolve, 600))
      submitted.value = true
   } catch {
      error.value = 'Không gửi được yêu cầu. Vui lòng thử lại sau.'
   } finally {
      submitting.value = false
   }
}

function reset() {
   Object.assign(form, { service: '', serviceOther: '', name: '', email: '', phone: '', message: '' })
   error.value = ''
   submitted.value = false
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

.input-field {
   width: 100%;
   height: 3rem;
   padding: 0 0.9375rem;
   border-radius: 0.625rem;
   font-size: 0.9375rem;
   border: 1px solid var(--color-gray-300);
   background: transparent;
   transition: border-color 0.15s ease;
}

textarea.input-field {
   height: auto;
   min-height: 8.125rem;
}

.dark .input-field {
   border-color: var(--color-gray-700);
}

.input-field:focus {
   outline: none;
   border-color: var(--color-primary);
}
</style>
